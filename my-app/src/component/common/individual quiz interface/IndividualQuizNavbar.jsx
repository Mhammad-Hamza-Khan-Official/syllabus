import { useContext } from "react";
import Timer from "../Timer";
import individualQuizBoxContext from "../../context/individualQuizBoxContext";

export default function IndividualQuizNavbar() {
  const {
    timerState,
    setTimerState
  } = useContext(individualQuizBoxContext)
  return (
    <>
      <nav className="bg-surface-container-high flex justify-between items-center w-screen px-8 py-4 mb-3 border-b border-outline-variant">
        {/* Title */}
        <div className="text-xl font-medium capitalize">
          University Entrance test
        </div>
        <div className="flex items-center gap-2">
          {/* timer */}
          <Timer timerState={timerState} setTimerState={setTimerState}/>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-outlined-symbols">

          </span>
        </div>
      </nav>
    </>
  );
}
