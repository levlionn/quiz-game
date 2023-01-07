import React from "react";
import { QuizQuestion } from "../types";
import asyncComponent from "../utility/asyncComponent";
import List from "./List";

const Card = async () => {
  const data = await fetch("https://the-trivia-api.com/api/questions?limit=5");
  const quizQuestions: QuizQuestion[] = await data.json();

  return (
    <div>
      <List questions={quizQuestions} />

      {/* <pre>{JSON.stringify(quizQuestions, null, 2)}</pre> */}
    </div>
  );
};

export default asyncComponent(Card);
