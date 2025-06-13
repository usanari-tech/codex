import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { location } = req.query;
  if (!location) {
    return res.status(400).json({ error: 'Missing location' });
  }
  try {
    const resp = await fetch(`https://wttr.in/${encodeURIComponent(location)}?format=j1`);
    if (!resp.ok) {
      return res.status(500).json({ error: 'Failed to fetch weather' });
    }
    const data = await resp.json();
    const current = data.current_condition && data.current_condition[0];
    if (!current) {
      return res.status(404).json({ error: 'No weather data available' });
    }
    res.status(200).json({
      tempC: current.temp_C,
      description: current.weatherDesc[0].value,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
