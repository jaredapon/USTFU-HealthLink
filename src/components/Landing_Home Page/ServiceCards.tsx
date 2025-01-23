import { useNavigate } from "react-router-dom";
import "./ServiceCards.css";
import inpatientIcon from "../../assets/inpatient.png";
import admissionIcon from "../../assets/admission.png";
import outpatientIcon from "../../assets/outpatient.png";
import eyeglassesIcon from "../../assets/eyeglasses.png";

const ServiceCards = () => {
	const navigate = useNavigate();
	const cards = [
		{
			title: "Inpatient Application Form",
			icon: inpatientIcon,
			path: "/inpatient",
		},
		{
			title: "Admission Application Form",
			icon: admissionIcon,
			path: "/admission",
		},
		{
			title: "Outpatient Application Form",
			icon: outpatientIcon,
			path: "/outpatient",
		},
		{
			title: "Eyeglasses Reimbursement Form",
			icon: eyeglassesIcon,
			path: "/eyeglasses",
		},
	];

	return (
		<div className="service-cards">
			{cards.map((card, index) => (
				<div
					className="card"
					key={index}
					onClick={() => navigate(card.path)}
				>
					<img
						className="card-icon"
						src={card.icon}
						alt={card.title}
					/>
					<p>{card.title}</p>
				</div>
			))}
		</div>
	);
};

export default ServiceCards;
