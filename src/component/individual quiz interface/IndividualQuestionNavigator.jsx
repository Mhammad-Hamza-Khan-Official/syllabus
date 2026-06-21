import { motion, AnimatePresence } from "framer-motion";

export default function IndividualQuestionNavigator({
  state,
  typeOfQuestionRender,
  dispatch,
  isReview = false,
  Result = null,
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="inline-block">
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
                {/* Render Navigation boxes */}
                {typeOfQuestionRender.nestedArr[state.page - 1] == undefined ? (
                  <p className="text-xl font-semibold"> No Any Selection</p>
                ) : (
                  typeOfQuestionRender.nestedArr[state.page - 1].map((id) => {
                    const isAttempted = state.attempted.includes(id);
                    const isMarked = state.marked.includes(id);
                    const isCurrent = state.current.includes(id);
                    const isCorrectAns =
                      Result !== null
                        ? Result.correctAns.some(
                            (e) => parseInt(e.QuestionNum) === id,
                          )
                        : false;
                    const isMarkedAns = Result !== null
                        ? Result.marked.includes(id) : false;

                    const isWrongAns =
                      Result !== null
                        ? Result.wrongAns.some(
                            (e) => parseInt(e.QuestionNum) === id,
                          )
                        : false;

                    return (
                      <div
                        onClick={() => {
                          isAttempted || isCurrent || isMarked || isReview 
                            ? dispatch({
                                type: "navigateQuestion",
                                navigateNum: id,
                              })
                            : "";
                        }}
                        disabled={
                          !isAttempted || !isCurrent || !isMarked || !isReview 
                        }
                        key={id}
                        className={`
                  ${
                    isMarked 
                      ? "text-on-secondary bg-error/80 cursor-pointer"
                      : isAttempted
                        ? "bg-blue-primary text-on-secondary cursor-pointer"
                        : isCurrent
                          ? "text-blue-primary border-blue-primary border-3 cursor-pointer"
                          : isCorrectAns
                            ? "text-green-700 bg-correct-container/30 border-correct-container border-2 cursor-pointer"
                            : isWrongAns
                              ? " rounded-lg bg-error/15 text-error/90  border-2 border-red-500 cursor-pointer "
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
                          hidden={!isMarked && !isMarkedAns}
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
        </div>
      </div>
    </>
  );
}
