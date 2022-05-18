import React from 'react';
import background from '../assets/images/background.svg';

const LandingHome = () => {
    return (
        <div class="h-screen lg:h-[60vh] max-w-full bg-accent mt-16 lg:my-0 lg:px-20 mx-auto">
            <div class="hero-content lg:justify-between flex-col lg:flex-row lg:mt-16">
                <div className='text-[#4F4F4F]'>
                    <p className='text-[18px]'>Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Services</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary font-thin">Get Started</button>
                </div>
                <div className='h-full mt-3 lg:mt-0'>
                    <img src={background} class="max-w-sm lg:max-w-md shrink-0 lg:pl-10" alt='' />
                </div>
            </div>
        </div>
    );
};

export default LandingHome;