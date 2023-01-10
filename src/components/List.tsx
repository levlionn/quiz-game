"use client";
import React, { use } from "react";
import { QuizQuestion } from "../types";
import { useState, useEffect } from "react";

interface Props {
  questions: QuizQuestion[];
}

const List = ({ questions }: Props) => {
  const [counter, setCounter] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(15);

  const handleTimeout = () => {
    setCounter((counter + 1) % questions.length);
    setTimeLeft(15);
    setTimeout(handleTimeout, 15000);
  };

  useEffect(() => {
    setTimeout(handleTimeout, 15000);
  }, [counter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ul>
        <div>
          <h4>{questions[counter].category}</h4>
          <h2>{questions[counter].question}</h2>
          <li>{questions[counter].incorrectAnswers}</li>
          <li>{questions[counter].correctAnswer}</li>
        </div>
      </ul>
      <div>
        <div style={{ width: `${(timeLeft / 15) * 100}%` }}>{timeLeft}s</div>
      </div>
    </div>
  );
};

export default List;
