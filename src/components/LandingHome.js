import React from 'react';
import background from '../assets/images/background.svg';

const LandingHome = () => {
    return (
        <>
            <div class="h-screen lg:h-[60vh] max-w-full bg-accent mt-16 lg:my-0 lg:px-20 mx-auto relative z-0">
                <div class="hero-content lg:justify-between flex-col lg:flex-row lg:mt-16">
                    <div className='text-[#4F4F4F]' data-aos="fade-right">
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
            <div className='mx-auto w-5/6 p-8 bg-neutral rounded-xl -mt-16 mb-20 relative z-10'>
                <h1 className='text-primary text-[32px]'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
                    <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs  text-sm" />
                    <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs  text-sm" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-xs  text-sm" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-xs  text-sm" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <input type="text" placeholder="Number of Bedrooms" class="input input-bordered w-full max-w-xs  text-sm" />
                    <input type="text" placeholder="Number of Bathrooms" class="input input-bordered w-full max-w-xs  text-sm" />
                    <input type="text" placeholder="Frequency of Cleaning" class="input input-bordered w-full max-w-xs  text-sm" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-xs  text-sm" />
                </div>
                <button class="btn btn-primary font-thin mt-6">Request a Quote</button>
            </div>
        </>
    );
};

export default LandingHome;