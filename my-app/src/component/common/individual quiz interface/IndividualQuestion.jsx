export default function IndividualQuestion({
  whichSection = "Maths",
  // positiveMarking,
  // nagetiveMarking,
  state,
  QuestionArr,
  selectedAnswers,
  setSelectedAnswers,
  Result = null,
  isReview = false,
}) {
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

  const isCorrectBox =
    Result !== null
      ? Result.correctAns.some(
          (e) => e.QuestionNum == state.currentQuestion + 1,
        )
      : null;

  return (
    <>
      <div className="rounded-4xl w-full bg-on-secondary p-8 space-y-2 shadow-xl">
        <div className="flex justify-between">
          <div className="px-2 bg-surface-container-high text-center rounded-2xl">
            {whichSection + " Section"}
          </div>
          {
            isCorrectBox  ? (
              <div className="">correct</div>
            ) :  (
              <span class="text-error font-semibold px-2 rounded-xl font-label-md flex items-center justify-between gap-1">
                <span
                  class="material-symbols-outlined text-[18px]"
                  data-icon="cancel"
                >
                  cancel
                </span>
                Incorrect
              </span>
            )
            // <div className="">
            //   Marks :{" "}
            //   <span className="text-green-700 font-bold">
            //     {"+" + positiveMarking}
            //   </span>
            //   {nagetiveMarking ? (
            //     <span className="text-error font-bold">
            //       {" / " + nagetiveMarking}
            //     </span>
            //   ) : null}
            // </div>
          }
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

              const currentQuestionPositiveResult =
                Result !== null
                  ? Result.correctAns.filter((e) => {
                      return (
                        parseInt(e.QuestionNum) === state.currentQuestion + 1
                      );
                    })[0]
                  : [];

              const currentQuestionNagetiveResult =
                Result !== null
                  ? Result.wrongAns.filter((e) => {
                      return (
                        parseInt(e.QuestionNum) === state.currentQuestion + 1
                      );
                    })[0]
                  : [];

              const isCorrect =
                isReview && currentQuestionPositiveResult !== undefined
                  ? currentQuestionPositiveResult.Answers.includes(
                      id.toString(),
                    )
                  : false;

              const isReviewCorrect =
                isReview && currentQuestionNagetiveResult !== undefined
                  ? currentQuestionNagetiveResult.correctAns.map((e)=> Number(e)).includes(id)
                  : false;

              const isWrong =
                isReview && currentQuestionNagetiveResult !== undefined
                  ? currentQuestionNagetiveResult.wrongAns.includes(
                      id.toString(),
                    )
                  : false;

              return (
                <label
                  className={`
                flex items-center p-4 border rounded-xl
                cursor-pointer transition-all group

                ${
                  isSelected
                    ? "bg-primary-fixed border-primary text-on-primary-fixed-variant"
                    : isCorrect || isReviewCorrect
                      ? "bg-correct border-success text-correct-container"
                      : isWrong
                        ? "bg-wrong border-error text-black"
                        : isReview
                          ? "border-outline-variant/90 "
                          : "border-outline-variant hover:bg-surface-container-high"
                }
                    `}
                  key={id}
                >
                  {isReview ? (
                    <div
                      className={`${isCorrect || isReviewCorrect ? "bg-correct-container text-white" : isWrong ? "bg-error text-white" : "bg-surface-container-high text-secondary"} w-8 h-8 rounded-full   flex items-center justify-center font-bold mr-4`}
                    >
                      <li className="ml-6"></li>
                    </div>
                  ) : (
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

                  )}
                  <span className="ml-7  font-semibold text-xl group-hover:text-primary transition-colors">
                    <p>{text}</p>
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
