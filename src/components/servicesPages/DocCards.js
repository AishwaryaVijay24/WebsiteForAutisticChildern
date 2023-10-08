import React from "react";
import img1 from "../images/docimg1.jpg";
import img2 from "../images/docimg2.jpeg";
import img3 from "../images/docimg3.jpeg";
import img5 from "../images/pedi1.JPG";
import img4 from "../images/pedicare2.jpg";
import img6 from "../images/pedic3.jpg";
import img7 from "../images/bbrain2.jpg";
import img8 from "../images/nri.jpg";
import img9 from "../images/nc.jpg";

function DocCards() {
  const cardStyle = {
    height: "600px", // Set a fixed height for the card
    overflow: "hidden", // Hide any content that overflows the card
  };

  const imageStyle = {
    width: "100%", // Make the image fill the container
    objectFit: "cover", // Maintain aspect ratio and cover the container
  };

  const doctors = [
    {
      name: "Dr. Oswal'S Therapy Center",
      image: img1,
      address:
        "Near, Center for Life Sciences, Health and Medicine, Clover Pinnacle Ridge, NIBM Rd, Kondhwa, Pune, Maharashtra 411048",
      appointments: "autismtreatmentindia.com",
      phone: "077570 71179",
    },
    {
      name: "Brainability International Autism and ADHD Treatment Therapy Center",
      image: img2,
      address: "City Vista, BLDG-A, No 17, 4th Floor, Kharadi, Pune, Maharashtra 411014",
      phone: "020 4005 2778",
    },

    {
      name: "Dr. Suravi Dash - Best Audiologist & Speech Therapist",
      image: img3,
      address:
        "Office no. 204, Oriana Crest, 205, Datta Mandir Rd, Shankar Kalat Nagar, Wakad, Pune, Maharashtra 411057 8",
      phone: "099371 70495",
    },
    {
      name: "Dr. Sonali Ghumare Pediacare child rehabilitation centre/ occupational Therapy / Autism centre",
      image: img4,
      address:
        "FR5F+WQF omkar nandan, 301/A1, Mumbai Pune Bypass Rd, Kudale Baug, Vadgaon Budruk, Pune, Maharashtra 411041",
      email: "sonali20ghumare@gmail.com",
      phone: "079773 03512",
    },
    {
      name: "Dr. Sarika Rakshe's Centre for Paediatrics - Consultant Pediatrician",
      image: img5,
      address:
        "Akhila Apartments,2nd floor ,Samarth Path Near Bank Of India, Karvenagar, Near Sinhagad Road - Rajaram bridge, Karve road - Kothrud area, Erandwane, Pune, Maharashtra 411052",
      phone: "094210 06986",
    },
    {
      name: "Dr. Mahesh Sulakshane Pediatrician At Dr.Sulakshane Multi speciality Clinic",
      image: img6,
      address: "Dr Sulakshane Multispeciality Clinic, 201 , Supreme Square, DP Rd, Aundh, Pune, Maharashtra 411007",
      phone: "020 2588 4157",
    },
    {
        name: "Dr. Abhijeet Botre Blooming Brain Clinic, Pediatric Neurology and epilepsy clinic",
        image: img7,
        address:
          "Blooming Brain Clinic, Jewel Square, near Hotel Blue Diamond, Koregaon Park, Pune, Maharashtra 411001",
        email: "info@bloomingbrainclinic.com",
        phone: "090962 54900",
      },
      {
        name: "Neuro Revolution International Autism and ADHD treatment Center",
        image: img8,
        address:
          "Office No 703, 7th Floor, The Cosmopolis, Kharadi - Hadapsar Bypass Rd, opposite SEASONS MALL, Magarpatta, Hadapsar, Pune, Maharashtra 411028",
        email: "enquiry@neurointernationalrevolution.com",
        phone: "+91 9322672088 / +91 9322603154",
      },
      {
        name: "Dr. Vishal Deshpande Neurologist, Headache specialist, Stroke, Epilepsy treatment, Vertigo",
        image: img9,
        address:
          "Punit Yash Arcade, near, Kothrud Bus Stand Rd, in front of hotel kokan express, Dahanukar A, Dahanukar Colony, Kothrud, Pune, Maharashtra 411030",
        phone: "099218 60776",
      },
    
  ];

  const renderDoctors = () => {
    const doctorsList = [];
    for (let i = 0; i < doctors.length; i += 3) {
      // Group doctors in sets of 3
      const doctorsSubset = doctors.slice(i, i + 3);

      // Push doctors and heading into the list
      doctorsList.push(
        <div key={`doctors-group-${i}`} className="row mb-5">
          {doctorsSubset.map((doctor, index) => (
            <div key={`doctor-${i + index}`} className="col-md-4 mb-4">
              <div className="card shadow" style={cardStyle}>
                <img src={doctor.image} className="w-100 border-bottom" alt={doctor.name} style={imageStyle} />
                <div className="card-body">
                  <h5>{doctor.name}</h5>
                  <div className="underline w-100"></div>
                  <p>{doctor.address}</p>
                  {doctor.appointments && <p>Appointments: {doctor.appointments}</p>}
                  <p>Phone: {doctor.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return doctorsList;
  };

  return (
    <section className="section125 bg border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="main-heading6">Therapists, Psychiatrists and Paediatrics</h3>
            <div className="underline w-50 mx-auto mb-4"></div>
          </div>
        </div>
        {renderDoctors()}
      </div>
    </section>
  );
}

export default DocCards;



