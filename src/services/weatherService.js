const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

export async function geocodeCity(city) {
  const url = `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Geocoding request failed');
  const data = await res.json();
  if (!data || !data.results || !data.results.length) throw new Error('City not found');
  const r = data.results[0];
  return {
    name: r.name + (r.admin1 ? (', ' + r.admin1) : '') + (r.country ? (', ' + r.country) : ''),
    latitude: r.latitude,
    longitude: r.longitude,
  };
}

export async function getWeatherByCoords(latitude, longitude) {
  // Request current weather and hourly relative humidity (if available)
  const url = `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather request failed');
  const data = await res.json();

  const current = data.current_weather || null;
  let humidity = null;
  if (data.hourly && data.hourly.relativehumidity_2m && data.hourly.time) {
    // find humidity value for the current hour
    try {
      const now = new Date().toISOString().slice(0, 13); // YYYY-MM-DDTHH
      // find closest index by matching prefix
      const idx = data.hourly.time.findIndex((t) => t.startsWith(now));
      if (idx !== -1) humidity = data.hourly.relativehumidity_2m[idx];
    } catch (e) {
      // ignore
    }
  }

  return {
    temperature: current?.temperature ?? null,
    windspeed: current?.windspeed ?? null,
    weathercode: current?.weathercode ?? null,
    humidity,
    timezone: data.timezone ?? null,
    raw: data,
  };
}

export function weatherCodeToText(code) {
  // simplified mapping from Open-Meteo weather codes
  const map = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    95: 'Thunderstorm',
  };
  return map[code] || 'Unknown';
}
