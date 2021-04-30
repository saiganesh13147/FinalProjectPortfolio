import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Particles from 'react-particles-js'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App(){return(<><Particles
params={{particles:{number:{value:30,density:{enable:!0,value_area:900,},},shape:{type:'circle',stroke:{width:6,color:'#f9ab00',},},},}}/><Navbar></Navbar><Header></Header><About></About><Skills/><Experience/><Portfolio/><Contact/><Footer/></>)}
export default App