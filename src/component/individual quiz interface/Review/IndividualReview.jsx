import { useContext} from "react";
import IndividualQuestionNavigator from "../IndividualQuestionNavigator";
import individualQuizBoxContext from "../../../context/individualQuizBoxContext";
import IndividualQuestion from "../IndividualQuestion";
import IndividualExplainationBox from "./IndividualExplainationBox";
import IndividualControls from "./IndividualControls";
import getResult from "./getResult";

export default function IndividualReview() {


  const Result = getResult();
  console.log("Result :",Result)
  
  const {
    dispatch,
    nestedArrConverter,
    totalNumberOfQuestions,
    selectedAnswers,
    setSelectedAnswers,
    state,
    QuestionArr,
    positiveMarking,
    nagetiveMarking,
  } = useContext(individualQuizBoxContext);

  return (
    <>
      {/* Header */}
      <div className="flex p-5 space-x-5 overflow-hidden h-screen w-screen">
      <header className="h-16">
        <nav className=" fixed top-0 left-0 right-0 h-16 bg-surface shadow-sm flex justify-between items-center px-8 z-40">
          <div className="flex items-center gap-4">
            <span className=" text-2xl font-bold text-blue-primary">
              Review Answers
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="help"
              >
                help
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="settings"
              >
                settings
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">
              S
            </div>
          </div>
        </nav>
      </header>
        <aside className="pt-19">
          {/* Navigator */}
          <div className="p-4  bg-surface-container-lowest rounded-xl">
            <h2 className="font-bold text-2xl mb-3">Question Navigator</h2>
            <IndividualQuestionNavigator
              state={state}
              typeOfQuestionRender={nestedArrConverter(
                totalNumberOfQuestions,
                false,
                15,
              )}
              isReview={Result !== null ? true : false}
              dispatch={dispatch}
              Result={Result}
            />
            <hr className="mt-3 text-outline" />
            <div className="space-y-3 pt-6 border-t border-outline-variant font-semibold text-lg">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-correct-container"></span>
                <span className="font-label-md  text-secondary">
                  Correct (
                  <span className="font-bold">
                    {Result !== null ? Result.numberOfCorrect : 0}
                  </span>
                  )
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-error"></span>
                <span className="font-label-md text-secondary">
                  Incorrect (
                  <span className="font-bold">
                    {Result !== null ? Result.numberOfWrong : 0}
                  </span>
                  )
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-900"></span>
                <span className="font-label-md text-secondary">
                  Marked (
                  <span className="font-bold">
                    {Result !== null ? Result.marked.length : 0}
                  </span>
                  )
                </span>
              </div>
            </div>
          </div>
        </aside>
        {/* Main */}
        <main className="h-screen flex-1 pt-18  overflow-y-auto space-y-6 ">
          <IndividualQuestion
            selectedAnswers={selectedAnswers}
            positiveMarking={positiveMarking}
            nagetiveMarking={nagetiveMarking}
            state={state}
            QuestionArr={QuestionArr}
            setSelectedAnswers={setSelectedAnswers}
            Result={Result}
            isReview={Result}
          />
          <div className="mt-12">
          <IndividualExplainationBox /> 
          </div>
          <div className="pb-8">

          <IndividualControls/>
          </div>
        </main>
      </div>
    </>
  );
}
