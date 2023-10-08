import React, { useState } from "react";
import './discover.css';
import 'swiper/css';
import 'swiper/css/navigation';

const  ServicePage= () => {
    const paragraphStyle = {
        marginBottom: "18px", // Set the margin at the bottom of the paragraph to 0
      };

    return(
        <div className="allContent">
        <section className="section2 bg border-top">
            <div className="container9">
                <div className="row">

                    <div className="col-md-12 text-center">
                        <h3 className="main-heading6">Know About Doctors</h3>
                        <div className="underline mx-auto mb-4"></div>
                        <p className="paragraph47" style={paragraphStyle}>
                        Doctors play a pivotal role in the holistic care of individuals with autism spectrum disorder (ASD). They are instrumental in providing accurate diagnoses, formulating personalized treatment plans, and overseeing the overall well-being of those on the spectrum. Pediatricians, developmental pediatricians, and child psychiatrists are often the first to identify signs of autism and conduct comprehensive assessments. These professionals collaborate with multidisciplinary teams to create tailored interventions, which may include speech therapy, occupational therapy, and behavior modification techniques. Additionally, doctors may prescribe medications to address co-occurring conditions. They monitor progress through regular check-ups, adjusting strategies as needed, and act as advocates for their patients to ensure they receive appropriate accommodations and access to community resources. Staying abreast of the latest research and therapies is a priority for doctors, enabling them to provide the most current and effective care to individuals with autism. In essence, doctors play a vital role in empowering individuals with autism to lead fulfilling lives.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
}
export default ServicePage;