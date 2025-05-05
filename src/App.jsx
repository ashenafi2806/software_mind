import Main from './main_page/main.jsx'
import Carousel from './carousel.jsx'
import './index.css'
import VideoTestimonials from './VideoTestimonials.jsx'
import CardCarousel from './state_card.jsx'
import Marquee from './marquee.jsx'
import Nav from './main_page/nav.jsx'
import AnimatedCardCarousel from './case.jsx'
import LogoGrid from './logo.jsx'
import Abuse from './Abuse.jsx';


function App() {


  return (
    <>
    <Nav></Nav>
 <Main></Main>
 <Carousel></Carousel>
 <CardCarousel></CardCarousel>
         <div className="container mx-auto px-4 py-12">
            <VideoTestimonials />
          </div>
          <AnimatedCardCarousel></AnimatedCardCarousel>
          <Marquee></Marquee>
          <Abuse></Abuse>
          <LogoGrid></LogoGrid>


    </>
  )
}

export default App
