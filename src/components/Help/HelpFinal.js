import React,{useState} from 'react';
import Help from './App';
//import Contact from './Contact';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HelpFinal() { 
        const [isOpen, setIsOpen]= useState(false)

        const toggle =() =>{
            setIsOpen(!isOpen)
        }
  return (
    <div>
      <Navbar toggle={toggle} isOpen={isOpen}/> {/* Render the App component */}
      
      <Help/>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default HelpFinal;