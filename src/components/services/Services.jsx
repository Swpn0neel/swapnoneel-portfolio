import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX Designing",
        description:
            "Creating attractive designs for websites or any other purpose using Figma & Canva",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        image: Image3,
        title: "Content Writing",
        description:
            "Writing high-quality blogs or script-writing for videos in any topic as per customer's choice",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services