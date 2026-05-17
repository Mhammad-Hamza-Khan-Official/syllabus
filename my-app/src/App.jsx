import { BrowserRouter, Routes, Route } from "react-router-dom";
import LangingPage from "./MainComponent/LangingPage";
import Login from "./MainComponent/Login";
import NotFound from "./MainComponent/NotFound";
import Registration from "./MainComponent/Registration";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LangingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App