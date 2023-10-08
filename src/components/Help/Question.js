import { React, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Question = function ({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header className="content">
        <div className="flex">
          <h3 className="title">{title}</h3>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
        </div>

        {showInfo && <p>{info}</p>}
      </header>
    </article>
  );
};

export default Question;
