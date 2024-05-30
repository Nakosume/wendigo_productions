import { Header } from '../../components/index'
import './style.css'

import landingCollage from '../../img/CollageLandingPage.png'
import landingCollageMobile from '../../img/CollageLandingPageMobile.png'
import landingButterflies from '../../img/LandingButterflies.png'
import landingPumkin from '../../img/Pumpkin.png'
import heartFresh from '../../img/HeartFresh.png'
import heartFreshMobile from '../../img/HeartFreshMobile.png'
import eyeVector from '../../img/Eye.png'
import arrowUpVector from '../../img/ArrowUp.png'
import pencilVector from '../../img/Pencil.png'
import brainVector from '../../img/Brain.png'
import checkVector from '../../img/Check.png'

export function Landing() {
  return (
    <main>
      <Header />

      <section className='landing-collage'>
        <img src={landingCollage} alt='Landing Collage' className='landing-image-desktop' />
        <img src={landingCollageMobile} alt='Landing Collage' className='landing-image-mobile' />
      </section>

      <section className='landing-info'>

        <div className='landing-info-block'>
          <div className='landing-text-container'>
            <h1 className='landing-info-title'>Designing for the Social</h1>
            <p className='landing-info-text'>It is important to design solutions that benefit society as a whole. Design works to improve people's lives by offering products and services that are accessible, as well as meaningful experiences. From applications that facilitate communication to platforms that promote inclusion and equality. The goal is to use technology responsibly to address social challenges and improve the quality of life of people around the world.</p>
          </div>
          <img src={landingButterflies} alt='Landing Butterflies' className='landing-image-desktop' id='landing-butterflies' />
        </div>

        <img src={heartFresh} alt='Heart Fresh' className='landing-image-desktop' id='heart-fresh' />
        <img src={heartFreshMobile} alt='Heart Fresh' className='landing-image-mobile' id='heart-fresh' />

        <div className='landing-info-block'>
          <img src={landingPumkin} alt='Landing Butterflies' className='landing-image-desktop' id='landing-pumpkin' />
          <div className='landing-text-container'>
            <h1 className='landing-info-title'>We use our Creativity to Get our clients</h1>
            <p className='landing-info-text'>Creativity is an important factor to create good pieces and products that capture the attention of our customers. Trend, animation, social message and many more are our resources to create our products.</p>
            <div className='landing-bullet-points'>

              <div className='bullet-point'>
                <img src={eyeVector} alt='Eye' />
                <div>
                  <h3>Clean Code</h3>
                  <p>Writing code that is easy to understand, maintain, and modify.</p>
                </div>
              </div>

              <div className='bullet-point'>
                <img src={arrowUpVector} alt='Eye' />
                <div>
                  <h3>Modern design</h3>
                  <p>Keeping up with trends, being the tip of the spear in design.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className='landing-footer'>
        <div className='footer-bullets-container'>

          <div className='footer-bullet-point'>
            <img src={pencilVector} alt="pencil" />
            <h1>150+</h1>
            <h3>Projects Done</h3>
          </div>

          <div className='footer-bullet-point'>
            <img src={brainVector} alt="pencil" />
            <h1>20+</h1>
            <h3>Happy Clients</h3>
          </div>

          <div className='footer-bullet-point'>
            <img src={checkVector} alt="pencil" />
            <h1>150+</h1>
            <h3>Projects Done</h3>
          </div>

        </div>
      </section>

    </main>
  )
}
