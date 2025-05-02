import Main from './main_page/main.jsx'
import Carousel from './carousel.jsx'
import './index.css'
import VideoTestimonials from './VideoTestimonials.jsx'

function App() {


  return (
    <>
<Main></Main>
<Carousel></Carousel>
<div className="container mx-auto px-4 py-12">
            <VideoTestimonials />
          </div>
    </>
  )
}

export default App
