import React from 'react';
import './HomeContent.css';

export default function HomeContent() {
  return (
    <div className="home-wrap">
      <div className="home-placeholder" style={{padding: '120px 40px', textAlign: 'center'}}>
        <h1 style={{color: 'var(--lime)', fontSize: 48}}>Home page lands here</h1>
        <p style={{color: 'var(--text-3)'}}>Phase 2 builds the hero. Phase 3 builds the engine. Phase 4 builds everything else.</p>
      </div>
    </div>
  );
}
