import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import './blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h1>3 SIMPLE STEPS TO MAKING A CAMP LEJEUNE CLAIM</h1>
                <div className='container'>
                    <div class="row row-cols-1 row-cols-md-3 g-4 ">
                        <div class="col">
                            <div class="card">
                                <img src={img1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">ONLINE ELIGIBILITY CHECK</h5>
                                    <p class="card-text">TThe easiest way to find out and start the process is to answer a few simple questions via our online form. We can check today if you are eligble to receive a settlement figure for your suffering.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">FREE EXPERT ADVICE</h5>
                                    <p class="card-text">Our attorneys offer a free initial chat to discuss your illmesses and eligibility. They can then assess how much compensation you should be owed, taking into account medical bills etc.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={img3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">MAXIMUM COMPENSATION</h5>
                                    <p class="card-text">We believe everyone that has been affected is due the maximum compensation for their suffering. With all the information and your authority we ensure we get you the maximum settlement you deserve.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='get-buton'><button>GET FREE QUOTE</button></div>
                
            </div>
        </div>
    )
}

export default Blog