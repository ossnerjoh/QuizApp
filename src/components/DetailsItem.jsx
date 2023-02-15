import React from 'react'

function DetailsItem({ quizItem, answer }) {
    return (       
        quizItem.correct === answer ?
            <ul className="list-group mb-3 ">
                <li className="list-group-item fw-bold">{quizItem.question}</li>                
                <li className="list-group-item list-group-item-success">{quizItem[quizItem.correct]}</li>
            </ul>
            :
            <ul className="list-group mb-3">
                <li className="list-group-item fw-bold">{quizItem.question}</li>                
                <li className="list-group-item list-group-item-success">{quizItem[quizItem.correct]}</li>
                <li className="list-group-item list-group-item-danger">{quizItem[answer]}</li>                
            </ul>
    )
}

export default DetailsItem