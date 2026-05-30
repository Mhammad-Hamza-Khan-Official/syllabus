import { motion, AnimatePresence } from "framer-motion";
import { useReducer, useState } from "react";

export default function IndividualQuestionNavigations(props) {
  const { questionNum = 100 } = props;

  const NotAttempted = [];
  for (let index = 1; index <= questionNum; index++) {
    NotAttempted.push(index);
  }
  const [state, dispatch] = useReducer(reducer, {
    page: 1,
    direction: 1,
    current: [],
    attempted: [],
    marked: [],
    notAttempted: NotAttempted,
    attemptedNum: 0,
    markedNum: 0,
    notAttemptedNum: questionNum,
    allQuestionNum: questionNum,
  });

  function reducer(state, action) {
    switch (action.type) {
      //page navigation
      case "forward":
        return {
          ...state,
          page: state.page + 1,
          direction: 1,
        };

      case "backward":
        return {
          ...state,
          page: state.page - 1,
          direction: -1,
        };
      case "reset":
        return {
          ...state,
          page: 1,
        };
      // for sorting btns
      case "attempted":
        console.log(state.attempted.length);
        return {
          ...state,
          attempted: [...state.attempted, action.id],
          notAttempted: state.notAttempted.filter((e) => {
            return e !== action.id;
          }),
          attemptedNum: state.attempted.length + 1,
          notAttemptedNum: state.notAttempted.length - 1,
        };
      case "current":
        return {
          ...state,
          current: [action.id],
        };
      case "marked":
        return {
          ...state,
          marked: [...state.marked, action.id],
          notAttemptedNum: state.notAttempted.length ,
          markedNum: state.marked.length + 1,
        };

      default:
        return state;
    }
  }

  const [typeOfQuestionRender, setTypeOfQuestionRender] = useState(
    nestedArrConverter(questionNum),
  );

  function nestedArrConverter(
    totalNumberOfQuestionsORarray = 0,
    isArr = false,
  ) {
    const onePageQuestions = 10;
    if (isArr) {
      const totalIds = totalNumberOfQuestionsORarray.length;
      const numberOfPages = Math.ceil(totalIds / onePageQuestions);

      let nestedArr = [];
      for (let index = 0; index < numberOfPages; index++) {
        nestedArr.push([]);
      }

      let num = 0;

      for (let index = 0; index < totalIds; index++) {
        nestedArr[num].push(totalNumberOfQuestionsORarray[index]);
        console.log(totalNumberOfQuestionsORarray[index]);
        if (nestedArr[num].length === 10) {
          num++;
        }
      }
      console.log(nestedArr);
      return {
        nestedArr,
        numberOfPages,
        totalIds,
      };
    } else {
      const totalIds = totalNumberOfQuestionsORarray;
      const numberOfPages = Math.ceil(totalIds / onePageQuestions);

      let nestedArr = [];

      for (let index = 1; index <= numberOfPages; index++) {
        nestedArr.push([]);
      }

      let num = 0;

      for (let index = 1; index <= totalIds; index++) {
        nestedArr[num].push(index);

        if (nestedArr[num].length === 10) {
          num++;
        }
      }

      return {
        nestedArr,
        numberOfPages,
        totalIds,
      };
    }
  }

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
                      key={id}
                      className={`
                  ${
                    isMarked
                      ? "text-on-secondary bg-error/80"
                      : isAttempted
                        ? "bg-blue-primary text-on-secondary"
                        : isCurrent
                          ? "text-blue-primary border-blue-primary border-3 "
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
                  cursor-pointer
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
          w-10 h-10 rounded-full
          bg-surface-container
          hover:scale-110
          disabled:opacity-40
          transition-all
          "
            onClick={() => dispatch({ type: "backward" })}
          >
            &lt;
          </button>

          <span className="text-lg font-semibold min-w-8 text-center">
            {state.page < 10 ? `0${state.page}` : state.page}
          </span>

          <button
            disabled={state.page === typeOfQuestionRender.numberOfPages}
            className="
          w-10 h-10 rounded-full
          bg-surface-container
          hover:scale-110
          disabled:opacity-40
          transition-all
          "
            onClick={() => dispatch({ type: "forward" })}
          >
            &gt;
          </button>
        </div>
        {/* sorting btns */}
        <div className="space-y-3 mt-3 w-full">
          {/* current */}
          <div
            className="flex items-center gap-3 text-blue-primary font-bold border-l-4 border-blue-primary pl-4 py-1 cursor-pointer"
            onClick={() => {
              setTypeOfQuestionRender(nestedArrConverter(state.current, true));
              dispatch({ type: "reset" });
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
              dispatch({ type: "reset" });
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
              dispatch({ type: "reset" });
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
              dispatch({ type: "reset" });
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
              setTypeOfQuestionRender(nestedArrConverter(questionNum));
              dispatch({ type: "reset" });
            }}
          >
            <span
              className="material-symbols-outlined"
              data-icon="radio_button_unchecked"
            >
              radio_button_unchecked
            </span>
            <span className="text-label-md font-label-md">
              View All ({questionNum})
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
