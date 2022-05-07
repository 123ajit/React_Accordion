import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [text, setText] = useState(false);
  const display = () => {
    // alert("displayed");
    setText(!text);
  };
  return (
    <>
      <div className="Questions">
        <h2>{question}</h2>
        <p onClick={display}>
          {text ? (
            <i class="fas fa-sort-down"></i>
          ) : (
            <i class="fas fa-sort-up"></i>
          )}
        </p>
      </div>
      <div className="answers">
        {/* <p>{answer}</p> */}
        {text && <p>{answer}</p>}
      </div>
    </>
  );
};

export default Accordion;
