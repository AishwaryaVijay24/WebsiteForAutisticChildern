import React,{useState} from 'react';
import Discover from './discover';
import DiscoverCard from './card/card';
import Precaution from './discoverPrec';
import Navbar from '../Navbar';
import Footer from '../Footer';


function DiscoverMain() {
        const [isOpen, setIsOpen]= useState(false)

        const toggle =() =>{
            setIsOpen(!isOpen)
        }
  return (
    <div>
      <Navbar/>
      <Discover/>
      <DiscoverCard/>
      <Precaution/>
      <Footer/>
    </div>
  );
}

export default DiscoverMain;