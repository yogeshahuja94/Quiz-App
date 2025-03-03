const QuestionCard = ({
  question,
  options,
  onSelect,
  bgColor,
}: {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  bgColor: { [key: string]: string };
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-2">{question}</h2>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            className={`w-full p-2 border rounded-lg text-left transition-all duration-200
              ${bgColor[option] || "bg-gray-200"}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
