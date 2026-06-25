import IndividualReview from "../component/individual quiz interface/Review/IndividualReview";
import IndividualQuizBoxProvider from "../context/IndividualQuizBoxProvider";


export default function IndividualQuizReviewLayout() {
  return (
    <>
    <IndividualQuizBoxProvider>
      <IndividualReview/>
    </IndividualQuizBoxProvider>
    </>
  )
}
