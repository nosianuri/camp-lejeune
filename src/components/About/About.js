import React from 'react';
import './About.css';
import about from '../../assets/about.jfif';

const About = () => {
    return (
        <div className='about'>
            <div class="card mb-3 container" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img className='about-image' src={about} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CAN I CLAIM COMPENSATION FOR TOXIC WATER RELATED ILLNESSES AT CAMP LEJEUNE?</h5>
                            <p class="card-text">Water at the Marine Corps camp in Jacksonville, North Carolina, was found to have been contaminated with benzene, trichloroethylene and perchloroethylene among others between 1953 to 1987. In the time since, residents of the base have experienced severe negative side-effects, like Cancer, Renal Toxicity, Infertitlity, Parkinson’s, Myeloma and many more.</p>
                            <p class="card-text"><small class="text-muted">The U.S. Department of Veteran Affairs (VA) tried to avoid helping US Marines and their families, but a new bipartisan bill allows our heroes to get the help they deserve. Our specialist lawyers can help you and your family get the maximum compensation you deserve.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;