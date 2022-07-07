import React from 'react'

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src='./assests/1.jpg'
                alt='About'
                className='w-75 mt-5'
              ></img>
            </div>
            <div className='col-md-6'>
              <h3 className='fs-5'>About US</h3>
              <h1 className='display-6 mb-2'>
                Who <b>We</b> Are
              </h1>
              <hr className='w-50' />
              <p className='lead mb-4'>
                Safe Service We Use High-Quality Packing Materials to Keep Your
                Goods Safe While Shifting. Exclusive Offers. Safe and Reliable.
                Instant Movement. Most Trusted Partners. Services: Packing,
                Loading, Transportation, Unloading, Unpacking. We at
                <b> FHAUL</b> understand all the requirement and provide
                outstanding clients services, it 100% hassle and damage free
                moving and packing and quality works.
              </p>
              <button className='btn btn-primary rounded-pill px-4 py-2'>
                Get Started
              </button>
              <button className='btn btn-primary rounded-pill px-4 py-2 ms-2'>
                Contact US
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
