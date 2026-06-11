import { useContext } from "react";
import individualQuizBoxContext from "../../context/individualQuizBoxContext";
import IndividualQuestion from "./IndividualQuestion";
export default function IndividualQuestionBox(props) {
  const { 
    whichSection = "Mathametics",
  } = props;

  const {
    selectedAnswers,
    setSelectedAnswers,
    state,
    QuestionArr,
    positiveMarking,
    nagetiveMarking,
  } = useContext(individualQuizBoxContext);



  return (
    <>
      <IndividualQuestion selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} state={state} QuestionArr={QuestionArr} positiveMarking={positiveMarking} nagetiveMarking={nagetiveMarking} whichSection={whichSection}/>
    </>
  );
}
