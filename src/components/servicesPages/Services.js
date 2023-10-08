import React,{useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ServicePage from './ServicePage';
import DocCards from './DocCards';
//import DocSlider from './DocSlider';
import School from './school';


function Services() {
        const [isOpen, setIsOpen]= useState(false)

        const toggle =() =>{
            setIsOpen(!isOpen)
        }
  return (
    <div>
      <Navbar/>
      
      <ServicePage/>
      <DocCards/>
      <School/>
      <Footer/>
    </div>
  );
}

export default Services;