import React from "react";

import "./RobotTalk.css";

const RobotTalk = props => {
  const questions = [
    { question: "A は好きですか？" },
    { question: "B は好きですか？" },
    { question: "C は好きですか？" }
  ];

  return (
    <div>
      <img src="images/robot.jpeg" className="robot-icon" alt="robot-icon" />
      <p>
        {questions.map(question => (
          <RobotTalk question={questions.question} />
        ))}
      </p>
      {/* <p>{props.question}</p> */}
    </div>
  );
};

export default RobotTalk;
