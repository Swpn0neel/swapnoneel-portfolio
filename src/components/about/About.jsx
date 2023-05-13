import React from 'react';
import './About.css';
import Image from '../../components/home/me.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Swapnoneel, and I'm based in Kolkata, India. I am currently studying Computer Science and Engineering at Maulana Abul Kalam Azad University of Technology<br/><br/>
                            I am a self-taught Developer & Programmer and a person who loves to learn new things. I have been working on my skills for quiet sometime now. I started Programming with Java and then graduated to Python. While learning, I created some projects based on them; such as a Brick Breaker’s Game, Target Practice Game, Text-toSpeech Converter and many more!!<br/><br/>
                            Then, recently I have started learning Front-End Web-Development, and covered HTML, CSS and JavaScript...then proceeded towards Svelte & Tailwind CSS, and I’m still continuing that journey forward.<br/><br/>
                            And, in the mean time, I was also creating some projects based of my learnings on Web-Development. I am looking forward to learn about AI-ML, Data Analytics, and Back-End Web Development in the coming future.<br/><br/>
                            These are some topics of my excellence:
                        </p>
                        <ul className="about__list">
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>Svelte</li>
                            <li>Bootstrap & Tailwind CSS</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Firebase</li>
                            <li>Figma</li>
                        </ul>
                        <button class="blob-btn" onClick={downloadResume}>
                            Donwload CV
                            <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                            </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}
export default About
