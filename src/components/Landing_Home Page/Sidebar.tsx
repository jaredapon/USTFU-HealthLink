import { useState } from "react";
import Profile from "./Profile";
import "./Sidebar.css";
import hospitalizationIcon from "../../assets/application.png";
import trackingIcon from "../../assets/tracking.png";
import faqIcon from "../../assets/faq.png";
import settingsIcon from "../../assets/settings.png";
import logoutIcon from "../../assets/logout.png";

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
	const [activeItem, setActiveItem] = useState("HOSPITALIZATION APPLICATION");

	const menuItems = [
		{ name: "HOSPITALIZATION APPLICATION", icon: hospitalizationIcon },
		{ name: "HOSPITALIZATION TRACKING", icon: trackingIcon },
		{ name: "FAQ", icon: faqIcon },
		{ name: "SETTINGS", icon: settingsIcon },
		{ name: "LOGOUT", icon: logoutIcon },
	];

	return (
		<div className={`Sidebar ${isOpen ? "open" : "collapsed"}`}>
			<div className="Profile"> 
				<Profile />
			</div>
			<button className="toggle-btn" onClick={toggleSidebar}>
				{isOpen ? "Close" : "Menu"}
			</button>
			<ul className="SidebarMenu">
				{menuItems.map((item) => (
					<li
						key={item.name}
						className={activeItem === item.name ? "active" : ""}
						onClick={() => setActiveItem(item.name)}
					>
						<img src={item.icon} alt={item.name} className="menu-icon" />
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
