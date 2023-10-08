import React, { useState } from "react";
import './card.css';

const CardGrid = () => {
  const cardContent = [
    {
      title: "Struggles with Social Interactions, Seeking Understanding",
      backgroundColor: "#fbf2c0 ",
      text: "Children with autism may have difficulty with social interactions, such as making eye contact, understanding non-verbal cues, and forming relationships",
    },
    {
      title: "Similar Patterns and Routines Observed In A Child ",
      backgroundColor: "#ffe2fe  ",
      text: "Autism can be associated with repetitive behaviors, like hand-flapping, rocking, or insistence on sameness in routines.Children tend to be hyperactive",
    },
    {
      title: "Difficulty Expressing, Understanding Language",
      backgroundColor: "#ffc09f   ",
      text: "Many individuals with autism may face challenges in communication, ranging from delayed speech development to difficulties in understanding and using language",
    },
    {
      title: "People maybe very Sensitive to Senses",
      backgroundColor: "#e98a15  ",
      text: "People with autism may experience sensory sensitivities, such as being overly sensitive to lights, sounds, textures, or tastes.This is one of the early",
    },
    {
      title: "Having Unique Interests and Strengths",
      backgroundColor: "#c493b0 ",
      text: "Individuals with autism often have unique interests or strengths in specific areas, such as mathematics, music, or art. This might be a little hard to observe",
    },
    {
      title: "Finds Comfort in Predictable Routines",
      backgroundColor: "#a5907e   ",
      text: "Many individuals with autism find comfort in routines and predictability, and may become distressed when faced with unexpected changes",
    },
  ];

  const [flipped, setFlipped] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    const updatedFlipped = [...flipped];
    updatedFlipped[index] = !updatedFlipped[index];
    setFlipped(updatedFlipped);
  };

  return (
    <div className="section756">
    <div className="container76">
      <h2 className="text-center54">Symptoms for Autism</h2>
      <div className="row">
        
        {cardContent.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ backgroundColor: card.backgroundColor }}>
              <div className="card-body">
                <h5 className="card-title text-center">{card.title}</h5>
                <p className="card-text text-center">{card.text}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardGrid;


