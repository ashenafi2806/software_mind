import style from './main.module.css'
import { useEffect } from 'react'
import React,{useState} from 'react'
import softwaremind from './assets/software_mind.png'



export default function Nav()
{
    
  const svgmar = {
    verticalAlign:"middle",
    position: "fixed",
    left:"29.73vw",
    top:"5px"
    
} 

 const [isTop,setisTop] = useState(true)
 useEffect(() => {
  const handleScroll = () => {
    setisTop(window.scrollY ===0);
  };
  window.addEventListener('scroll', handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

return(
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
);




    
}