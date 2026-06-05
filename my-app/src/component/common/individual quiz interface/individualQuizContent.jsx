import IndividualQuestionBox from "./IndividualQuestionBox";
import IndividualSideNavigation from "./IndividualSideNavigation";

export default function individualQuizContent() {
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr] mb-20">
        <div className="px-8 bg-surface-container-high">
          <IndividualQuestionBox />
        </div>
        <div className="">
          <IndividualSideNavigation />
        </div>
      </div>
    </>
  );
}
