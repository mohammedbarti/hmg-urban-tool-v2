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
    const walk = parseInt(walkability);

    const phcCount = Math.ceil(pop / 10000);
    const emergencyPods = Math.ceil(pop / 5000);
    const telehealth = Math.ceil((parseInt(chronic) + parseInt(elderly)) / 25000);
    const mobile = Math.ceil(km2 / 10);

    let ambulances = 0;
    if (setting === 'Urban') {
      ambulances = Math.ceil(km2 / 2);
    } else {
      ambulances = Math.ceil(km2 / 1);
    }

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

      <div style={{ maxWidth: 400, margin: '2rem auto', textAlign
