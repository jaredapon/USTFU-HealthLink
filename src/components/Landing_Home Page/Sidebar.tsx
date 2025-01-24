import { useState } from "react";
import Profile from "./Profile";
import "./Sidebar.css";

import { TbHomeEdit } from "react-icons/tb";
import { MdHistory } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiSettings5Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

const Sidebar = ({
	isOpen,
	toggleSidebar,
}: {
	isOpen: boolean;
	toggleSidebar: () => void;
}) => {
	const [activeItem, setActiveItem] = useState("HOSPITALIZATION APPLICATION");

	const menuItems = [
		{ name: "HOSPITALIZATION APPLICATION", icon: <TbHomeEdit size={18} /> },
		{ name: "HOSPITALIZATION TRACKING", icon: <MdHistory size={18} /> },
		{ name: "FAQ", icon: <AiOutlineQuestionCircle size={18} /> },
		{ name: "SETTINGS", icon: <RiSettings5Line size={18} /> },
		{ name: "LOGOUT", icon: <TbLogout size={18} /> },
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
						<span className="menu-icon">{item.icon}</span>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
