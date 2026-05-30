import Navbar from "../common/Navbar"
import Hero from "../common/Hero"
import RatingStrip from "../common/RatingStrip";
import Feature from "../common/Feature"
import Subjects from "../common/Subjects"
import SuccessStories from "../common/SuccessStories";
import Faqs from "../common/Faqs";
import Cta from "../common/Cta";
import Footer from "../common/Footer";

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
