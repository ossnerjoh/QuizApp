import "./styles.css";
import { quizItems } from "./data/quizData";
import QuizDisplay from "./components/QuizDisplay";
import { useState } from "react";

export default function App() {
  const [hasQuizesLeft, setHasQuizesLeft] = useState(true);
  const [quizCounter, setQuizCounter] = useState(0);
  const [currentQuizItem, setCurrentQuizItem] = useState(quizItems[0]);
  const [answers, setAnswers] = useState([]);

  function setNextQuestion(selectedAnswer) {
    setAnswers([...answers, selectedAnswer]);
    if (quizCounter === quizItems.length - 1) {
      setHasQuizesLeft(false);
    } else {
      const newQuizCounter = quizCounter + 1;
      setQuizCounter(newQuizCounter);
      setCurrentQuizItem(quizItems[newQuizCounter]);
    }
  }
  return hasQuizesLeft ? (
    <QuizDisplay quizItem={currentQuizItem} setNextQuestion={setNextQuestion} />
  ) : (
    <div>
      You answered{" "}
      {
        answers.filter((answ, index) => {
          return answ === quizItems[index].correct;
        }, 0).length
      }{" "}
      of {quizItems.length} Answers correct
    </div>
  );
}
