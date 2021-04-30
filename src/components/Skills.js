import React from 'react'
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import{fab}from '@fortawesome/free-brands-svg-icons'
import{faCloud,faCode,faFileCode,faTools,}from '@fortawesome/free-solid-svg-icons'
const Skills=()=>{return(<div id ="Skills" className='skills'><h2 className='py-5'>My Skills</h2><div className='container'><div className='row'><div className='col-lg-4 col-md-4 col-sm-6'><div className='box'><div className='circle'><FontAwesomeIcon icon={faCloud}className='icon' size='2x'/></div><h3>Cloud Integration</h3><div class='list-group'><button
type='button'
class='list-group-item list-group-item-action'>Dell Boomi Developer</button><button
type='button'
class='list-group-item list-group-item-action'>API Management</button><button
type='button'
class='list-group-item list-group-item-action'>Soap UI</button><button
type='button'
class='list-group-item list-group-item-action'>Dell Boomi Administration</button></div></div></div><div className='col-lg-4 col-md-4 col-sm-6'><div className='box'><div className='circle'><FontAwesomeIcon icon={faFileCode}className='icon' size='2x'/></div><h3>Web Development</h3><div class='list-group'><button
type='button'
class='list-group-item list-group-item-action'>React and Redux</button><button
type='button'
class='list-group-item list-group-item-action'>JavaScript</button><button
type='button'
class='list-group-item list-group-item-action'>Node&amp;Express&amp;MongoDB</button><button
type='button'
class='list-group-item list-group-item-action'>Jquery</button></div></div></div><div className='col-lg-4 col-md-4 col-sm-6'><div className='box'><div className='circle'><FontAwesomeIcon icon={faCode}className='icon' size='2x'/></div><h3>Other Skills</h3><div class='list-group'><button
type='button'
class='list-group-item list-group-item-action'>Git</button><button
type='button'
class='list-group-item list-group-item-action'>React Bootstrap</button><button
type='button'
class='list-group-item list-group-item-action'>D3.js</button><button
type='button'
class='list-group-item list-group-item-action'>Python</button></div></div></div></div></div></div>)}
export default Skills