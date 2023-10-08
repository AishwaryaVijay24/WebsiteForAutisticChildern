import React, { useState } from "react";
import './discover.css';
import 'swiper/css';
import 'swiper/css/navigation';

const Discover = () => {
    const paragraphStyle = {
        marginBottom: "18px", // Set the margin at the bottom of the paragraph to 0
      };

    return(
        <div className="allContent">
        <section className="section2 bg border-top">
            <div className="container9">
                <div className="row">

                    <div className="col-md-12 text-center">
                        <h3 className="main-heading6">What is Autism?</h3>
                        <div className="underline mx-auto mb-4"></div>
                        <p className="paragraph47" style={paragraphStyle}>
                        Autism, or autism spectrum disorder (ASD), is a condition that affects the way people communicate, socialize, and understand the world around them. It's like having a unique way of thinking and experiencing things. Some individuals with autism might find social interactions and sensory experiences, like sights, sounds, and textures, to be overwhelming or different from what most people feel. It's important to remember that each person with autism is unique and has their own strengths and challenges. With support and understanding, individuals with autism can lead fulfilling lives and contribute in their own special ways.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
}
export default Discover;