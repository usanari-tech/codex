export default function PollenForecast() {
  const today = new Date();
  const forecast = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const month = date.getMonth() + 1;
    let level;
    if (month === 3 || month === 4) {
      level = '高い';
    } else if (month === 2 || month === 5) {
      level = '中程度';
    } else {
      level = '低い';
    }
    forecast.push({ date: date.toISOString().split('T')[0], level });
  }

  return (
    <main>
      <h1>花粉予測</h1>
      <p>次の7日間の簡易花粉レベル予測です。</p>
      <ul>
        {forecast.map((item) => (
          <li key={item.date}>{item.date}: {item.level}</li>
        ))}
      </ul>
    </main>
  );
}
