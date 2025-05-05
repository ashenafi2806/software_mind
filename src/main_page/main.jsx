/* eslint-disable no-unused-vars */
import style from './main.module.css'
import {color, motion} from 'framer-motion'
import key from './assets/key.jpg'
import robot from './assets/robot.jpg'
import vid from './assets/Reflection.mp4'
import clsx from 'clsx';
import { useEffect } from 'react'
import React,{useState} from 'react'
function Main()
{

  const svgmar = {
    verticalAlign:"middle",
    position: "relative",
    left:"5.5vw",
    top:"-23px"
} 


     
return( 
<header>



{/* THE ANIMATING BACKGROUND PART */}


<div className={style.bdiv}>

               <div  className={style.c1}>
               <video className={style.nana} autoPlay muted loop playsInline>
                  <source src={vid} type="video/mp4"></source>
                  </video>
                  <div className={style.nane}>
                  <h1 className={style.big_text} >Driven by Tech,<br></br>Empowered by People</h1>
                  <p>Our software development teams, based throughout Europe and the <br></br> Americas, ramp up engineering capacity to accelerate digital <br></br> transformations and business growth.</p>
                  <button className={style.contactus}  >Learn more</button>

                  </div>
                  
               </div>
     
    <div className ={clsx(style.c1)}>
    <img className={style.nana} src={robot} alt="" />
    <div className={style.nane}>
                  <h1 className={style.big_text} >Generative AI development<br></br>services</h1>
                  <p>implement proven AI strategies and technologys that boost productivity,<br></br>analyze datasets and maximize operation efficiencey through reliable<br></br>automation</p>
                  <button className={style.contactus}  >Learn more</button>
                  </div>
    </div>
     
              <div className={clsx(style.c1)} >
              <img className={style.nana} src={key} alt="" />
              <div className={style.nane}>
                  <h1 className={style.big_text} >Cloud consulting and<br></br>development</h1>
                  <p>speed up your cloud migration to increase scalablity,optimize costs and<br></br>create new revenue streams.<br></br> transformations and business growth.</p>
                  <button className={style.contactus}  >Learn more</button>
                  </div>
              </div>

</div>







<motion.h1 className='scroll_trigger_one'

initial={{opacity:0,
          y:"100px"  
}}

whileInView={{
          opacity:1,
          y:0,
          transition:{duration:1}
}}
viewport={{once:true}}

>Engineering that<br></br>reimagines<br></br>tommorow</motion.h1>


<motion.div className='scroll_trigger_two'

initial={{opacity:0,
    x:"-70px"  
}}

whileInView={{
    opacity:1,
    x:0,
    transition:{duration:1}
}}
viewport={{once:true}}
>
 <p>
   scale-ups,unicorns and modern enterprises around the globe trust our<br></br> 
   development teams to manage software from ideation to realse and beyond.we<br></br> 
   enrich organisations with talent that boost scalablity,drives growth and brings<br></br>disruption ideas to life
</p>  


</motion.div>

<a href="">Learn more<svg style={svgmar} width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="9 6 15 12 9 18" />
</svg>

</a>












</header>






);
    
}
export default Main