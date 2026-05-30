import IndividualQuizBottomNavigation from "../common/individual quiz interface/IndividualQuizBottomNavigation";
import IndividualQuizContent from "../common/individual quiz interface/individualQuizContent";
import IndividualQuizNavbar from "../common/individual quiz interface/IndividualQuizNavbar";


export default function IndividualQuizInterfaceLayout() {
  return (
    <div className="bg-surface-container-high overflow-x-hidden">
     <IndividualQuizNavbar/>
     <IndividualQuizContent/>
      <IndividualQuizBottomNavigation/>
    </div>
  )
}
