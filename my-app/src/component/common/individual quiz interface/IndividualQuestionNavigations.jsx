import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import individualQuizBoxContext from "../../context/individualQuizBoxContext";

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
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={state.page}
              initial={{
                x: state.direction === 1 ? -120 : 120,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: state.direction === 1 ? 120 : -120,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className={`${
                typeOfQuestionRender.nestedArr[state.page - 1] == undefined
                  ? "flex justify-center items-center p-2"
                  : `grid grid-cols-[repeat(2,minmax(0,52px))]
            md:grid-cols-[repeat(3,minmax(0,52px))]
            lg:grid-cols-[repeat(4,minmax(0,52px))]
            xl:grid-cols-[repeat(5,minmax(0,52px))]
            gap-3 py-4 justify-center `
              }`}
            >
              {typeOfQuestionRender.nestedArr[state.page - 1] == undefined ? (
                <p className="text-xl font-semibold"> No Any Selection</p>
              ) : (
                typeOfQuestionRender.nestedArr[state.page - 1].map((id) => {
                  const isAttempted = state.attempted.includes(id);
                  const isMarked = state.marked.includes(id);
                  const isCurrent = state.current.includes(id);
                  return (
                    <div
                      onClick={()=>{
                        (isAttempted || isCurrent || isMarked)?
                        dispatch({type : "navigateQuestion",navigateNum : id}) : ""
                      }}
                      disabled={!isAttempted || !isCurrent || !isMarked}
                      key={id}
                      className={`
                  ${
                    isMarked
                      ? "text-on-secondary bg-error/80 cursor-pointer"
                      : isAttempted
                        ? "bg-blue-primary text-on-secondary cursor-pointer"
                        : isCurrent
                          ? "text-blue-primary border-blue-primary border-3 cursor-pointer"
                          : "text-secondary bg-surface-container-highest border-secondary border"
                  }
                  
                  w-full
                  h-13
                  flex
                  justify-center
                  items-center
                  rounded-xl
                  font-bold
                  text-xl
                  text-center
                  relative
                  hover:scale-105
                  hover:shadow-xl
                  active:scale-95
                  transition-all duration-200
                  `}
                    >
                      <span
                        className="absolute -top-1 -right-1 material-symbols-outlined text-sm"
                        hidden={!isMarked}
                      >
                        flag
                      </span>

                      <span>{id < 10 ? `0${id}` : id}</span>
                    </div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {/*navigate Pagination */}
        <div
          className="text-xl text-secondary font-extrabold flex justify-end items-center gap-3 pr-5"
          hidden={
            typeOfQuestionRender.numberOfPages === 1 ||
            typeOfQuestionRender.nestedArr[state.page - 1] === undefined
          }
        >
          <button
            disabled={state.page === 1}
            className="
          py-1
          w-4
          rounded-md
          bg-surface-container
          hover:scale-110
          disabled:opacity-40
          transition-all
          cursor-pointer
          active:border flex justify-center items-center
          "
            onClick={() => dispatch({ type: "backward" })}
          >
            <span
              className="material-symbols-outlined"
              data-icon="chevron_left"
            >
              chevron_left
            </span>
          </button>

          <span className="text-lg font-semibold min-w-10 text-center">
            {state.page < 10 ? `0${state.page}` : state.page}
          </span>

          <button
            disabled={state.page === typeOfQuestionRender.numberOfPages}
            className="
          py-1
          w-4
          rounded-md
          bg-surface-container
          hover:scale-110
          disabled:opacity-40
          transition-all
          cursor-pointer
          active:border flex justify-center items-center
          "
            onClick={() => dispatch({ type: "forward" })}
          >
            <span
              className="material-symbols-outlined"
              data-icon="chevron_right"
            >
              chevron_right
            </span>
          </button>
        </div>
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
