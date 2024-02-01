import { IQuiz, Selections } from "./types/types";

export function QuizStep({
  quiz,
  selectedOptions,
  onOptionChange,
}: {
  quiz: IQuiz;
  selectedOptions: Selections;
  onOptionChange: (option: string, isChecked: boolean) => void;
}) {
  return (
    <div>
      <h3 className="text-white font-bold text-3xl mb-4">{quiz.title}</h3>
      <div className="flex flex-col">
        {quiz.checks.map((check) => (
          <label className="my-3 flex gap-1 items-center" key={check}>
            <input
              type="checkbox"
              className="h-5 w-5 border-0 rounded-sm focus:outline-none"
              checked={selectedOptions[check] || false}
              onChange={(e) => onOptionChange(check, e.target.checked)}
            />
            <span className="text-white">{check}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
