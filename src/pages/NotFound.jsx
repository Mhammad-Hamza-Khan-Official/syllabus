
import { Link } from "react-router-dom";
import Footer from "../component/landingPage/Footer";
import Navbar from "../component/landingPage/Navbar";

export default function NotFound() {
  return <div>
    <Navbar/>
    <div className="flex justify-center items-center flex-col gap-3 h-[50vh]">
        <h1 className="text-3xl font-extrabold">404 Not Found</h1>
        <p></p>
        
         <Link to="/" className="bg-blue-primary text-sm text-on-primary-container  py-stack-sm rounded-full font-medium px-3 cursor-pointer font-label-md">
          Go to Home
        </Link>
    </div>
    <footer className="fixed bottom-0 flex justify-center">
    <Footer/>
    </footer>
  </div>;
}
