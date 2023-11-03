import Image from "../../assets/images/card_image.png";
import Korzinka from "../../assets/icons/korzinka.svg";
import Ellipse from "../../assets/images/Ellipse.png";
import "./style.scss";
import serviceApi from "../../service/Services";
import { useState,useEffect } from "react";
import ServicesCard from "../UI/ServiceCard";

const Services = () => {
	const [service, setService] = useState([]);

	useEffect(() => {
		serviceApi.getAll().then((response) => {
			console.log(response.data);
			setService(response.data.services);
		});
	}, []);
	return (
		<section id="services">
			<div className="container mx-auto px-5 ">
				<div className="services_wrapper flex items-center justify-between ">
					{service.map((item) => {
						return <ServicesCard key={item._id} state={item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
