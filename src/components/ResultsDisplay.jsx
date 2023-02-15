import React from 'react'

function ResultsDisplay({answers, quizItems}) {
  return (
  <div className='quiz-container card'>
    <div className='card-header p-3'>
      <h5>Results</h5>
    </div>
    <div className='card-body h4 text-center'>
      You answered {
        answers.filter((answ, index) => {
          return answ === quizItems[index].correct;
        }, 0).length
      } / {quizItems.length} answers correct
    </div>
    
  </div>)
}

export default ResultsDisplay

