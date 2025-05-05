"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Page = () => {
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [walkability, setWalkability] = useState('');
  const [percentAccess, setPercentAccess] = useState('');
  const [elderlyPercent, setElderlyPercent] = useState('');
  const [femalePercent, setFemalePercent] = useState('');
  const [childrenPercent, setChildrenPercent] = useState('');
  const [density, setDensity] = useState('Low');
  const [growthStatus, setGrowthStatus] = useState('Stable');
  const [settingType, setSettingType] = useState('Urban');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const pop = parseInt(population);
    const km2 = parseFloat(area);
    const mobileUnits = Math.ceil(km2 / 10);
    const accessPop = Math.ceil((pop * parseInt(percentAccess || '0')) / 100);
    const phcs = Math.ceil(pop / 10000);
    const emergencyPods = Math.ceil(pop / 5000);
    const telehealthBooths = Math.ceil(pop / 25000);
    const ambulances = settingType === 'Urban' ? Math.ceil(km2 / 2) : Math.ceil(km2 / 1);

    setResult({
      phcs,
      emergencyPods,
      telehealthBooths,
      mobileUnits,
      ambulances,
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image src={logo} alt="Logo" width={140} height={50} />
      </div>
      <h1 style={{ textAlign: 'center' }}>HMG Urban Planning Tool</h1>
      <p style={{ textAlign: 'center' }}>
        Enter basic community info to get infrastructure recommendations.
      </p>

      <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Population:<input type="number" value={population} onChange={(e) => setPopulation(e.target.value)} /></label>
        <label>Area (km²):<input type="number" value={area} onChange={(e) => setArea(e.target.value)} /></label>
        <label>Walkability Distance (m):<input type="number" value={walkability} onChange={(e) => setWalkability(e.target.value)} /></label>
        <label>% Requiring Regular Access:<input type="number" value={percentAccess} onChange={(e) => setPercentAccess(e.target.value)} /></label>
        <label>% Elderly:<input type="number" value={elderlyPercent} onChange={(e) => setElderlyPercent(e.target.value)} /></label>
        <label>% Female:<input type="number" value={femalePercent} onChange={(e) => setFemalePercent(e.target.value)} /></label>
        <label>% Children:<input type="number" value={childrenPercent} onChange={(e) => setChildrenPercent(e.target.value)} /></label>

        <label>Density:
          <select value={density} onChange={(e) => setDensity(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>Growth Status:
          <select value={growthStatus} onChange={(e) => setGrowthStatus(e.target.value)}>
            <option value="Growing">Growing</option>
            <option value="Stable">Stable</option>
            <option value="Declining">Declining</option>
          </select>
        </label>

        <label>Setting Type:
          <select value={settingType} onChange={(e) => setSettingType(e.target.value)}>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
          </select>
        </label>

        <button onClick={handleClick}>Generate Recommendations</button>
      </div>

      {result && (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2>Recommendations:</h2>
          <ul style={{ listStyle: 'disc', textAlign: 'left', display: 'inline-block' }}>
            <li><strong>{result.phcs} Primary Healthcare Centers</strong> — Based on 1 per 10,000 people</li>
            <li><strong>{result.emergencyPods} Emergency Pods</strong> — For high-density and quick-access needs</li>
            <li><strong>{result.telehealthBooths} Telehealth Booths</strong> — For digitally connected underserved zones</li>
            <li><strong>{result.mobileUnits} Mobile Clinics</strong> — One per 10 km² coverage</li>
            <li><strong>{result.ambulances} Ambulance Units</strong> — Based on urban/rural density ratio</li>
          </ul>
        </div>
      )}

      <footer style={{ marginTop: '50px', textAlign: 'right', fontSize: 'small' }}>
        Made by: Dr. Mohammed alBarti – Corporate Business Development
      </footer>
    </div>
  );
};

export default Page;
