  
  
  const getResult = () => {
    if (localStorage.getItem("CorrectAns") === null) return null;
    if (localStorage.getItem("WrongAns") === null) return null;
    if (localStorage.getItem("Score") === null) return null;
    if (localStorage.getItem("nagetiveScore") === null) return null;
    if (localStorage.getItem("positiveScore") === null) return null;
    if (localStorage.getItem("marked") === null) return null;

    // const path = window.location.pathname

    // if (path !== "/individualQuizReview") return null;

    const currentDate = new Date()
    console.log("currrent Date :",currentDate)
    const correctNum =
      localStorage
        .getItem("CorrectAns")
        .split(" ")
        .map((e) => JSON.parse(e)).length || 0;
    const wrongNum =
      localStorage
        .getItem("WrongAns")
        .split(" ")
        .map((e) => JSON.parse(e)).length || 0;

    return {
      correctAns: localStorage
        .getItem("CorrectAns")
        .split(" ")
        .map((e) => JSON.parse(e)) || [""],
      wrongAns: localStorage
        .getItem("WrongAns")
        .split(" ")
        .map((e) => JSON.parse(e)) || [""],
      score: Number(localStorage.getItem("Score")),
      nagetiveScore: Number(localStorage.getItem("nagetiveScore")),
      positiveScore: Number(localStorage.getItem("positiveScore")),
      numberOfCorrect: correctNum,
      numberOfWrong: wrongNum,
      marked : localStorage.getItem("marked").split(" ").map((e)=>Number(e)),
      date : currentDate
    };
  };

  export default getResult;