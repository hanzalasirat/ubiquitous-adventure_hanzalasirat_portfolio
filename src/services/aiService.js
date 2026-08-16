export async function askAI(prompt) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error('Missing VITE_GEMINI_API_KEY in environment');

  const url = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate';

  const body = {
    prompt: {
      text: prompt,
    },
    // adjust parameters as needed
    temperature: 0.2,
    maxOutputTokens: 512,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`AI API error: ${res.status} ${errText}`);
  }

  const data = await res.json();

  // Try a few common response shapes used by Generative Language API
  if (data?.candidates && data.candidates.length) {
    return data.candidates[0].content;
  }
  if (data?.output?.[0]?.content) {
    return data.output[0].content;
  }
  // fallback: stringify whole response
  return JSON.stringify(data);
}
