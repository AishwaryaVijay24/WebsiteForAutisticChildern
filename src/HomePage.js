import React,{useState} from 'react';

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';// Import your Footer component

function HomePage() {
        const [isOpen, setIsOpen]= useState(false)

        const toggle =() =>{
            setIsOpen(!isOpen)
        }
  return (
    <div>
      <Navbar toggle={toggle} isOpen={isOpen}/> {/* Render the App component */}
      <HeroSection /> {/* Render the HeroSection component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default HomePage;