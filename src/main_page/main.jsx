/* eslint-disable no-unused-vars */
import style from './main.module.css'
import {color, motion} from 'framer-motion'
import softwaremind from './assets/software_mind.png'
import key from './assets/key.jpg'
import robot from './assets/robot.jpg'
import vid from './assets/Reflection.mp4'
import clsx from 'clsx';
import { useEffect } from 'react'
import React,{useState} from 'react'
function Main()
{

 const [isTop,setisTop] = useState(true)



useEffect(()=>{

const take = ()=>{setisTop(window.scrollY===0)}

window.addEventListener('scroll',take)

})


    const svgmar = {
        verticalAlign:"middle"
    }    
return( 
<header>

<nav>
<div className={style.nav}

  style={{
    
 ...(isTop ? {} : { backgroundColor: 'rgb(255,255,255)' }),
    transition: 'background-color 0.6s',
  }}
>
{/* THIS IS THE TOP LEFT PART  */}
    <div className={style.logo_container}>
        <img className={style.logo} src={softwaremind} alt="" />
        <h1 className={style.softwaremind} 
         style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }}

        >Software&nbsp;Mind</h1>
    </div>


{/* THIS IS THE MIDDLE PART */}
    <div className={style.middle}>
    <ul className={style.middle_nav} type ="none">

<div className={style.hover_one} >
<li
 style={{
    ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
    transition: 'background-color 0.6s',
  }}
>Who we are
        <svg style={svgmar} width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
         <polyline points="6 9 12 15 18 9" />
         </svg>
        </li>
        <div className={style.onlyhover} >
          <a href="">Our Company</a> 
          <a href="">Our Culture</a> 
          <a href="">Environmental,Social,Governance</a>
       </div>
</div>
      

        <li
         
        ><a style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }} href="">What we do</a></li>

<div className={style.hover_two} >
       <li
        style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }}
       >Services
         <svg style={svgmar} width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
         <polyline points="6 9 12 15 18 9" />
         </svg>
        </li>
        <div className={style.onlyhover} >
          <a href="">Our Company</a> 
          <a href="">Our Culture</a> 
          <a href="">Environmental,Social,Governance</a>
       </div>
</div>
       

        <li
         style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }}
        >industries
         <svg style={svgmar} width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
         <polyline points="6 9 12 15 18 9" />
         </svg>
        </li>

        <li
       
        ><a 
        style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }} href="">Case studies</a></li>
        <li
         style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }}
        >insights
         <svg style={svgmar} width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
         <polyline points="6 9 12 15 18 9" />
         </svg>
        </li>
        <li
       
        ><a   style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }} href="">Careers</a></li>
        <li><button className={style.contactus} >Contact us</button></li>
        <li
         style={{
            ...(isTop ? {} : { color: 'rgb(0,0,0)' }),
            transition: 'background-color 0.6s',
          }}
        >EN
          <svg style={svgmar} width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
          </svg>
        </li>
    </ul>
  
    </div>
</div>

</nav>

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
</svg></a>












</header>






);
    
}
export default Main