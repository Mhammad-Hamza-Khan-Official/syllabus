import { NavLink } from "react-router-dom";



export default function Navbar(props) {
  const {position = "fixed"} = props
  const logoSrc = ""; // Add logo image path here when available
  return (
    <div >
      <div className="h-[70px] bg-on-primary flex items-center justify-center">


      <div className={`flex justify-center py-stack-sm ${position}  z-50 w-screen top-0 bg-on-primary/80 left-0 right-0 px-8`}>
        <div className="w-container-max flex items-center justify-between py-2 ">

        <div className="logo flex text-primary">
          {logoSrc && <img src={logoSrc} alt="" />}
          <h1 className="font-bold text-blue-primary   font-title-lg text-xl md:text-2xl ">MUETPrep</h1>
        </div>
        <div className="links"> 
          <ul className="md:flex text-md font-medium   gap-stack-md hidden">
            <li className="cursor-pointer hover:text-blue-primary">Home</li>
            <li className="cursor-pointer hover:text-blue-primary">Subject</li>
            <li className="cursor-pointer hover:text-blue-primary">Feature</li>
            <li className="cursor-pointer hover:text-blue-primary">FAQ</li>
          </ul>
        </div>
        <NavLink to="/login">

        <button className="bg-blue-primary text-sm text-on-primary-container  py-stack-sm rounded-full font-medium px-3 cursor-pointer font-label-md">
          Get Started
        </button>
        </NavLink>
        </div>
      </div>
            </div>
    </div>
  );
}
