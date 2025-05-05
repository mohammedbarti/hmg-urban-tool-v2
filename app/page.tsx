'use client';
import { useState } from 'react';

export default function Home() {
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [density, setDensity] = useState('');
  const [growth, setGrowth] = useState('stable');
  const [setting, setSetting] = useState('urban');
  const [result, setResult] = useState<null | JSX.Element[]>(null);

  const calculate = () => {
    const pop = parseInt(population);
    const km2 = parseFloat(area);
    const popDensity = density || (pop && km2 ? (pop / km2).toFixed(0) : '0');

    const phcs = Math.ceil(pop / 10000);
    const pods = Math.ceil(pop / 5000);
    const booths = Math.ceil(pop / 10000);
    const mobiles = Math.ceil(km2 / 10);
    const helipads = setting === 'rural' ? 1 : 0;

    const items = [
      <li key="phcs"><strong>{phcs} PHCs</strong> — Based on population size ({pop}) with ratio 1 per 10,000</li>,
      <li key="pods"><strong>{pods} Emergency Pods</strong> — To ensure coverage and rapid response</li>,
      <li key="booths"><strong>{booths} Telehealth Booths</strong> — Supporting underserved areas</li>,
      <li key="mobiles"><strong>{mobiles} Mobile Clinics</strong> — To cover {km2} km²</li>,
    ];

    if (helipads) {
      items.push(<li key="helipad"><strong>1 Helipad</strong> — Required for rural air access</li>);
    }

    setResult(items);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <img src="/logo.png" alt="HMG Logo" style={{ width: '120px', position: 'absolute', top: '20px', left: '20px' }} />
      <h1>HMG Urban Planning Tool</h1>
      <p>Enter basic community info to get infrastructure recommendations.</p>

      <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
        <label>Population:</label>
        <input value={population} onChange={e => setPopulation(e.target.value)} type="number" style={inputStyle} />

        <label>Area (km²):</label>
        <input value={area} onChange={e => setArea(e.target.value)} type="number" style={inputStyle} />

        <label>Density (optional):</label>
        <input value={density} onChange={e => setDensity(e.target.value)} type="number" style={inputStyle} />

        <label>Growth Status:</label>
        <select value={growth} onChange={e => setGrowth(e.target.value)} style={inputStyle}>
          <option value="growing">Growing</option>
          <option value="stable">Stable</option>
          <option value="declining">Declining</option>
        </select>

        <label>Setting Type:</label>
        <select value={setting} onChange={e => setSetting(e.target.value)} style={inputStyle}>
          <option value="urban">Urban</option>
          <option value="rural">Rural</option>
        </select>
      </div>

      <button onClick={calculate} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Generate Recommendations
      </button>

      {result && (
        <div style={{ textAlign: 'left', marginTop: '2rem', maxWidth: '700px', marginInline: 'auto' }}>
          <h2>Recommendations:</h2>
          <ul>{result}</ul>
        </div>
      )}

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#777' }}>
        Made by: Dr. Mohammed alBarti – Corporate Business Development
      </footer>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  marginBottom: '1rem',
  padding: '0.5rem',
};
