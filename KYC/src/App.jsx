import React from 'react'
import Navbar from "./components/Navbar.jsx";
import TextSection from "./components/TextSection.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Feature from './components/Feature.jsx';
import Stats from './components/Stats.jsx';
import Howtostart from './components/Howtostart.jsx';
import Student from "./components/Student.jsx";
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <TextSection/>
      <Testimonial/> */}
      <Student/>
      <Feature />
      <Stats />
      <Howtostart/>
    </div>
  )
}

export default App;
