import { BrowserRouter, Routes, Route } from "react-router-dom";
import LangingPage from "./pages/LangingPage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LangingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        {/* <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/individualQuiz" element={<IndividualQuiz/>}/>
        <Route path="/individualQuizReview" element={<IndividualQuizReview/>}/>
        <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App