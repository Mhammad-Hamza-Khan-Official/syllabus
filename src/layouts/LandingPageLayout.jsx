
import Cta from "../component/landingPage/Cta";
import FeatureStript from "../component/landingPage/FeatureStript";
import Footer from "../component/landingPage/Footer";
import Hero from "../component/landingPage/Hero";
import Navbar from "../component/landingPage/Navbar";
import RatingStrip from "../component/landingPage/RatingStrip";
import Subjects from "../component/landingPage/Subjects";
import SuccessStories from "../component/landingPage/SuccessStories";

export default function LandingPageLayout() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RatingStrip/>
      <FeatureStript/>
      <Subjects/>
      <SuccessStories/>
      <Cta/>
      <Footer/>
    </div>
  )
}
