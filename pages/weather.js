import { useState } from 'react';
import Link from 'next/link';

export default function WeatherPage() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!location) return;
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const res = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch weather');
      }
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Weather Service</h1>
      <Link href="/">Home</Link>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button onClick={fetchWeather} disabled={loading}>Get Weather</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h2>{location}</h2>
          <p>{weather.description}</p>
          <p>{weather.tempC}&deg;C</p>
        </div>
      )}
    </main>
  );
}
