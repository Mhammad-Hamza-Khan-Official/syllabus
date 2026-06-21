import { useContext } from "react";
import individualQuizBoxContext from "../../../context/individualQuizBoxContext";

export default function IndividualControls() {
    const {state,dispatch,totalNumberOfQuestions} = useContext(individualQuizBoxContext)
  return (
    <>
      <div className="flex justify-between items-center bg-surface-container-lowest p-6 rounded-2xl shadow-taupe-600 shadow-2xl ">
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 disabled:border-outline-variant cursor-pointer text-on-surface hover:bg-surface-variant disabled:text-on-secondary-container/80
          disabled:cursor-auto disabled:bg-inherit  transition-all font-bold active:scale-95"
          onClick={() => {
            dispatch({ type: "back"});
          }}
          disabled={state.currentQuestion + 1 === 1}
        >
          <span className="material-symbols-outlined">chevron_left</span>
          Previous Question
        </button>
        <div className="hidden md:block" font-semibold>
          <span className="font-semibold text-lg text-outline">
            You are reviewing at your own pace
          </span>
        </div>
        <button
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-primary text-on-primary cursor-pointer hover:bg-primary-container transition-all font-bold shadow-md active:scale-95 disabled:bg-on-secondary disabled:border-outline-variant border-2  disabled:text-on-background disabled:cursor-auto disabled:active:scale-none"
          onClick={() => {
            dispatch({ type: "next"});
          }}
          disabled={
            state.currentQuestion + 1 >= totalNumberOfQuestions 
          }
        >
          Next Question
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </>
  );
}
