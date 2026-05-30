import IndividualQuestionNavigations from "./IndividualQuestionNavigations";

export default function IndividualSideNavigation() {
  
  return (
    <>
      <div className="border-l h-full ">
        <div className="border-b space-y-2 pb-4 pr-4  ml-4">
          <h1 className="text-blue-primary text-4xl font-bold">
            Question Palette
          </h1>
          <p className="text-md text-secondary font-semibold">
            Mathematics Section
          </p>
        </div>
        <IndividualQuestionNavigations />
        
      </div>
    </>
  );
}
