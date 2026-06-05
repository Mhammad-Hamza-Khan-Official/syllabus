import { useReducer, useState } from "react";
import IndividualQuizBoxContext from "./individualQuizBoxContext";

export default function IndividualQuizBoxProvider({ children }) {
  const QuestionArr = [
    {
      questionId: 1,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = sin(x) + cos(x)",
      isMultiSelection: false,
      correctAnswer: 1,
      options: [
        { id: 1, text: "cos(x) - sin(x)" },
        { id: 2, text: "cos(x) + sin(x)" },
        { id: 3, text: "sin(x) - cos(x)" },
        { id: 4, text: "-sin(x) - cos(x)" },
      ],
    },
    {
      questionId: 2,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = x²",
      isMultiSelection: false,
      correctAnswer: 2,
      options: [
        { id: 1, text: "x" },
        { id: 2, text: "2x" },
        { id: 3, text: "x²" },
        { id: 4, text: "2" },
      ],
    },
    {
      questionId: 3,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = eˣ",
      isMultiSelection: false,
      correctAnswer: 3,
      options: [
        { id: 1, text: "1" },
        { id: 2, text: "xeˣ" },
        { id: 3, text: "eˣ" },
        { id: 4, text: "ln(x)" },
      ],
    },
    {
      questionId: 4,
      question: "Which keyword is used to declare a constant variable?",
      expresion: null,
      isMultiSelection: false,
      correctAnswer: 2,
      options: [
        { id: 1, text: "var" },
        { id: 2, text: "const" },
        { id: 3, text: "letvar" },
        { id: 4, text: "static" },
      ],
    },
    {
      questionId: 5,
      question: "Which of the following are JavaScript primitive data types?",
      expresion: null,
      isMultiSelection: true,
      correctAnswer: [1, 2, 4],
      options: [
        { id: 1, text: "string" },
        { id: 2, text: "number" },
        { id: 3, text: "array" },
        { id: 4, text: "boolean" },
      ],
    },
    {
      questionId: 6,
      question: "Which CSS property changes text color?",
      expresion: null,
      isMultiSelection: false,
      correctAnswer: 1,
      options: [
        { id: 1, text: "color" },
        { id: 2, text: "background-color" },
        { id: 3, text: "font-color" },
        { id: 4, text: "text-style" },
      ],
    },
    {
      questionId: 7,
      question: "Which of the following are CSS frameworks?",
      expresion: null,
      isMultiSelection: true,
      correctAnswer: [1, 2, 4],
      options: [
        { id: 1, text: "Bootstrap" },
        { id: 2, text: "Tailwind CSS" },
        { id: 3, text: "Express.js" },
        { id: 4, text: "Bulma" },
      ],
    },
    {
      questionId: 8,
      question: "Which hook is used to manage state in React?",
      expresion: null,
      isMultiSelection: false,
      correctAnswer: 2,
      options: [
        { id: 1, text: "useEffect" },
        { id: 2, text: "useState" },
        { id: 3, text: "useMemo" },
        { id: 4, text: "useRef" },
      ],
    },
    {
      questionId: 9,
      question: "Which of the following are React Hooks?",
      expresion: null,
      isMultiSelection: true,
      correctAnswer: [1, 2, 3],
      options: [
        { id: 1, text: "useState" },
        { id: 2, text: "useEffect" },
        { id: 3, text: "useContext" },
        { id: 4, text: "setState" },
      ],
    },
    {
      questionId: 10,
      question: "Which technologies are part of the MERN stack?",
      expresion: null,
      isMultiSelection: true,
      correctAnswer: [1, 2, 3, 4],
      options: [
        { id: 1, text: "MongoDB" },
        { id: 2, text: "Express.js" },
        { id: 3, text: "React" },
        { id: 4, text: "Node.js" },
      ],
    },
  ];

  const totalNumberOfQuestions = QuestionArr.length;

  const NotAttempted = [];
  for (let index = 1; index <= totalNumberOfQuestions; index++) {
    NotAttempted.push(index);
  }

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [sortingBtnState, setSortingBtnState] = useState({
    viewCurrent: false,
    viewMarked: false,
    viewAttempted: false,
    viewNotAttempted: false,
  });

  const [state, dispatch] = useReducer(reducer, {
    currentQuestion: 0,
    page: 1,
    direction: 1,
    current: [],
    attempted: [],
    marked: [],
    notAttempted: NotAttempted,
    attemptedNum: 0,
    markedNum: 0,
    notAttemptedNum: totalNumberOfQuestions,
    alltotalNumberOfQuestions: totalNumberOfQuestions,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
        };

      case "back":
        return {
          ...state,
          currentQuestion: state.currentQuestion - 1,
        };

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
          notAttemptedNum: state.notAttempted.length,
          markedNum: state.marked.length + 1,
        };

      default:
        return state;
    }
  }

  const [typeOfQuestionRender, setTypeOfQuestionRender] = useState(
    nestedArrConverter(totalNumberOfQuestions),
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
        if (nestedArr[num].length === 10) {
          num++;
        }
      }
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

  function nextQuestionsHandle() {
    setSelectedAnswers([]);
    dispatch({ type: "next" });
    dispatch({
      type: "attempted",
      id: QuestionArr[state.currentQuestion].questionId,
    });


    // else if (sortingBtnState.viewAttempted) {
    //   console.log(state.attempted)

    //   setTypeOfQuestionRender(nestedArrConverter(state.attempted), true);
    //   // for rendering first page
    //   dispatch({ type: "reset" });
    // }
  }

  function testSubmitHandle() {
    localStorage.clear();
  }

  return (
    <>
      <IndividualQuizBoxContext.Provider
        value={{
          selectedAnswers,
          setSelectedAnswers,
          state,
          dispatch,
          QuestionArr,
          totalNumberOfQuestions,
          typeOfQuestionRender,
          setTypeOfQuestionRender,
          nestedArrConverter,
          sortingBtnState,
          setSortingBtnState,
          nextQuestionsHandle,
          testSubmitHandle,
        }}
      >
        {children}
      </IndividualQuizBoxContext.Provider>
    </>
  );
}
