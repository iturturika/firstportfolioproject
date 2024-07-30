import React from 'react';
import './AboutCard.scss';

export function AboutCard({ img, title, p, isDark }) {
  return (
    <article className="about-card">
      <img src={img} alt="retroPc" />
      <div className="about-card-info">
        <h6 style={isDark ? { color: '#fff' } : {}}>{title}</h6>
        <p style={isDark ? { color: '#fff' } : {}}>{p}</p>
      </div>
    </article>
  );
}
