"use client";
import React, { use } from "react";
import { QuizQuestion } from "../types";
import { useState } from "react";

interface Props {
  questions: QuizQuestion[];
}

const List = ({ questions }: Props) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <ul>
        {questions.map((q) => {
          return <li>{q.correctAnswer}</li>;
        })}
      </ul>

      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default List;
