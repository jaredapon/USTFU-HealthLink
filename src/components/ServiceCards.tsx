import React from "react";
import "./ServiceCards.css";
import inpatientIcon from "../assets/inpatient.png";
import admissionIcon from "../assets/admission.png";
import outpatientIcon from "../assets/outpatient.png";
import eyeglassesIcon from "../assets/eyeglasses.png";

const ServiceCards: React.FC = () => {
	const cards = [
		{ title: "Inpatient Application Form", icon: inpatientIcon },
		{ title: "Admission Application Form", icon: admissionIcon },
		{ title: "Outpatient Application Form", icon: outpatientIcon },
		{ title: "Eyeglasses Reimbursement Form", icon: eyeglassesIcon },
	];

	return (
		<div className="service-cards">
			{cards.map((card, index) => (
				<div className="card" key={index}>
					<img
						className="card-icon"
						src={card.icon}
						alt={card.title}
					/>
					{/* <span className="card-icon">{card.icon}</span> */}
					<p>{card.title}</p>
				</div>
			))}
		</div>
	);
};

export default ServiceCards;
