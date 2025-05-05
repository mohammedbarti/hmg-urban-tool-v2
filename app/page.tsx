import React, { useState } from 'react';

const Page = () => {
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [density, setDensity] = useState('');
  const [growth, setGrowth] = useState('Stable');
  const [setting, setSetting] = useState('Urban');
  const [walkability, setWalkability] = useState('');
  const [regularAccess, setRegularAccess] = useState('');
  const [childrenPct, setChildrenPct] = useState('');
  const [elderlyPct, setElderlyPct] = useState('');
  const [womenPct, setWomenPct] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const pop = parseInt(population);
    const areaVal = parseFloat(area);
    const access = parseFloat(regularAccess) || 0;

    const primaryCenters = Math.ceil(pop / 10000);
    const emergencyPods = Math.ceil(pop / 5000);
    const telehealth = Math.ceil((pop * (access / 100)) / 15000);
    const mobileClinics = Math.ceil(areaVal / 10);
    const ambulances = setting === 'Urban' ? Math.ceil(areaVal / 4) : Math.ceil(areaVal / 2);

    setResult({
      primaryCenters,
      emergencyPods,
      telehealth,
      mobileClinics,
      ambulances
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src="/logo.png" alt="Logo" style={{ position: 'absolute', top: 10, left: 10, height: 40 }} />
      <h1>HMG Urban Planning Tool</h1>
      <p>Enter basic community info to get infrastructure recommendations.</p>

      <div>
        <input placeholder="Population" value={population} onChange={e => setPopulation(e.target.value)} /><br />
        <input placeholder="Area (km²)" value={area} onChange={e => setArea(e.target.value)} /><br />
        <input placeholder="Walkability Radius (m)" value={walkability} onChange={e => setWalkability(e.target.value)} /><br />
        <input placeholder="% Population Requiring Regular Access" value={regularAccess} onChange={e => setRegularAccess(e.target.value)} /><br />
        <input placeholder="% Children" value={childrenPct} onChange={e => setChildrenPct(e.target.value)} /><br />
        <input placeholder="% Elderly" value={elderlyPct} onChange={e => setElderlyPct(e.target.value)} /><br />
        <input placeholder="% Women" value={womenPct} onChange={e => setWomenPct(e.target.value)} /><br />

        <select value={density} onChange={e => setDensity(e.target.value)}>
          <option value="">Select Density</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select><br />

        <select value={growth} onChange={e => setGrowth(e.target.value)}>
          <option value="Stable">Stable</option>
          <option value="Growing">Growing</option>
          <option value="Declining">Declining</option>
        </select><br />

        <select value={setting} onChange={e => setSetting(e.target.value)}>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>
        </select><br /><br />

        <button onClick={calculate}>Generate Recommendations</button>
      </div>

      {result && (
        <div style={{ textAlign: 'left', maxWidth: 600, margin: '40px auto' }}>
          <h2>Recommendations:</h2>
          <ul>
            <li><strong>{result.primaryCenters} Primary Healthcare Centers</strong> — Based on 1 per 10,000 people</li>
            <li><strong>{result.emergencyPods} Emergency Pods</strong> — For high-density and quick-access needs</li>
            <li><strong>{result.telehealth} Telehealth Booths</strong> — For digitally connected underserved zones</li>
            <li><strong>{result.mobileClinics} Mobile Clinics</strong> — One per 10 km² coverage</li>
            <li><strong>{result.ambulances} Ambulance Units</strong> — Based on urban/rural density ratio</li>
          </ul>
        </div>
      )}

      <footer style={{ position: 'fixed', bottom: 10, right: 10, fontSize: '12px' }}>
        Made by: Dr. Mohammed alBarti – Corporate Business Development
      </footer>
    </div>
  );
};

export default Page;
