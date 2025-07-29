import React from "react";
import "../styles/louisstats.css";

const stats = [
  { number: "50+", label: "Músicas lançadas" },
  { number: "8", label: "Anos de carreira solo" },
  { number: "200+", label: "Shows ao vivo" },
  { number: "30+", label: "Países visitados" },
  { number: "10+", label: "Prêmios conquistados" },
];

function LouisStats() {
  return (
    <section className="louis-stats">
      <h1 className="stats-title">Louis em Números</h1>
      <hr className="hr-stats" />
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LouisStats;
