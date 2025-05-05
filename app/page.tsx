
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [recommendations, setRecommendations] = useState<string[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pop = parseInt(population);
    const areaSize = parseFloat(area);

    if (isNaN(pop) || isNaN(areaSize) || pop <= 0 || areaSize <= 0) {
      alert('Please enter valid population and area values.');
      return;
    }

    const results: string[] = [];

    const phcs = Math.ceil(pop / 10000);
    results.push(`${phcs} PHCs — Based on population size (${pop}) with ratio 1 per 10,000`);

    const pods = Math.ceil(pop / 5000);
    results.push(`${pods} Emergency Pods — To ensure coverage and rapid response`);

    const booths = Math.ceil(pop / 15000);
    results.push(`${booths} Telehealth Booths — Supporting underserved areas`);

    const mobileUnits = Math.ceil(areaSize / 10);
    results.push(`${mobileUnits} Mobile Clinics — To cover ${areaSize} km²`);

    setRecommendations(results);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>HMG Urban Planning Tool</h1>
      <p>Enter basic community info to get infrastructure recommendations.</p>

      <form onSubmit={handleSubmit} style={{ margin: '2rem auto', maxWidth: 400 }}>
        <input
          type="number"
          placeholder="Population"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
          style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="number"
          placeholder="Area (km²)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
          style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Generate Recommendations</button>
      </form>

      {recommendations && (
        <div style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map((item, idx) => (
              <li key={idx}><strong>{item.split('—')[0].trim()}</strong> — {item.split('—')[1].trim()}</li>
            ))}
          </ul>
        </div>
      )}

      <footer style={{ position: 'fixed', bottom: 10, right: 10, fontSize: '0.8rem', color: 'gray' }}>
        Made by: Dr. Mohammed alBarti – Corporate Business Development
      </footer>
    </div>
  );
}
