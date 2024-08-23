import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className='container-lg my-2 py-5 px-md-3 px-2 mx-auto'>
      <div className='row flex-lg-row align-items-center'>
        <div className='col-lg-7'>
          <h1 className='display-3 fw-bold text-body-emphasis align-center lh-sm mb-3'>
            We Navigate the Path to Unlock Digital{' '}
            <span className='gradient-text typewriter'>
              <br />
              <Typewriter
                words={['Creativity', 'Art', 'Ownership', 'Innovation']}
                loop={false}
                cursor={true}
                cursorColor='#FFAE3B'
                cursorBlinking={true}
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={800}
              />
            </span>
          </h1>
          <p className='fw-normal lh-base'>
            Navigating possibilities, sculpting futures. With a commitment to
            excellence, we transcend boundaries in every venture. Experience a
            realm of opportunities, where expertise meets innovation. Empower
            your journey with us – building success, one partnership at a time.
          </p>

          <div className='d-grid gap-3 d-md-flex justify-content-md-start'>
            <button
              href='#service'
              type='button'
              className='button-primary text-center'
              style={{ textDecoration: 'none' }}
              onClick={() => {
                navigate('/marketplace');
              }}
            >
              Discover NFT
            </button>
            <button
              type='button'
              className='button-secondary'
              onClick={() => {
                navigate('/create-nft');
              }}
            >
              Create NFT
            </button>
          </div>
        </div>

        <div className='col-12 col-sm-11 col-lg-5 mx-auto'>
          <div id='introCarousel' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src='https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Flg%2Fportfolio-01.jpg&w=640&q=75'
                  className='d-block w-100'
                  alt='Slide 1'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://react-bitakon.netlify.app/assets/img/product/product-1.jpg'
                  className='d-block w-100'
                  alt='Slide 2'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://gatsby-react-nft.netlify.app/static/media/detailed.a2677837.jpg'
                  className='d-block w-100'
                  alt='Slide 3'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://enefti.modeltheme.com/wp-content/uploads/2022/01/28aa9794.png.png'
                  className='d-block w-100'
                  alt='Slide 4'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
