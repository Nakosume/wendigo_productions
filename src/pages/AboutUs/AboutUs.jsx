import { Header } from '../../components/index'
import './style.css'

import collageSoms from '../../img/CollageSoms.png'
import collageSomsMobile from '../../img/CollageSomsMobile.png'
import collageCannon from '../../img/CollageCannon.png'

import wendigoName from '../../img/WendigoName.png'
import star from '../../img/Star.png'

import serviceCamera from '../../img/ServiceCamera.png'
import servicePC1 from '../../img/ServicePC1.png'
import serviceKirby from '../../img/ServiceKirby.png'
import servicePC2 from '../../img/ServicePC2.png'
import serviceVideo from '../../img/ServiceVideo.png'

import instagram from "../../img/insta.png"
import behance from "../../img/behance.png"
import pfpSebas from "../../img/members/sebas.png"
import pfpMajo from "../../img/members/majo.png"
import pfpNico from "../../img/members/nico.png"
import pfpEdd from "../../img/members/edd.png"

export function AboutUs() {
  return (
    <main>
      <Header />
      <section className='about-collage'>
        <img src={collageSoms} alt="Soms" className='about-image-desktop' />
        <img src={collageSomsMobile} alt="Soms" className='about-image-mobile' />
      </section>

      <section className='about-wendigo'>
        <div className='about-wendigo-container'>
          <div>
            <h1>What Is Wendigo Productions?</h1>
            <p>Wendigo Productions is a Design Studio based in Cali, Colombia and a Design Group that focuses on UX/UI mainly, but also dables in anything visual or audio related.</p>
            <p>We have developed several UX/UI enviroments for mobile apps and web pages, we’ve also made 2D and 3D still images and animations, worked on audio editing and Podcasts, we work with pixels and vectors for any application you may need.</p>
          </div>

          <img src={wendigoName} alt="Wengido Name" />
        </div>

        <div className='wendigo-values'>
          <h1>Our Values</h1>

          <div className='wendigo-values-container'>
            <div className='wendigo-values-bullet'>
              <img src={star} alt="star" />
              <h2>Quality Over Quantity</h2>
              <p>Mass production leads to decreased quality, we aim to please</p>
            </div>

            <div className='wendigo-values-bullet'>
              <img src={star} alt="star" />
              <h2>Integrity</h2>
              <p>Encourage creativity and the constant search for new ideas and solutions</p>
            </div>

            <div className='wendigo-values-bullet'>
              <img src={star} alt="star" />
              <h2>Innovation</h2>
              <p>Encourage creativity and the constant search for new ideas and solutions</p>
            </div>
          </div>

        </div>

        <div className='wendigo-services'>
          <h1>Our Services</h1>

          <div className='wendigo-services-container'>

            <div className='wendigo-services-bullet'>
              <img src={serviceCamera} alt="ServCamera" />
              <h2>Photography</h2>
              <p>Photo sessions for your business and special events.</p>
            </div>

            <div className='wendigo-services-bullet'>
              <img src={servicePC1} alt="ServPC1" />
              <h2>Front End</h2>
              <p>Find new ways to show your products and projects through a complete interface.</p>
            </div>

            <div className='wendigo-services-bullet'>
              <img src={serviceKirby} alt="ServKirby" id='kirby' />
              <h2>Illustration</h2>
              <p>Characters, logos, posters, anything is possible for your projects.</p>
            </div>

            <div className='wendigo-services-bullet'>
              <img src={servicePC2} alt="ServPC2" />
              <h2>UX/IU</h2>
              <p>Encourage creativity and the constant search for new ideas and solutions</p>
            </div>

            <div className='wendigo-services-bullet'>
              <img src={serviceVideo} alt="ServCamera" />
              <h2>Video Edition</h2>
              <p>Stay relevant in social media and modernity with high quality video editing.</p>
            </div>

          </div>
        </div>

      </section>

      <section className='about-team'>
        <div className='cannon-container'>
          <img src={collageCannon} alt="Cannon" />
        </div>

        <div className='team-title'>
          <h1>MEET</h1>
          <h1 id='title-color'>THE</h1>
          <h1>TEAM</h1>
        </div>

        <div className='team-container'>

          <div className='team-bullet' id='team-reverse'>
            <div className='team-image'>
              <img src={pfpSebas} alt="pfpSebas" id='team-img-resize' />
              <div className='team-social'>
                <a href="https://www.instagram.com/seb_romer0"><img src={instagram} alt="Instagram" /></a>
                <a href="https://www.behance.net/nakosume"><img src={behance} alt="Behance" /></a>
              </div>
            </div>
            <div className='team-bullet-info'>
              <h2>Sebastian Romero</h2>
              <p>I’m a UI Designer & Illustrator in progress, skilled at troubleshooting and giving simple yet functional solutions with a bit of style. I’m passionate about RPGs and Action video games, fantasy and Sci-Fi media.</p>
              <div>
                <h6>UX/UI Designer</h6>
                <h6>Developer</h6>
                <h6>Illustrator</h6>
                <h6>Videogame Tester</h6>
              </div>
            </div>
          </div>

          <div className='team-bullet'>
            <div className='team-image'>
              <img src={pfpMajo} alt="pfpMajo" />
              <div className='team-social'>
                <a href="https://www.instagram.com/majohurt28/"><img src={instagram} alt="Instagram" /></a>
                <a href="https://www.behance.net/majoosorio"><img src={behance} alt="Behance" /></a>
              </div>
            </div>
            <div className='team-bullet-info'>
              <h2>Maria José Hurtado</h2>
              <p>I am a UX and UI Designer who is also passionate about photography, music and audiovisual production. I am a person who analyzes her environment well and is curious about how it works. I am passionate about music, which allows me to have more sensitivity towards aesthetics and motivates me to generate creative ideas that can be integrated with interaction design.</p>
              <div>
                <h6>UX/UI Designer</h6>
                <h6>Illustrator</h6>
                <h6>Video Editor</h6>
                <h6>Project Manager</h6>
                <h6>Communicator</h6>
              </div>
            </div>
          </div>

          <div className='team-bullet' id='team-reverse'>
            <div className='team-image'>
              <img src={pfpNico} alt="pfpNico" id='team-img-resize' />
              <div className='team-social'>
                <a href="https://www.instagram.com/n.r.g75/"><img src={instagram} alt="Instagram" /></a>
                <a href="https://www.behance.net/Soulnrg"><img src={behance} alt="Behance" /></a>
              </div>
            </div>
            <div className='team-bullet-info'>
              <h2>Nicolás Rodriguez</h2>
              <p>I’m a Ux/Ui designer specialized on Ilustration of creatures and characters, I speak Spanish, English and German fluently. My personal interests incluide playing guitar, videogames of all kind and learning how to find simple yet effective solutions to all kind of problems. I’m really sensitive to the aesthetic of projects and always really keen to understand clients/users via different research methods to understand their needs on a closer and accurate manner and manage to lead the teams I work with to a better result.</p>
              <div>
                <h6>UX/UI Designer</h6>
                <h6>Creature Designer</h6>
                <h6>Illustrator</h6>
                <h6>Videogame Tester</h6>
                <h6>Video Editor</h6>
                <h6>Communicator</h6>
                <h6>Researcher</h6>
              </div>
            </div>
          </div>

          <div className='team-bullet'>
            <div className='team-image'>
              <img src={pfpEdd} alt="pfpEdd" />
              <div className='team-social'>
                <a href="https://www.instagram.com/videocheese3773/"><img src={instagram} alt="Instagram" /></a>
                <a href="https://www.behance.net/VideoCheese3773"><img src={behance} alt="Behance" /></a>
              </div>
            </div>
            <div className='team-bullet-info'>
              <h2>Eduardo José Mejía</h2>
              <p>Hey, I’m a UI/UX Designer, that can do a bit of everything, my mother tounge is Spanish, I speak fluent English and I’m learning German. I love photography, music, games of all sorts, geography, history, physics and just enjoy learning how things work and making and fixing my own things, I also play guitar and made my very own Marceline Axe-Bass!. If you need something to be done, I’m your man, and I’ll make sure it’ll be always up to standar, just for safe meassure.</p>
              <div>
                <h6>UX/UI Designer</h6>
                <h6>Illustrator</h6>
                <h6>Video Editor</h6>
                <h6>Project Manager</h6>
                <h6>Photographer</h6>
                <h6>Luthier</h6>
                <h6>Developer</h6>
                <h6>Handyman</h6>
                <h6>Videogame Tester</h6>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
