import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import RatingStrip from "../component/RatingStrip";
import Feature from "../component/Feature"
import Subjects from "../component/Subjects"
import SuccessStories from "../component/SuccessStories";
import Faqs from "../component/Faqs";
import Cta from "../component/Cta";
import Footer from "../component/Footer";
export default function LangingPage() {
  return (
    <div>
      <Navbar />
              <Hero />
              <RatingStrip />
              <Feature />
              <Subjects />
              <SuccessStories />
              <Faqs />
              <Cta />
              <Footer />
    </div>
  )
}
