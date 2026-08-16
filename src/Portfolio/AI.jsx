import { useState, useRef, useEffect } from 'react';
import { askAI } from '../services/aiService';
import '../assets/style.ai.css';

export default function AI() {
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem('aiConversations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimerRef = useRef(null);
  const [prompt, setPrompt] = useState('');
  const [demoMode, setDemoMode] = useState(false);
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, displayedResponse]);

  // Load conversation
  useEffect(() => {
    if (currentConversationId) {
      const conv = conversations.find(c => c.id === currentConversationId);
      if (conv) {
        setMessages(conv.messages);
      }
    } else {
      setMessages([]);
    }
  }, [currentConversationId, conversations]);

  // Save conversations
  useEffect(() => {
    localStorage.setItem('aiConversations', JSON.stringify(conversations));
  }, [conversations]);

  // Typewriter effect
  const typeResponse = (text) => {
    setIsTyping(true);
    setDisplayedResponse('');
    let index = 0;
    
    typingTimerRef.current = setInterval(() => {
      if (index < text.length) {
        setDisplayedResponse(prev => prev + text.charAt(index));
        index++;
        scrollToBottom();
      } else {
        clearInterval(typingTimerRef.current);
        setIsTyping(false);
        const assistantMessage = { 
          type: 'assistant', 
          content: text,
          timestamp: new Date().toISOString()
        };
        
        // Update messages
        setMessages(prev => [...prev, assistantMessage]);
        
        // Update conversation
        const currentConv = conversations.find(c => c.id === currentConversationId);
        if (currentConv) {
          const updatedConv = {
            ...currentConv,
            messages: [...currentConv.messages, assistantMessage],
            updatedAt: new Date().toISOString()
          };
          setConversations(prev => 
            prev.map(c => c.id === currentConversationId ? updatedConv : c)
          );
        }
        
        setDisplayedResponse('');
      }
    }, 20);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;
    if (!geminiKey && !demoMode) {
      setError('Missing VITE_GEMINI_API_KEY in environment. See .env.example and restart dev server. Or enable Demo mode below to test UI.');
      return;
    }

    const userMessage = { 
      type: 'user', 
      content: prompt.trim(),
      timestamp: new Date().toISOString()
    };

    // Create new conversation if none exists
    let convId = currentConversationId;
    if (!convId) {
      const newConv = {
        id: Date.now().toString(),
        title: prompt.trim().slice(0, 30) + (prompt.trim().length > 30 ? '...' : ''),
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setConversations(prev => [newConv, ...prev]);
      convId = newConv.id;
      setCurrentConversationId(convId);
    }

    // Add user message
    setMessages(prev => [...prev, userMessage]);
    
    // Update conversation
    const currentConv = conversations.find(c => c.id === convId);
    if (currentConv) {
      const updatedConv = {
        ...currentConv,
        messages: [...currentConv.messages, userMessage],
        updatedAt: new Date().toISOString()
      };
      setConversations(prev => 
        prev.map(c => c.id === convId ? updatedConv : c)
      );
    }

    setPrompt('');
    setError(null);
    setLoading(true);

    try {
      if (demoMode) {
        // simple mock response for demo/testing
        await new Promise((res) => setTimeout(res, 700));
        const mock = `Demo response: I received your message: "${prompt.trim()}"\n\n(Enable a real Gemini key in .env to get live AI responses.)`;
        typeResponse(mock);
      } else {
        const response = await askAI(prompt.trim());
        typeResponse(response);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      setIsTyping(false);
    }
    setMessages([]);
    setDisplayedResponse('');
    setError(null);
    setPrompt('');
    setCurrentConversationId(null);
    inputRef.current?.focus();
  };

  const deleteConversation = (id) => {
    if (window.confirm('Delete this conversation?')) {
      setConversations(prev => prev.filter(c => c.id !== id));
      if (currentConversationId === id) {
        setCurrentConversationId(null);
        setMessages([]);
      }
    }
  };

  const newConversation = () => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      setIsTyping(false);
    }
    setCurrentConversationId(null);
    setMessages([]);
    setDisplayedResponse('');
    setPrompt('');
    setError(null);
    inputRef.current?.focus();
    if (isMobile) setSidebarOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';
    return date.toLocaleDateString();
  };

  return (
    <div className="ai-page chatgpt">
      {/* Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`ai-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button className="new-chat-btn" onClick={newConversation}>
            <span>+</span> New Chat
          </button>
          {isMobile && (
            <button className="close-sidebar-btn" onClick={() => setSidebarOpen(false)}>
              ✕
            </button>
          )}
        </div>

        <div className="sidebar-conversations">
          {conversations.length === 0 ? (
            <div className="sidebar-empty">
              <span>💬</span>
              <p>No conversations yet</p>
              <small>Start a new chat above</small>
            </div>
          ) : (
            conversations.map(conv => (
              <div
                key={conv.id}
                className={`sidebar-item ${currentConversationId === conv.id ? 'active' : ''}`}
                onClick={() => {
                  setCurrentConversationId(conv.id);
                  if (isMobile) setSidebarOpen(false);
                }}
              >
                <div className="sidebar-item-icon">💬</div>
                <div className="sidebar-item-content">
                  <div className="sidebar-item-title">{conv.title}</div>
                  <div className="sidebar-item-date">{formatDate(conv.updatedAt)}</div>
                </div>
                <button 
                  className="sidebar-item-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteConversation(conv.id);
                  }}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <div className="user-name">Guest User</div>
              <div className="user-status">Online</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="ai-main">
        <div className="ai-card premium">
          {/* Header */}
          <div className="ai-header">
            <div className="ai-header-left">
              <button 
                className="menu-toggle" 
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                ☰
              </button>
              <div>
                <h2 className="ai-title">🤖 AI Assistant</h2>
                <div className="ai-status">
                  <span className={`status-indicator ${loading || isTyping ? 'active' : 'idle'}`}></span>
                  {loading ? 'Thinking...' : isTyping ? 'Typing...' : 'Ready'}
                </div>
              </div>
            </div>
            <div className="ai-header-right">
              {messages.length > 0 && (
                <>
                  <button className="ai-clear-btn" onClick={clearChat} title="Clear chat">
                    <span>🗑️</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* API key banner / demo mode */}
          {!geminiKey && (
            <div className="ai-key-banner">
              <div className="ai-key-warning">⚠️ Missing VITE_GEMINI_API_KEY in environment</div>
              <div className="ai-key-instructions">Create a `.env` file in project root with <code>VITE_GEMINI_API_KEY=your_key</code> and restart the dev server. For quick testing, enable Demo mode below.</div>
              <div className="ai-demo-toggle">
                <label>
                  <input type="checkbox" checked={demoMode} onChange={(e) => setDemoMode(e.target.checked)} /> Enable Demo mode
                </label>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div className="ai-chat-container">
            {messages.length === 0 && !displayedResponse && (
              <div className="ai-welcome">
                <div className="welcome-icon">✨</div>
                <h3>How can I help you today?</h3>
                <p>Ask me anything and I'll do my best to assist you!</p>
                <div className="welcome-suggestions">
                  <button onClick={() => setPrompt("What is the meaning of life?")}>
                    🤔 Philosophy
                  </button>
                  <button onClick={() => setPrompt("Tell me a fun fact")}>
                    💡 Fun Fact
                  </button>
                  <button onClick={() => setPrompt("Write a poem about coding")}>
                    📝 Poetry
                  </button>
                  <button onClick={() => setPrompt("Explain quantum physics simply")}>
                    🔬 Science
                  </button>
                </div>
              </div>
            )}

            <div className="ai-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <div className="message-avatar">
                    {msg.type === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-sender">
                        {msg.type === 'user' ? 'You' : 'AI Assistant'}
                      </span>
                      <span className="message-time">
                        {new Date(msg.timestamp || Date.now()).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="message-text">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing animation */}
              {(loading || isTyping) && (
                <div className="message assistant typing">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-sender">AI Assistant</span>
                    </div>
                    <div className="message-text">
                      {displayedResponse}
                      {isTyping && <span className="typing-cursor">|</span>}
                      {loading && !displayedResponse && (
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {error && (
            <div className="ai-error-toast">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
              <button className="error-dismiss" onClick={() => setError(null)}>✕</button>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="ai-form">
            <div className="ai-input-wrapper">
              <textarea
                ref={inputRef}
                className="ai-input"
                placeholder="Type your message here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyPress}
                rows={1}
                disabled={loading || isTyping}
                aria-label="AI question"
              />
              <div className="ai-input-actions">
                <button 
                  type="submit" 
                  className="ai-send-btn" 
                  disabled={!prompt.trim() || loading || isTyping}
                >
                  <span>{loading || isTyping ? '⏳' : '➤'}</span>
                </button>
              </div>
            </div>
            <div className="ai-form-footer">
              <span className="ai-hint">Press Enter to send, Shift+Enter for new line</span>
              {messages.length > 0 && (
                <span className="ai-message-count">
                  {messages.length} messages
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}