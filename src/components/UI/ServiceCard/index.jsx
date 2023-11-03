import React from 'react';
// import serviceCard_image from "../../../assets/images/serviceCard_image.png"
import './style.scss';

const ServicesCard = ({ state: { title, description, image, createdAt, users } }) => {
    return (
        <div className='service_card w-[512px] shadow-md hover:shadow-xl duration-300'>
            <div className='service_header'>
                <img src={`https://api.webhub.uz${image}`} alt="Service Card image" />
            </div>

            <div className='service_card_body'>
                <div className='service_card_body-top'>
                    <p className='students'>{users.length} Students</p>
                    <p className='time'>{createdAt}</p>
                </div>

                <h4 title={description}>
                    {description.length > 50 ? String(description).slice(0, 50) + '...' : description}
                </h4>

                <div className='service_card_body-bottom'>
                    <p className='price'>$1999.99</p>
                    <i className='bx bx-cart-alt'></i>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard