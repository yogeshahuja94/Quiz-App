import { useEffect, useState } from "react";

import QuestionCard from "../components/QuestionCard";
import questions from "../data/question";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function Quiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [bgColor, setBgColor] = useState<{ [key: string]: string }>({});
  const [disabledOptions, setDisabledOptions] = useState<boolean>(false);

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questions]));
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);

    if (disabledOptions) return;
    setDisabledOptions(true);

    if (option === shuffledQuestions[currentQuestionIndex].answer) {
      setBgColor({ [option]: "bg-green-500 text-white" });
      setScore((prevScore) => prevScore + 1);
    } else {
      setBgColor({ [option]: "bg-red-500 text-white" });
      // alert("Incorrect answer! Please choose the correct one.");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setBgColor({});
      setDisabledOptions(false);
    } else {
      setTimeout(() => {
        setQuizFinished(true);
      }, 100);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {quizFinished ? (
          <h2 className="text-xl font-bold text-center">
            Quiz Finished! Your Score: {score} / {shuffledQuestions.length + 1}
          </h2>
        ) : shuffledQuestions.length > 0 ? (
          <>
            <QuestionCard
              question={shuffledQuestions[currentQuestionIndex].question}
              options={shuffledQuestions[currentQuestionIndex].options}
              selectedOption={selectedOption}
              onSelect={handleSelect}
              bgColor={bgColor} // Add border color for correct and wrong answers
              disabledOptions={disabledOptions} // Add disabled state for options when the user selects an answer
            />
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="mt-4 w-full p-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
            >
              {currentQuestionIndex < shuffledQuestions.length - 1
                ? "Next"
                : "Finish"}
            </button>
          </>
        ) : (
          <p className="text-center text-lg">Loading questions...</p>
        )}
      </div>
    </div>
  );
}

function shuffleArray(array: Question[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
