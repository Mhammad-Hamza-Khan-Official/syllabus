import { useReducer, useState } from "react";
import IndividualQuizBoxContext from "./individualQuizBoxContext";

export default function IndividualQuizBoxProvider({ children }) {
  const QuestionArr = [
    {
      questionId: 1,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = x²",
      isMultiSelection: false,
      correctAnswer: [2],
      options: [
        { id: 1, text: "x" },
        { id: 2, text: "2x" },
        { id: 3, text: "x²" },
        { id: 4, text: "2" },
      ],
    },

    {
      questionId: 2,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = x³",
      isMultiSelection: true,
      correctAnswer: [3],
      options: [
        { id: 1, text: "2x" },
        { id: 2, text: "x²" },
        { id: 3, text: "3x²" },
        { id: 4, text: "3x" },
      ],
    },

    {
      questionId: 3,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = sin(x)",
      isMultiSelection: false,
      correctAnswer: [1],
      options: [
        { id: 1, text: "cos(x)" },
        { id: 2, text: "-cos(x)" },
        { id: 3, text: "sin(x)" },
        { id: 4, text: "-sin(x)" },
      ],
    },

    {
      questionId: 4,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = cos(x)",
      isMultiSelection: false,
      correctAnswer: 4,
      options: [
        { id: 1, text: "cos(x)" },
        { id: 2, text: "sin(x)" },
        { id: 3, text: "-sin²(x)" },
        { id: 4, text: "-sin(x)" },
      ],
    },

    {
      questionId: 5,
      question: "Find the derivative of the function with respect to x:",
      expresion: "f(x) = tan(x)",
      isMultiSelection: true,
      correctAnswer: [1, 4, 3],
      options: [
        { id: 1, text: "sec(x)" },
        { id: 2, text: "sec²(x)" },
        { id: 3, text: "cosec²(x)" },
        { id: 4, text: "tan²(x)" },
      ],
    },

    // {
    //   questionId: 6,
    //   question: "Evaluate:",
    //   expresion: "∫ x dx",
    //   isMultiSelection: false,
    //   correctAnswer: 1,
    //   options: [
    //     { id: 1, text: "x²/2 + C" },
    //     { id: 2, text: "x² + C" },
    //     { id: 3, text: "2x + C" },
    //     { id: 4, text: "ln(x)+C" },
    //   ],
    // },

    // {
    //   questionId: 7,
    //   question: "Evaluate:",
    //   expresion: "∫ x² dx",
    //   isMultiSelection: false,
    //   correctAnswer: 3,
    //   options: [
    //     { id: 1, text: "x²/2 + C" },
    //     { id: 2, text: "2x + C" },
    //     { id: 3, text: "x³/3 + C" },
    //     { id: 4, text: "x³ + C" },
    //   ],
    // },

    // {
    //   questionId: 8,
    //   question: "Evaluate:",
    //   expresion: "∫ cos(x) dx",
    //   isMultiSelection: false,
    //   correctAnswer: 2,
    //   options: [
    //     { id: 1, text: "-sin(x)+C" },
    //     { id: 2, text: "sin(x)+C" },
    //     { id: 3, text: "cos(x)+C" },
    //     { id: 4, text: "-cos(x)+C" },
    //   ],
    // },

    // {
    //   questionId: 9,
    //   question: "Evaluate:",
    //   expresion: "∫ sin(x) dx",
    //   isMultiSelection: false,
    //   correctAnswer: 4,
    //   options: [
    //     { id: 1, text: "sin(x)+C" },
    //     { id: 2, text: "cos(x)+C" },
    //     { id: 3, text: "tan(x)+C" },
    //     { id: 4, text: "-cos(x)+C" },
    //   ],
    // },

    // {
    //   questionId: 10,
    //   question: "Find the limit:",
    //   expresion: "lim(x→0) sin(x)/x",
    //   isMultiSelection: false,
    //   correctAnswer: "1",
    //   options: [
    //     { id: 1, text: "1" },
    //     { id: 2, text: "0" },
    //     { id: 3, text: "∞" },
    //     { id: 4, text: "-1" },
    //   ],
    // },

    // {
    //   questionId: 11,
    //   question: "Find the limit:",
    //   expresion: "lim(x→0) (1-cos(x))/x",
    //   isMultiSelection: false,
    //   correctAnswer: 2,
    //   options: [
    //     { id: 1, text: "1" },
    //     { id: 2, text: "0" },
    //     { id: 3, text: "∞" },
    //     { id: 4, text: "-1" },
    //   ],
    // },

    // {
    //   questionId: 12,
    //   question: "Solve:",
    //   expresion: "2x + 5 = 15",
    //   isMultiSelection: false,
    //   correctAnswer: 2,
    //   options: [
    //     { id: 1, text: "3" },
    //     { id: 2, text: "5" },
    //     { id: 3, text: "10" },
    //     { id: 4, text: "7" },
    //   ],
    // },

    // {
    //   questionId: 13,
    //   question: "Solve:",
    //   expresion: "x² = 49",
    //   isMultiSelection: false,
    //   correctAnswer: 3,
    //   options: [
    //     { id: 1, text: "5" },
    //     { id: 2, text: "±5" },
    //     { id: 3, text: "±7" },
    //     { id: 4, text: "7" },
    //   ],
    // },

    // {
    //   questionId: 14,
    //   question: "Find the value:",
    //   expresion: "sin(90°)",
    //   isMultiSelection: false,
    //   correctAnswer: 1,
    //   options: [
    //     { id: 1, text: "1" },
    //     { id: 2, text: "0" },
    //     { id: 3, text: "-1" },
    //     { id: 4, text: "1/2" },
    //   ],
    // },

    // {
    //   questionId: 15,
    //   question: "Find the value:",
    //   expresion: "cos(0°)",
    //   isMultiSelection: false,
    //   correctAnswer: 2,
    //   options: [
    //     { id: 1, text: "0" },
    //     { id: 2, text: "1" },
    //     { id: 3, text: "-1" },
    //     { id: 4, text: "1/2" },
    //   ],
    // },

    // {
    //   questionId: 16,
    //   question: "Find the value:",
    //   expresion: "tan(45°)",
    //   isMultiSelection: false,
    //   correctAnswer: 3,
    //   options: [
    //     { id: 1, text: "0" },
    //     { id: 2, text: "√3" },
    //     { id: 3, text: "1" },
    //     { id: 4, text: "1/√3" },
    //   ],
    // },

    // {
    //   questionId: 17,
    //   question: "Area of a circle is:",
    //   expresion: null,
    //   isMultiSelection: false,
    //   correctAnswer: 1,
    //   options: [
    //     { id: 1, text: "πr²" },
    //     { id: 2, text: "2πr" },
    //     { id: 3, text: "πd" },
    //     { id: 4, text: "r²" },
    //   ],
    // },

    // {
    //   questionId: 18,
    //   question: "Circumference of a circle is:",
    //   expresion: null,
    //   isMultiSelection: false,
    //   correctAnswer: 2,
    //   options: [
    //     { id: 1, text: "πr²" },
    //     { id: 2, text: "2πr" },
    //     { id: 3, text: "πr" },
    //     { id: 4, text: "r²" },
    //   ],
    // },

    // {
    //   questionId: 19,
    //   question: "Pythagoras theorem is:",
    //   expresion: null,
    //   isMultiSelection: false,
    //   correctAnswer: 4,
    //   options: [
    //     { id: 1, text: "a+b=c" },
    //     { id: 2, text: "a²-b²=c²" },
    //     { id: 3, text: "ab=c²" },
    //     { id: 4, text: "a²+b²=c²" },
    //   ],
    // },

    // {
    //   questionId: 20,
    //   question: "Derivative of:",
    //   expresion: "f(x)=eˣ",
    //   isMultiSelection: false,
    //   correctAnswer: 1,
    //   options: [
    //     { id: 1, text: "eˣ" },
    //     { id: 2, text: "xeˣ" },
    //     { id: 3, text: "1/eˣ" },
    //     { id: 4, text: "0" },
    //   ],
    // },

    // 21 - 50

    // ...Array.from({ length: 30 }, (_, i) => ({
    //   questionId: i + 21,
    //   question: "Mathematics Multiple Choice Question",
    //   expresion: null,
    //   isMultiSelection: false,
    //   correctAnswer: (i % 4) + 1,
    //   options: [
    //     { id: 1, text: "Option A" },
    //     { id: 2, text: "Option B" },
    //     { id: 3, text: "Option C" },
    //     { id: 4, text: "Option D" },
    //   ],
  //   })
  // ),
  ];

  

  const [timerState , setTimerState] = useState({
    isStart : true,
    isPause : false,
    timerLimit : 1,
    totalTimeInSec : 0
  })
  const [nagetiveMarking, positiveMarking] = [-1, +4 ];
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
          //For remove attemted question
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
          notAttemptedNum: state.notAttempted.length - 1,
          markedNum: state.marked.length + 1,
        };

      case "navigateQuestion":
        return {
          ...state,
          currentQuestion: action.navigateNum - 1,
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
  }

  function ScoreCalculator() {
    const CorrectAnswers = [];
    const WrongAnswers = [];
    for (const key in localStorage) {
      let isCorrect = false;

      //Prevent to pass null value
      if (localStorage.getItem(key) === null) continue;
      //split for converting into arr
      const userAnswers = localStorage.getItem([key]).split(" ");
      let correctAns = QuestionArr[key - 1].correctAnswer;

      // Convert  into Arr
      //its mean it is it is number
      if (!isNaN(correctAns)) {
        correctAns = correctAns.toString().split(" ");
      }
      //its mean its not an array and number - Only String
      else if (isNaN(correctAns) && !Array.isArray(correctAns)) {
        correctAns = correctAns.split(" ");
      }


      for (const correctValue of correctAns) {
        for (const userValue of userAnswers) {
          if (correctValue == userValue) {
            isCorrect = true
            break;
          }else{
            isCorrect = false
          }
        }
      }

      if (isCorrect) {
        CorrectAnswers.push(key);
      } else if (!isCorrect) {
        WrongAnswers.push(key);
      }
    }

    const positiveScore = CorrectAnswers.length * positiveMarking
    const nagetiveScore = WrongAnswers.length * nagetiveMarking
    let Score = positiveScore + nagetiveMarking


    return {
      CorrectAnswers,
      WrongAnswers,
      positiveScore,
      nagetiveScore,
      Score
    };
  }


  const Score = []
  function testSubmitHandle() {
    
    Score.push(ScoreCalculator())
    console.log(Score)
    setTimerState({
      ...timerState,
      isStart : false
    })
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
          nagetiveMarking,
          positiveMarking,
          Score : Score[0],
          timerState,
          setTimerState ,       
        }}
      >
        {children}
      </IndividualQuizBoxContext.Provider>
    </>
  );
}
