import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import RatingStrip from "./component/RatingStrip";
import Feature from "./component/Feature"
import Subjects from "./component/Subjects"
import SuccessStories from "./component/SuccessStories";
import Faqs from "./component/Faqs";



function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <RatingStrip/>
      <Feature/>
      <Subjects/>
      <SuccessStories/>
      <Faqs/>
    </div> 
  )
}

export default App