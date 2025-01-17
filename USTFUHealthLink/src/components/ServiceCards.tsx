import React from "react";
import "./ServiceCards.css";

const ServiceCards: React.FC = () => {
  const cards = [
    { title: "Inpatient Application Form", icon: "📝" },
    { title: "Admission Application Form", icon: "🏥" },
    { title: "Outpatient Application Form", icon: "📄" },
    { title: "Eyeglasses Reimbursement Form", icon: "👓" },
  ];

  return (
    <div className="service-cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <span className="card-icon">{card.icon}</span>
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
