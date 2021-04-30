import React from 'react'
import blog from '../images/BlogProject.jpeg'
import sello from '../images/Sello.png'
import d3 from '../images/d3.png'
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import{faSearch,}from '@fortawesome/free-solid-svg-icons'
const Portfolio=()=>{return(<><div id ="Projects" className='portfolio-wrapper'><div className='container'><h1 className='text-uppercase text-center py-5'>My Projects</h1><div className='image-box-wrappper row justify-content-center'><div className='portfolio-image-box'><img
className='portfolio-image'
src={blog}
alt='Mean Stack Blog Project'/><div className='overflow'></div><FontAwesomeIcon className='portfolio-icon' icon={faSearch}/></div><div className='portfolio-image-box'><img
className='portfolio-image'
src={sello}
alt='Sello Marketplace React and Redux'/><div className='overflow'></div><FontAwesomeIcon className='portfolio-icon' icon={faSearch}/></div><div className='portfolio-image-box'><img className='portfolio-image' src={d3}alt='D3 Project'/><div className='overflow'></div><FontAwesomeIcon className='portfolio-icon' icon={faSearch}/></div></div></div>{}</div></>)}
export default Portfolio