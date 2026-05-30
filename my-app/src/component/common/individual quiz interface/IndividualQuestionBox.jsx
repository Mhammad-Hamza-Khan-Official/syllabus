import { useState } from "react";

export default function IndividualQuestionBox(props) {
  const {
    QusetionNum = "1",
    Question = "Find the derivative of the function with respect of x :",
    Expresion = "f(x) = sin(x) + cos(x)",
    ExpresionBox = true,
    MultipleSelections = false,
    increaseScore = "+4",
    decreaseScore = "-1",
    options = [
    {
      id: 1,
      text: "cos(x) - sin(x)",
    },
    {
      id: 2,
      text: "cos(x) + sin(x)",
    },
    {
      id: 3,
      text: "sin(x) - cos(x)",
    },
    {
      id: 4,
      text: "-sin(x) - cos(x)",
    },
  ]
  } = props;


  const [selectedAnswers,setSelectedAnswers] = useState([])

  const handleSelect = (id)=>{
    if (MultipleSelections) {
      setSelectedAnswers((prev)=>{
        if (prev.includes(id)) {
          return prev.filter((item)=>item !== id)
        }
        //Add new selection
        return [...prev,id]
      })
    }
    else{
      setSelectedAnswers([id])
    }
  }

  return (
    <>
      <div className="rounded-4xl w-full bg-on-secondary p-8 space-y-2 shadow-xl">
        <div className="flex justify-between">
          <div className="px-2 bg-surface-container-high text-center rounded-2xl">
            Mathametics Section
          </div>
          <div className="">
            Marks : {increaseScore} / {decreaseScore}
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-10">Question {QusetionNum}</h1>
        {/* Question */}
        <p className="first-letter:uppercase text-xl  font-semibold">
          {Question}
        </p>
        {/* Expresion Box */}
        {ExpresionBox ? (
          <div className="my-6 p-5 bg-surface-container-low rounded-xl border border-outline-variant">
            <code className="text-4xl font-bold text-blue-primary">
              {Expresion}
            </code>
          </div>
        ) : null}
        {/* Ans */}
        <div className=" px-2 mt-3">

          <ol className="list-[upper-alpha] space-y-4">
          {options.map((option) => {
            const {id ,text} = option
              const isSelected = selectedAnswers.includes(id)
            return (
              <label className={`
                flex items-center p-4 border rounded-xl
                cursor-pointer transition-all group

                ${
                  isSelected
                    ? "bg-primary-fixed border-primary text-on-primary-fixed-variant"
                    : "border-outline-variant hover:bg-surface-container-high"
                }
              `}
              key={id}>
                <input
                  className="w-5 h-5 text-primary border-outline focus:ring-primary"
                  name="math_answer"
                  type={(MultipleSelections) ?"checkbox":"radio"}
                  onChange={() => handleSelect(id)}
                />
                <span className="ml-7  font-semibold text-xl group-hover:text-primary transition-colors">
                  <li>{text}</li> 
                </span>
              </label>
            );
          })}
          </ol>
        </div>
      </div>
    </>
  );
}
