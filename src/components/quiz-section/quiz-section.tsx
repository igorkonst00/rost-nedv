"use client";
import { useState } from "react";
import { IQuiz, Selections } from "./types/types";
import { QUIZ } from "./constants/constant";
import { QuizStep } from "./quiz-step";
import { FinalStep } from "./final-step";

export function QuizSection() {
  const [quizStep, setQuizStep] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Selections[]>(
    QUIZ.map(() => ({}))
  );
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleOptionChange = (
    stepIndex: number,
    option: string,
    isChecked: boolean
  ) => {
    setMessage("");
    const updatedOptions = {
      ...selectedOptions[stepIndex],
      [option]: isChecked,
    };
    const newSelections = [...selectedOptions];
    newSelections[stepIndex] = updatedOptions;
    setSelectedOptions(newSelections);
  };

  const increment = () => {
    const isAnyOptionSelected = Object.values(selectedOptions[quizStep]).some(
      (value) => value
    );
    if (!isAnyOptionSelected) {
      setMessage("Пожалуйста, выберите хотя бы один вариант.");
      return;
    }
    setMessage("");
    setQuizStep((prev) => Math.min(prev + 1, QUIZ.length));
  };

  const decrement = () => {
    setMessage("");
    setQuizStep((prev) => Math.max(prev - 1, 0));
  };

  const submitResults = () => {
    setMessage("Успех! Ожидайте");
    console.log("Selected options:", selectedOptions);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <section id="quiz" className="bg-primary">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5">
        <h2 className="text-5xl text-secondary font-bold mb-3">
          Ответьте на несколько вопросов
        </h2>
        <p className="text-xl uppercase text-white">
          МЫ ПОДБЕРЁМ НЕСКОЛЬКО ВАРИАНТОВ ПЕРСОНАЛЬНО ДЛЯ ВАС.
        </p>
        <p className="text-xl uppercase text-white mb-12">
          ПОДБОРКУ ПРИШЛЕМ ЧЕРЕЗ 15 МИНУТ
        </p>
      </div>
      <div className="bg-quiz-theme px-12 py-12 flex flex-col gap-10 justify-between max-w-[1280px] mx-auto">
        {quizStep !== QUIZ.length ? (
          <QuizStep
            quiz={QUIZ[quizStep]}
            selectedOptions={selectedOptions[quizStep]}
            onOptionChange={(option, isChecked) =>
              handleOptionChange(quizStep, option, isChecked)
            }
          />
        ) : (
          <FinalStep
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        )}
        {!!message && <p className="text-white text-center">{message}</p>}
        <div className="text-secondary flex items-center justify-between uppercase">
          <button
            disabled={quizStep <= 0}
            type="button"
            onClick={decrement}
            className="disabled:opacity-30"
          >
            Назад
          </button>
          {quizStep === QUIZ.length ? (
            <button
              type="button"
              disabled={!phoneNumber}
              className="disabled:opacity-30"
              onClick={submitResults}
            >
              Отправить
            </button>
          ) : (
            <button
              type="button"
              onClick={increment}
              className="disabled:opacity-30"
            >
              Далее
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
