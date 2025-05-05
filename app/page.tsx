'use client';

import React, { useState } from 'react';

const Page = () => {
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [walkability, setWalkability] = useState('');
  const [elderly, setElderly] = useState('');
  const [children, setChildren] = useState('');
  const [chronic, setChronic] = useState('');
  const [female, setFemale] = useState('');
  const [density, setDensity] = useState('Low');
  const [growth, setGrowth] = useState('Stable');
  const [setting, setSetting] = useState('Urban');

  const [result, setResult] = useState<any>(null);

  const handleGenerate = () => {
    const pop = parseInt(population);
    const km2 = parseInt(area);

    const phcCount = Math.ceil(pop / 10000);
    const emergencyPods = Math.ceil(pop / 5000);
    const telehealth = Math.ceil((parseInt(chronic) + parseInt(elderly)) / 25000);
    const mobile = Math.ceil(km2 / 10);
    const ambulances = setting === 'Urban' ? Math.ceil(km2 / 2) : Math.ceil(km2 / 1);

    setResult({
      phcCount,
      emergencyPods,
      telehealth,
      mobile,
      ambulances,
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
      <img src="/logo.png" alt="Logo" style={{ position: 'absolute', top: 10, left: 10, height: 40 }} />
      <h1>HMG Urban Planning Tool</h1>
      <p>Enter basic community info to get infrastructure recommendations.</p>

      <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'left' }}>
        <label>Population:</label>
        <input type="number" value={population} onChange={(e) => setPopulation(e.target.value)} />

        <label>Area (km²):</label>
        <input type="number" value={area} onChange={(e) => setArea(e.target.value)} />

        <label>Walkability Radius (m):</label>
        <input type="number" value={walkability} onChange={(e) => setWalkability(e.target.value)} />

        <label>% Elderly Population:</label>
        <input type="number" value={elderly} onChange={(e) => setElderly(e.target.value)} />

        <label>% Children Population:</label>
        <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />

        <label>% Chronic / Regular Care Population:</label>
        <input type="number" value={chronic} onChange={(e) => setChronic(e.target.value)} />

        <label>% Female Population:</label>
        <input type="number" value={female} onChange={(e) => setFemale(e.target.value)} />

        <label>Density:</label>
        <select value={density} onChange={(e) => setDensity(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Growth Status:</label>
        <select value={growth} onChange={(e) => setGrowth(e.target.value)}>
          <option>Growing</option>
          <option>Stable</option>
          <option>Declining</option>
        </select>

        <label>Setting Type:</label>
        <select value={setting} onChange={(e) => setSetting(e.target.value)}>
          <option>Urban</option>
          <option>Rural</option>
        </select>
      </div>

      <button onClick={handleGenerate} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        Generate Recommendations
      </button>

      {result && (
        <div className="recommendations" style={{ marginTop: '3rem', textAlign: 'left', maxWidth: 600, marginInline: 'auto' }}>
          <h2>Recommendations:</h2>
          <ul style={{ lineHeight: 2 }}>
            <li>🩺 <strong>{result.phcCount} Primary Healthcare Centers</strong> — Based on 1 per 10,000 people</li>
            <li>🚨 <strong>{result.emergencyPods} Emergency Pods</strong> — For high-density and quick-access needs</li>
            <li>🧑‍💻 <strong>{result.telehealth} Telehealth Booths</strong> — For digitally connected underserved zones</li>
            <li>🚐 <strong>{result.mobile} Mobile Clinics</strong> — One per 10 km² coverage</li>
            <li>🚑 <strong>{result.ambulances} Ambulance Units</strong> — Based on urban/rural density ratio</li>
          </ul>
        </div>
      )}

      <footer style={{ position: 'fixed', bottom: 10, right: 10, fontSize: '0.8rem', color: '#555' }}>
        Made by: Dr. Mohammed alBarti – Corporate Business Development
      </footer>
    </div>
  );
};

export default Page;
