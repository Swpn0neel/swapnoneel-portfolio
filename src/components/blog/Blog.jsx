import React from 'react';
import './Blog.css';


import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';

import { SiHashnode } from 'react-icons/si';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://swapnoneel.hashnode.dev/series/python-masterclass"><span className="blog__category">Python</span></a>
                        <a href="https://swapnoneel.hashnode.dev/getters-and-setters-in-python"><img src={Blog1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title"><a href="https://swapnoneel.hashnode.dev/getters-and-setters-in-python" style={{color: '#A7AEB9'}}>Getters & Setters</a></h3>
                        <div className="blog__meta">
                            <span>18 February, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://swapnoneel.hashnode.dev" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://swapnoneel.hashnode.dev/series/python-masterclass"><span className="blog__category">Python</span></a>
                        <a href="https://swapnoneel.hashnode.dev/object-introspection-in-python"><img src={Blog2} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title"><a href="https://swapnoneel.hashnode.dev/object-introspection-in-python" style={{color: '#A7AEB9'}}>Object Introspection</a></h3>
                        <div className="blog__meta">
                            <span>7 February, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://swapnoneel.hashnode.dev" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://swapnoneel.hashnode.dev/series/python-masterclass"><span className="blog__category">Python</span></a>
                        <a href="https://swapnoneel.hashnode.dev/os-modules-in-python"><img src={Blog3} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title"><a href="https://swapnoneel.hashnode.dev/os-modules-in-python" style={{color: '#A7AEB9'}}>OS Modules in Python</a></h3>
                        <div className="blog__meta">
                            <span>12 February, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://swapnoneel.hashnode.dev" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <span align="center"><br></br>
                    <p align="center"><a href="https://swapnoneel.hashnode.dev/" className='home__social-link' target='_blank' rel='noreferrer'><b>⬇ FOR MORE BLOGS ⬇</b></a></p>
                    <p><a href="https://swapnoneel.hashnode.dev/" className='home__social-link' target='_blank' rel='noreferrer'><SiHashnode /></a></p>
            </span>
        </section>
    )
}

export default Blog