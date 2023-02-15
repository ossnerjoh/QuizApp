import React from 'react'
import DetailsItem from './DetailsItem';

function ResultsDisplay({answers, quizItems}) {
  return (
  <div className='card'>
    <div className='card-header p-3'>
      <h5>Results</h5>
    </div>
    <div className='card-body '>
    {/* List all Answers */}
    {quizItems.map((quizItem, index)=> <DetailsItem quizItem={quizItem} answer={answers[index]} />)}
    <DetailsItem quizItem={quizItems[0]} answer={answers[0]} />
      
    </div>
    <div className='card-footer'>You answered {
        answers.filter((answ, index) => {
          return answ === quizItems[index].correct;
        }, 0).length
      } / {quizItems.length} answers correct</div>
    
  </div>)
}

export default ResultsDisplay

