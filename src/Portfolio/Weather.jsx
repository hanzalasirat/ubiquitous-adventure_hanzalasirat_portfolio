import { useEffect, useState } from 'react';
import { geocodeCity, getWeatherByCoords, weatherCodeToText } from '../services/weatherService';
import '../assets/style.weather.css';

export default function Weather() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [search, setSearch] = useState('');
  const [needsManual, setNeedsManual] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setNeedsManual(true);
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const w = await getWeatherByCoords(latitude, longitude);
          setWeather(w);
          setLocationName(`${latitude.toFixed(3)}, ${longitude.toFixed(3)}`);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setNeedsManual(true);
        setLoading(false);
      }
    );
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const loc = await geocodeCity(search.trim());
      setLocationName(loc.name);
      const w = await getWeatherByCoords(loc.latitude, loc.longitude);
      setWeather(w);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (code) => {
    const icons = {
      0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
      45: '🌫️', 48: '🌫️',
      51: '🌧️', 53: '🌧️', 55: '🌧️',
      61: '🌧️', 63: '🌧️', 65: '🌧️',
      71: '❄️', 73: '❄️', 75: '❄️',
      80: '🌦️', 81: '🌦️', 82: '🌦️',
      95: '⛈️', 96: '⛈️', 99: '⛈️'
    };
    return icons[code] || '🌡️';
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const convertTemp = (celsius) => {
    if (!celsius && celsius !== 0) return 'N/A';
    return isFahrenheit ? ((celsius * 9/5) + 32).toFixed(1) : celsius;
  };

  return (
    <div className="weather-page">
      <div className="weather-card">
        {/* Animated background elements */}
        <div className="weather-bg-glow glow-1"></div>
        <div className="weather-bg-glow glow-2"></div>
        <div className="weather-bg-glow glow-3"></div>
        
        {/* Floating particles */}
        <div className="weather-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}></div>
          ))}
        </div>

        <div className="weather-header">
          <div className="weather-header-left">
            <h2 className="weather-title">🌤️ Weather</h2>
            <div className="weather-time">{formatTime()}</div>
          </div>
          {weather && (
            <button 
              className="temp-toggle"
              onClick={() => setIsFahrenheit(!isFahrenheit)}
            >
              °{isFahrenheit ? 'C' : 'F'}
            </button>
          )}
        </div>

        {loading && (
          <div className="weather-loading">
            <div className="loader"></div>
            <span>Fetching weather data...</span>
          </div>
        )}
        
        {error && (
          <div className="weather-error">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {!loading && needsManual && (
          <form onSubmit={handleSearch} className="weather-search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter city name..."
              aria-label="Search city"
              className="weather-input"
            />
            <button type="submit" className="weather-search-btn">
              <span>🔍</span> Search
            </button>
          </form>
        )}

        {weather && (
          <div className="weather-details">
            <div className="weather-greeting">
              {getGreeting()} {locationName && `in ${locationName}`}
            </div>

            <div className="weather-main">
              <div className="weather-temp-large">
                <span className="weather-icon-large">
                  {getWeatherIcon(weather.weathercode)}
                </span>
                <span className="temperature-number">
                  {convertTemp(weather.temperature)}
                  <span className="temp-unit">°{isFahrenheit ? 'F' : 'C'}</span>
                </span>
              </div>
              <div className="weather-condition">
                {weatherCodeToText(weather.weathercode)}
              </div>
            </div>

            <div className="weather-grid">
              <div className="weather-item premium">
                <div className="item-icon">💨</div>
                <div className="item-content">
                  <div className="label">Wind Speed</div>
                  <div className="value">{weather.windspeed ?? 'N/A'} <span className="unit">m/s</span></div>
                </div>
              </div>
              <div className="weather-item premium">
                <div className="item-icon">💧</div>
                <div className="item-content">
                  <div className="label">Humidity</div>
                  <div className="value">{weather.humidity ?? 'N/A'} <span className="unit">%</span></div>
                </div>
              </div>
              <div className="weather-item premium">
                <div className="item-icon">🌡️</div>
                <div className="item-content">
                  <div className="label">Feels Like</div>
                  <div className="value">
                    {convertTemp(weather.temperature ? weather.temperature - 2 : null)}
                    <span className="unit">°{isFahrenheit ? 'F' : 'C'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="weather-footer">
              <span className="footer-update">🔄 Updated just now</span>
              <span className="footer-location">📍 {locationName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}