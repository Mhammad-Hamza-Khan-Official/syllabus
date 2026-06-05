import { useContext } from "react";
import individualQuizBoxContext from "../../context/individualQuizBoxContext";

export default function IndividualQuizBottomNavigation() {
  const {
    dispatch,
    state,
    QuestionArr,
    nextQuestionsHandle,
    testSubmitHandle,
  } = useContext(individualQuizBoxContext);
  const totalNumberOfQuestions = QuestionArr.length;

  const isNotableToNext =
    localStorage.getItem(String(state.currentQuestion + 1)) !== null
      ? false
      : true;

  return (
    <div>
      <footer className="border-t  z-50">
        <div className="fixed left-0 right-0 bg-surface bottom-0 flex justify-between items-center w-full px-margin-desktop py-4 ">
          <div className="flex gap-4">
            <button
              className="text-on-surface-variant flex items-center gap-2 px-6 py-2 hover:bg-surface-container-high transition-all rounded-xl active:scale-95 cursor-pointer border"
              onClick={() => dispatch({ type: "back" })}
              disabled={state.currentQuestion + 1 === 1}
            >
              <span
                className="material-symbols-outlined"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
              <span className="text-label-sm font-label-sm">Previous</span>
            </button>
            <button
              className="text-on-surface-variant flex items-center gap-2 px-6 py-2 hover:bg-surface-container-high transition-all rounded-xl active:scale-95
            border cursor-pointer"
            onClick={()=>{}}
            >
              <span
                className="material-symbols-outlined text-tertiary"
                data-icon="flag"
              >
                flag
              </span>
              <span className="text-label-sm font-label-sm">
                Mark for Review
              </span>
            </button>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-primary-container hover:bg-primary-container/95 text-on-primary-container rounded-xl px-6 py-2 flex items-center gap-2 active:scale-95 transition-transform shadow-md cursor-pointer 
            disabled:bg-inherit disabled:text-blue-primary border-2 border-transparent disabled:border-blue-primary  font-bold"
              onClick={() => {
                nextQuestionsHandle();
              }}
              disabled={
                state.currentQuestion + 1 >= totalNumberOfQuestions ||
                isNotableToNext
              }
            >
              <span className="text-label-sm font-label-sm">Next</span>
              <span
                className="material-symbols-outlined"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
            <button
              className="bg-error text-on-error rounded-xl px-8 py-2 flex items-center gap-2 active:scale-95 transition-transform font-bold shadow-lg ml-8 cursor-pointer"
              onClick={() => {
                dispatch({ type: "testSubmit" });
                testSubmitHandle();
              }}
            >
              <span className="text-label-sm font-label-sm">Submit Test</span>
              <span className="material-symbols-outlined" data-icon="task_alt">
                task_alt
              </span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
