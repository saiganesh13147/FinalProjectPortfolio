import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Particles from 'react-particles-js'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Skills />
      <Experience />
    </>
  )
}

export default App
