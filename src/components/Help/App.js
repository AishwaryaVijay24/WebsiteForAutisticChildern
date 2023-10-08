import "./App.css";
import "./index.css"
import { React, useState } from "react";
import data from "./data";
import Question from "./Question";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Help() {
  const [question, setQuestion] = useState(data);
  // console.log(question);
  return (
    <div>
       
    <main className="container1">
      <header>
        <h4>Frequently asked Questions</h4>
      </header>
      <section>
        {question.map((quest) => {
          return <Question key={quest.id} {...quest} />;
        })}
      </section>
    </main>
    
    </div>
  );
}

export default Help;