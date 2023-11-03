import {useState} from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./style.scss";
import { Button, Dropdown } from "antd";
const items = [
	{
		key: "1",
		label: (
			<NavLink
				to="/login"
				className="nav__link flex items-center justify-between"
			>
				<i className="bx bxs-log-out text-[#1b2336]"></i>
				<p>LogOut</p>
			</NavLink>
		),
	},
	{
		key: "2",
		label: (
			<NavLink
				to="/dashboard/sozlamalar"
				className="nav__link flex items-center justify-between"
			>
				<i className="bx bxs-cog  text-[#1b2336]"></i>
				<p>Dashboard</p>
			</NavLink>
		),
	},
];
const index = () => {
	const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
		<div className="ssss">
			<header className="flex items-center justify-between h-[80px] px-[50px] head">
				<NavLink to="/" className="nav__link flex items-center justify-between">
					<p>Dashboard</p>
				</NavLink>

				<div className="flex items-center gap-5 login">
					<button onClick={toggleSidebar} className="flex items-center">
						<i className="bx bx-menu text-[30px]"></i>
					</button>
					<div className="flex items-center gap-1 user">
						<Dropdown
							menu={{
								items,
							}}
							placement="bottomRight"
							arrow={{
								pointAtCenter: true,
							}}
						>
							<Button className="bg-slate-400 sozlama">
								{" "}
								<i className="bx bx-user text-[24px]"></i> MuhammadAmin
							</Button>
						</Dropdown>
					</div>
				</div>
			</header>

			<div className="down">
				<div className={`sidebar ${sidebarVisible ? "" : "hidden"}`}>
					<ul>
						<li>
							<NavLink to="/dashboard" className="nav__link">
								<i className="bx bxs-home text-[24px] text-[#1b2336]"></i>
								<p>Dashboard</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/oquvchilar" className="nav__link">
								<i className="bx bxs-group text-[24px] text-[#1b2336]"></i>
								<p>O'quvchilar</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/kurslar" className="nav__link">
								<i className="bx bxs-book text-[24px] text-[#1b2336]"></i>
								<p>Kurslar</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/buyurtmachilar" className="nav__link">
								<i className="bx bxs-user-voice text-[24px] text-[#1b2336]"></i>
								<p>Buyurtmachilar</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard/xizmatlar" className="nav__link">
								<i className="bx bxs-taxi text-[24px] text-[#1b2336]"></i>
								<p>Xizmatlar</p>
							</NavLink>
						</li>
					</ul>
				</div>

				<main className="">
					<div className="outlet">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default index;
