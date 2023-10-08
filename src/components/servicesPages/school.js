import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import img101 from '../images/sch1.png';  
import img201 from '../images/sch02.png';  
import img301 from '../images/sch3.png';  
import img401 from '../images/sch4.png';  
import img501 from '../images/sch5.jpg';  
import img601 from '../images/sch6.png';  
import img701 from '../images/sch7.jpg'; 




function School() {
    const cardStyle = {
        height: "245px", // Set a fixed height for the card
        width: "700px",
        overflow: "hidden", // Hide any content that overflows the card
    };
    
    const imageStyle = {
        width: "100%", // Make the image fill the container
        height: "100%",
        objectFit: "cover", // Maintain aspect ratio and cover the container
    };
  
    const paragraphStyle = {
        marginBottom: "0", // Set the margin at the bottom of the paragraph to 0
     
    };
    
    return (
        <div>
        <section className="section">
            <div className="container">
            <div className="row">
  
                <div className="col-md-12 text-center">
                <h3 className="main-heading">Dedicated Schools for Autism: Nurturing Abilities, Building Futures.</h3>
                <div className="underline w-50 mx-auto"></div>
                <p className="paragraph777" style={paragraphStyle}>Discover a nurturing haven for children with autism at our specialized schools. We are dedicated to providing a supportive and inclusive environment where every child's unique abilities are celebrated. Our experienced educators and therapists work hand-in-hand to create tailored learning programs that cater to each child's specific needs. With state-of-the-art facilities and a compassionate approach, we empower children with autism to thrive academically, socially, and emotionally. Explore a range of holistic services that foster growth and development, ensuring a brighter future for every child in our care.</p>
                </div>
  
            </div>
            </div>
        </section>
  
  
        <section className="section bg border-top">
            <div className="container">
                <div className="row">
  
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading222">Schools/ Centres for Children with Autism</h3>
                        <div className="underline w-50 mx-auto mb-4"></div>
                    </div>
  {/* 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow" style={cardStyle}>
                            <img src={img101} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                        </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                        <div className="card shadow p-4" style={cardStyle}>
                            <div className="card-body">
                                <h5> Sunshine Child Development Center.</h5>
                                <div className="underline w-100"></div>
                                <p> Address: Sunshine, Omkar Residency, Emerald 3 road, Shankar Kalate Nagar Rd, Wakad, Pune, Maharashtra 411057.</p>
                                <p>Appointments:  facebook.com</p>
                                <p>Phone: +91 9373080908</p>
                            </div>
                        </div>
                    </div>
  
  {/* 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow" style={cardStyle}>
                            <img src={img201} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                        </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                        <div className="card shadow p-4" style={cardStyle}>
                            <div className="card-body">
                                <h5> Prasanna Autism Centre.</h5>
                                <div className="underline w-100"></div>
                                <p> Address: 895, Shivaji Nagar, Deccan Gymkhana, Pune, Maharashtra 411004.</p>
                                <p>Appointments: autismtreatmentindia.com</p>
                                <p>Phone: +91 9326013744</p>
                            </div>
                        </div>
                    </div>
  
  {/* 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow" style={cardStyle}>
                            <img src={img301} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                        </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                        <div className="card shadow p-4" style={cardStyle}>
                            <div className="card-body">
                                <h5> Sai Pathways Child Development Center and Occupational Therapy Center.</h5>
                                <div className="underline w-100"></div>
                                <p> Address: 27, Leon Orbit Rd, Kavde Nagar, Rahatani, Pune, Pimpri-Chinchwad, Maharashtra 411017.</p>
                                <p>Email: saipathways@gmail.com</p>
                                <p>Phone: +91 9356991494</p>
                            </div>
                        </div>
                    </div>
  
  {/* 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow" style={cardStyle}>
                            <img src={img401} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                        </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                        <div className="card shadow p-4" style={cardStyle}>
                            <div className="card-body">
                                <h5> Sunderji Institute of Special School</h5>
                                <div className="underline w-100"></div>
                                <p> Address: Bldg. #8, Vrindavan Society, Shankar Sheth Rd, Vrindavan Society, Guru Nanak Nagar, Pune, Maharashtra 411037.</p>
                                <p>Appointments: office365.com</p>
                                <p>Phone: 020 2645 1425</p>
                            </div>
                        </div>
                    </div>
  
  {/* 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow" style={cardStyle}>
                            <img src={img501} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                        </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                        <div className="card shadow p-4" style={cardStyle}>
                            <div className="card-body">
                                <h5> Lexicon Rainbow Therapy and Child Development Centre. </h5>
                                <div className="underline w-100"></div>
                                <p> Address: S no 212/1, Central Avenue 59, Naylor Road, next to Big Bazaar, Kalyani Nagar, Pune, Maharashtra 411006.</p>
                                <p>Appointments: autismtreatmentindia.com</p>
                                <p>Phone: +91 7066900641</p>
                            </div>
                        </div>
                    </div>
  
  {/* 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow" style={cardStyle}>
                            <img src={img601} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                        </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                        <div className="card shadow p-4" style={cardStyle}>
                            <div className="card-body">
                                <h5> Spandan Autism Centre.</h5>
                                <div className="underline w-100"></div>
                                <p> Address: Back to Vaibhav theatre, Spandan Autism Centre, Mohintara hospital road, near PMC school no.32, Hadapsar, Pune, Maharashtra 411028.</p>
                                <p>Appointments: autismtreatmentindia.com</p>
                                <p>Phone: +91 7350012576</p>
                            </div>
                        </div>
                    </div>
  
  {/* 7 */}
                    <div className="col-md-4 mb-4">
                    <div className="card shadow" style={cardStyle}>
                        <img src={img701} className="w-100 border-bottom" alt="Oswal Clinic" style={imageStyle} />
                    </div>
                    </div>
  
                    <div className="col-md-8 mb-4">
                    <div className="card shadow p-4" style={cardStyle}>
                        <div className="card-body">
                            <h5> Sarth Foundation, DAWN Autism School, Center For Children With Multiple Disabilities.</h5>
                            <div className="underline w-100"></div>
                            <p> Address: Sr No 26, Dhanori,plot no-1/1, Munjabawasti Nr Mata Mandir Madhusudan A Road Number E, Maharashtra 411015.</p>
                            <p>Phone: +91 9561013284 </p>
                        </div>
                    </div>
                    </div>
  
  
                </div>
            </div>
        </section>
        </div>
    );
  }

export default School;