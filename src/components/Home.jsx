import React from 'react'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section id='home'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 mt-5'>
              <h1 className='display-4 fw-bolder mb-5 text-center text-white'>
                A Trusted Packers and Movers ..Get moving without getting moving
                stress
              </h1>
              <p className='lead text-center fs-4 mb-5 text-white'>
                We are give house to house pressing and moving administrations.
                We interface clients to the best and the most master movers in
                the Canada. With the greatest arrangement of carriers, packers
                and movers in the country, we are your one stop look for all
                home moving and transport needs. We give the most trustworthy
                and reasonable costly rates for pressing and moving any unit
                thing, vehicle or vehicle, bicycle transversely over canada.
              </p>
              <div className='buttons d-flex justify-content-center mb-5'>
                <NavLink
                  to='/contact'
                  className='btn btn-light me-5 rounded-pill px-4 py-2'
                >
                  Get Quote
                </NavLink>
                <NavLink
                  to='/service'
                  className='btn btn-outline-light rounded-pill px-4 py-2'
                >
                  Our Service
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Contact />
    </div>
  )
}

export default Home
