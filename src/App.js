import "./styles.css";
import {quizItems} from "./data/quizData";
import QuizDisplay from "./components/QuizDisplay";
import { useState } from "react";

export default function App() {
  const [quizNr, setQuizNr]= useState(0);
  console.log(quizItems)
  return (
    <QuizDisplay quizItem={quizItems[quizNr]}/>
  );
}
