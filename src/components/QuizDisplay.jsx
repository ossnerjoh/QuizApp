import React, { useState } from "react";

function QuizDisplay({ quizItem, setNextQuestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function onChangeValue(event) {
    setSelectedAnswer(event.target.value);
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2 id="question">{quizItem.question}</h2>
        <ul>
          <li>
            <input
              type="radio"
              name="answer"
              value="a"
              checked={selectedAnswer === "a"}
              onChange={onChangeValue}
              id="a"
              className="answer"
            />
            <label htmlFor="a" id="a_text">
              {quizItem.a}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              value="b"
              checked={selectedAnswer === "b"}
              onChange={onChangeValue}
              id="b"
              className="answer"
            />
            <label htmlFor="b" id="b_text">
              {quizItem.b}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              value="c"
              checked={selectedAnswer === "c"}
              onChange={onChangeValue}
              id="c"
              className="answer"
            />
            <label htmlFor="c" id="c_text">
              {quizItem.c}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              value="d"
              checked={selectedAnswer === "d"}
              onChange={onChangeValue}
              id="d"
              className="answer"
            />
            <label htmlFor="d" id="d_text">
              {quizItem.d}
            </label>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          setNextQuestion(selectedAnswer);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default QuizDisplay;
