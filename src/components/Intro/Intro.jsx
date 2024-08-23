import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'

const Intro = () => {

  const navigate = useNavigate()
    return (
        <div className='container-lg my-2 py-2 px-md-3  px-2 mx-auto'>
        <div className="row flex-lg-row align-items-center">
            <div class="col-lg-7">
                <h1 class="display-3 fw-bold text-body-emphasis align-center lh-sm mb-3">
                We Navigate the Path to Unlock Digital  <span  className="gradient-text typewriter"><br/>
                <Typewriter
                  words={['Creativity', 'Art', 'Ownership', "Innovation"]}
                  loop={false}
                  cursor={true}
                  cursorColor=' #FFAE3B'
                  cursorBlinking={true}
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={800}
                  
                />
              </span>
                </h1>
                <p class="fw-normal lh-base">Navigating possibilities, sculpting futures. With a commitment to excellence, we transcend boundaries in every venture. Experience a realm of opportunities, where expertise meets innovation. Empower your journey with us – building success, one partnership at a time.</p>

                <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                    <button href="#service"type="button" className="button-primary text-center" style={{textDecoration:"none"}} >Know Services</button>
                    <button type="button" className="button-secondary" onClick={()=>{navigate("/contact-us")}}>Contact Now</button>
                </div>
            </div>

             <div className="col-12 col-sm-11 col-lg-5 mx-auto">
            <div className=''>
              <img src="https://mizzle.webestica.com/assets/images/bg/01.jpg" className="img-fluid" width="120%" height="150%"  />
            </div>
          </div>

        </div>       
        </div>
    )
}

export default Intro