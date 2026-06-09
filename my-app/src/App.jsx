import { BrowserRouter, Routes, Route } from "react-router-dom";
import LangingPage from "./component/pages/LangingPage"
import Login from "./component/pages/Login";
import Registration from "./component/pages/Registration";
import NotFound from "./component/pages/NotFound";
import DashBoard from "./component/pages/DashBoard";
import Categories from "./component/pages/Categories";
import IndividualQuiz from "./component/pages/IndividualQuiz";
import IndividualQuizReview from "./component/pages/IndividualQuizReview";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LangingPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/individualQuiz" element={<IndividualQuiz/>}/>
        <Route path="/individualQuizReview" element={<IndividualQuizReview/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App