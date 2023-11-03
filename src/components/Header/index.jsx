import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import ButtonLink from "./ButtonLink";

const index = () => {


  return (
		<header>
			<div className="container">
				<nav className="navbar">
					<a href="#">
						<img src={logo} alt="" />
					</a>

					<div className="navbar_info">
						<ul className="navbar_info_list">
							<li>
								<a href="#" className="navbar_info_list_item">
									Courses
								</a>
							</li>
							<li>
								<a href="#" className="navbar_info_list_item">
									Services
								</a>
							</li>
						</ul>
						<ButtonLink to="/login" text="Join" />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default index;
