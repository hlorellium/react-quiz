import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNr,
  totalQuestions,
  callback,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correct_answer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
