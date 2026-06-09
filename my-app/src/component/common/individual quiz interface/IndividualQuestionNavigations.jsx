import { useContext, useEffect } from "react";
import individualQuizBoxContext from "../../context/individualQuizBoxContext";
import IndividualQuestionNavigator from "./IndividualQuestionNavigator";

export default function IndividualQuestionNavigations() {
  const {
    state,
    dispatch,
    totalNumberOfQuestions,
    typeOfQuestionRender,
    setTypeOfQuestionRender,
    nestedArrConverter,
    QuestionArr,
    setSortingBtnState,
    sortingBtnState
  } = useContext(individualQuizBoxContext);



const { currentQuestion, attempted, current ,marked , notAttempted} = state;
const { viewCurrent ,viewAttempted ,viewMarked,viewNotAttempted} = sortingBtnState;

useEffect(() => {
  if (!Array.isArray(QuestionArr) || QuestionArr.length === 0) return;
  const currentObj = QuestionArr[currentQuestion];
  if (!currentObj) return;

  const currentQuestionId = currentObj.questionId;

  // avoid dispatch if already current or already attempted
  if (!current.includes(currentQuestionId) && !attempted.includes(currentQuestionId)) {
    dispatch({ type: 'current', id: currentQuestionId });
  }

  //For sorting

  function newRender(renderValue) {
    const newRender = nestedArrConverter(renderValue, true);
    // avoid re-setting identical render to prevent extra renders
    if (JSON.stringify(typeOfQuestionRender) !== JSON.stringify(newRender)) {
      setTypeOfQuestionRender(newRender);
      dispatch({ type: 'reset' });
    }
  }
  

  if(viewCurrent){
    newRender(current)
  } else if(viewAttempted){
    newRender(attempted)
  }else if(viewMarked){
    newRender(marked)
  } else if (viewNotAttempted) {
    newRender(notAttempted)
  }

}, [
  QuestionArr,
  currentQuestion,
  attempted,
  viewMarked,
  viewNotAttempted,
  viewCurrent,
  viewAttempted,
  notAttempted,
  marked,
  current,
  dispatch,
  nestedArrConverter,
  setTypeOfQuestionRender,
  typeOfQuestionRender,
]);


  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-full">
        {/* Animated Questions */}
        <IndividualQuestionNavigator state={state} typeOfQuestionRender={typeOfQuestionRender} dispatch={dispatch}/>
        {/* sorting btns */}
        <div className="space-y-3 mt-3 w-full">
          {/* current */}
          <div
            className="flex items-center gap-3 text-blue-primary font-bold border-l-4 border-blue-primary pl-4 py-1 cursor-pointer"
            onClick={() => {
              setTypeOfQuestionRender(nestedArrConverter(state.current, true));
              // for rendering first page
              dispatch({ type: "reset" });
              setSortingBtnState({
                viewCurrent: true,
                viewMarked: false,
                viewNotAttempted: false,
                viewAttempted: false,
              });
            }}
          >
            <span className="material-symbols-outlined" data-icon="play_circle">
              play_circle
            </span>
            <span className="text-label-md font-label-md">
              Current Question
            </span>
          </div>
          {/* Answered */}
          <div
            className="flex items-center gap-3 text-secondary font-medium pl-4 py-1 cursor-pointer"
            onClick={() => {
              setTypeOfQuestionRender(
                nestedArrConverter(state.attempted, true),
              );
              // for rendering first page
              dispatch({ type: "reset" });
              setSortingBtnState({
                viewCurrent: false,
                viewMarked: false,
                viewNotAttempted: false,
                viewAttempted: true,
              });
            }}
          >
            <span
              className="material-symbols-outlined"
              data-icon="check_circle"
            >
              check_circle
            </span>
            <span className="text-label-md font-label-md">
              Answered ({state.attemptedNum})
            </span>
          </div>
          {/* Marked */}
          <div
            className="flex items-center gap-3 text-secondary font-medium pl-4 py-1 cursor-pointer"
            onClick={() => {
              setTypeOfQuestionRender(nestedArrConverter(state.marked, true));
              // for rendering first page
              dispatch({ type: "reset" });
              setSortingBtnState({
                viewCurrent: false,
                viewMarked: true,
                viewNotAttempted: false,
                viewAttempted: false,
              });
            }}
          >
            <span
              className="material-symbols-outlined text-tertiary"
              data-icon="flag"
            >
              flag
            </span>
            <span className="text-label-md font-label-md">
              Marked ({state.markedNum})
            </span>
          </div>
          {/* not visited */}
          <div
            className="flex items-center gap-3 text-secondary font-medium pl-4 py-1 cursor-pointer"
            onClick={() => {
              setTypeOfQuestionRender(
                nestedArrConverter(state.notAttempted, true),
              );
              // for rendering first page
              dispatch({ type: "reset" });
              setSortingBtnState({
                viewCurrent: false,
                viewMarked: false,
                viewNotAttempted: true,
                viewAttempted: false,
              });
            }}
          >
            <span
              className="material-symbols-outlined"
              data-icon="radio_button_unchecked"
            >
              radio_button_unchecked
            </span>
            <span className="text-label-md font-label-md">
              Not Visited ({state.notAttemptedNum})
            </span>
          </div>
          {/* view all */}
          <div
            className="flex items-center gap-3 text-secondary font-medium pl-4 py-1 cursor-pointer"
            onClick={() => {
              setTypeOfQuestionRender(
                nestedArrConverter(totalNumberOfQuestions),
              );
              // for rendering first page
              dispatch({ type: "reset" });
              setSortingBtnState({
                viewCurrent: false,
                viewMarked: false,
                viewNotAttempted: false,
                viewAttempted: false,
              });
            }}
          >
            <span
              className="material-symbols-outlined"
              data-icon="radio_button_unchecked"
            >
              radio_button_unchecked
            </span>
            <span className="text-label-md font-label-md">
              View All ({totalNumberOfQuestions})
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 w-full">
        <button className="w-full py-3 cursor-pointer bg-secondary text-on-secondary rounded-xl font-bold text-label-md hover:bg-on-secondary-fixed-variant transition-colors flex items-center justify-center gap-2">
          Review All Section
          <span
            className="material-symbols-outlined text-sm"
            data-icon="analytics"
          >
            analytics
          </span>
        </button>
        <button
          className="w-full py-3 cursor-pointer bg-secondary text-on-secondary rounded-xl font-bold text-label-md hover:bg-on-secondary-fixed-variant transition-colors flex items-center justify-center gap-2"
          onClick={() => {
            dispatch({ type: prompt("Enter type"), id: +prompt("Enter id") });
          }}
        >
          ADD
          <span
            className="material-symbols-outlined text-sm"
            data-icon="analytics"
          >
            analytics
          </span>
        </button>
      </div>
    </div>
  );
}
