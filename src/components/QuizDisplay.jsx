import React from 'react'

function QuizDisplay({quizItem}) {
  return (
    <div className="quiz-container" id="quiz">
      <div className="quiz-header">
        <h2 id="question">{quizItem.question}</h2>
        <ul>
          <li>
            <input type="radio" name="answer" value="a" id="a" className="answer" />
            <label htmlFor="a" id="a_text">{quizItem.a}</label>
          </li>
          <li>
            <input type="radio" name="answer" value="b" id="b" className="answer" />
            <label htmlFor="b" id="b_text">{quizItem.b}</label>
          </li>
          <li>
            <input type="radio" name="answer" value="c" id="c" className="answer" />
            <label htmlFor="c" id="c_text">{quizItem.c}</label>
          </li>
          <li>
            <input type="radio" name="answer" value="d" id="d" className="answer" />
            <label htmlFor="d" id="d_text">{quizItem.d}</label>
          </li>
        </ul>
      </div>
      <button id="submit">Submit</button>
    </div>

  )
}

export default QuizDisplay