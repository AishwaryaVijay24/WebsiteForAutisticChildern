import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './about.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SvgTwo from '../images/svg4.svg';
import SvgFive from '../images/svg5.svg';
import SvgSix from '../images/svg6.svg';
import Svgtwe from '../images/undraw_design_data_re_0s26.svg';


//used bootstrap

function About() {
  
  return (
    <div>
        <Navbar/>
    <div className="about-us">
     

      <section className="content-section py-5">
        <div className="container901 custom-width-container">
          <h2 className="text-center"><u>Our Story</u></h2>
          <p>
          Welcome to our community! We're here to make life easier for families with special children in Pune. Discover trusted doctors, schools, and connect with others who understand your journey. Together, we create a safer, happier place for our amazing kids.
          </p>
          <img src={SvgTwo} alt="About Us"  className="img-fluid smaller-image"/>
          {/* Add more content here */}
        </div>
      </section>

      <section className="team-section py-5">
  <div className="container90">
    <div className="row">
      <div className="col-md-4">
        <div className="small-container d-flex flex-column align-items-center justify-content-center">
          <h4>Our Mission</h4>
          <p className="text-center">Empowering families and individuals affected by autism through support and resources.</p>
          <img src={SvgFive} alt="About Us" className="img-fluid smaller-image" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="small-container d-flex flex-column align-items-center justify-content-center">
          <h4>Our Vision</h4>
          <p className="text-center">A world where autism is understood, accepted, and celebrated for the unique perspectives.</p>
          <img src={SvgSix} alt="About Us" className="img-fluid smaller-image" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="small-container d-flex flex-column align-items-center justify-content-center">
          <h4>Our Goal</h4>
          <p className="text-center">To improve the quality of life for autistic individuals and their families via accessibility.</p>
          <img src={Svgtwe} alt="About Us" className="img-fluid smaller-image" />
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
    <Footer/>
    </div>
  );
}

export default About;

