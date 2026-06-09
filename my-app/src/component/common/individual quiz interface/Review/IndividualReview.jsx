import { useContext } from "react";
import IndividualQuestionNavigator from "../IndividualQuestionNavigator";
import individualQuizBoxContext from "../../../context/individualQuizBoxContext";

export default function IndividualReview() {
  const {
    state,
    dispatch,
    typeOfQuestionRender,
  } = useContext(individualQuizBoxContext);



  return (
    <>
      <header className="h-16">
        <nav className="fixed top-0 left-0 right-0 h-16 bg-surface shadow-sm flex justify-between items-center px-8 z-40">
          <div className="flex items-center gap-4">
            <span className="font-title-lg text-title-lg font-bold text-primary">
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
      <div className="flex ">
        <aside className="">
          <div className="p-4 m-5 bg-surface-container-lowest rounded-xl">
            <h2 className="font-semibold text-2xl">Question Navigator</h2>
            <IndividualQuestionNavigator
              state={state}
              typeOfQuestionRender={typeOfQuestionRender}
              dispatch={dispatch}
            />
            <hr className="mt-3 text-outline" />
            <div className="space-y-3 pt-6 border-t border-outline-variant">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#10b981]"></span>
                <span className="font-label-md text-secondary">
                  Correct (8)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-error"></span>
                <span className="font-label-md text-secondary">
                  Incorrect (4)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-surface-container-high"></span>
                <span className="font-label-md text-secondary">
                  Skipped (3)
                </span>
              </div>
            </div> 
          </div>
        </aside>
        <main className="h-[91.5vh]   overflow-y-auto ">
          <h1>Main</h1>

        </main>
      </div>
    </>
  );
}
