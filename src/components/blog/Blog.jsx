import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://swapnoneel.hashnode.dev/series/python-masterclass"><span className="blog__category">Python</span></a>
                        <a href="https://swapnoneel.hashnode.dev/getters-and-setters-in-python"><img src={Image1} alt="" className='blog__img' /></a>
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
                        <a href="https://swapnoneel.hashnode.dev/object-introspection-in-python"><img src={Image1} alt="" className='blog__img' /></a>
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
                        <a href="https://swapnoneel.hashnode.dev/os-modules-in-python"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title"><a href="https://swapnoneel.hashnode.dev/os-modules-in-python" style={{color: '#A7AEB9'}}>Object Introspection</a></h3>
                        <div className="blog__meta">
                            <span>7 February, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://swapnoneel.hashnode.dev" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog