import React from 'react';
import './Home.css';
import Me from './me.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='180' />
                <h1 className="home__name">Swapnoneel Saha</h1>
                <span className="home__education">Front-End Web Developer || UI/UX Designer</span>
                <br></br>
                <span className="home__education">Tech-Blogger || Java || Python || Open-Source</span>

                <HeaderSocials />

                <a href="#contact" > 
                        <button class="blob-btn">
                            Contact Me
                            <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                            </span>
                            </span>
                        </button>
                    <br/>
                </a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home
