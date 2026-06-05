import { useContext } from "react";
import individualQuizBoxContext from "../../context/individualQuizBoxContext";
export default function IndividualQuestionBox(props) {
  const {
    increaseScore = "+4",
    decreaseScore = "-1",
    whichSection = "Mathametics",
  } = props;

  const { selectedAnswers, setSelectedAnswers, state, QuestionArr } =
    useContext(individualQuizBoxContext);





  const handleSelect = (id) => {
    if (QuestionArr[state.currentQuestion].isMultiSelection) {
      setSelectedAnswers((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        //Add new selection
        return [...prev, id];
      });
    } else {
      setSelectedAnswers([id]);
      localStorage.setItem(String(state.currentQuestion + 1), String(id));
    }
  };

  if (
    QuestionArr[state.currentQuestion].isMultiSelection &&
    selectedAnswers.length !== 0
  ) {
    localStorage.setItem(
      String(state.currentQuestion + 1),
      selectedAnswers.join(" "),
    );
  }

  return (
    <>
      <div className="rounded-4xl w-full bg-on-secondary p-8 space-y-2 shadow-xl">
        <div className="flex justify-between">
          <div className="px-2 bg-surface-container-high text-center rounded-2xl">
            {whichSection + " Section"}
          </div>
          <div className="">
            Marks :{" "}
            <span className="text-green-700 font-bold">{increaseScore}</span> /{" "}
            <span className="text-error font-bold">{decreaseScore}</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-10">
          Question {QuestionArr[state.currentQuestion].questionId}
        </h1>
        {/* Question */}
        <p className="first-letter:uppercase text-xl  font-semibold">
          {QuestionArr[state.currentQuestion].question}
        </p>
        {/* Expresion Box */}
        {QuestionArr[state.currentQuestion].expresion !== null ? (
          <div className="my-6 p-5 bg-surface-container-low rounded-xl border border-outline-variant">
            <code className="text-4xl font-bold text-blue-primary">
              {QuestionArr[state.currentQuestion].expresion}
            </code>
          </div>
        ) : null}
        {/* Options */}
        <div className=" px-2 mt-3">
          <ol className="list-[upper-alpha] space-y-4">
            {QuestionArr[state.currentQuestion].options.map((option) => {
              const { id, text } = option;
              const isSelected =
                localStorage.getItem(String(state.currentQuestion + 1)) !== null
                  ? localStorage
                      .getItem(String(state.currentQuestion + 1))
                      .split(" ")
                      .includes(String(id))
                  : selectedAnswers.includes(id);

              return (
                <label
                  className={`
                flex items-center p-4 border rounded-xl
                cursor-pointer transition-all group

                ${
                  isSelected
                    ? "bg-primary-fixed border-primary text-on-primary-fixed-variant"
                    : "border-outline-variant hover:bg-surface-container-high"
                }
                    `}
                  key={id}
                >
                  <input
                    className="OptionInputs w-5 h-5 text-primary border-outline focus:ring-primary"
                    name="math_answer"
                    type={
                      QuestionArr[state.currentQuestion].isMultiSelection
                        ? "checkbox"
                        : "radio"
                    }
                    onChange={() => handleSelect(id)}
                    checked={isSelected}
                  />
                  <span className="ml-7  font-semibold text-xl group-hover:text-primary transition-colors">
                    <li>{text}</li>
                  </span>
                </label>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
