import Navbar from "../component/landingPage/Navbar";
import LoginContent from "../component/Login/LoginContent";
import LoginFooter from "../component/Login/LoginFooter";


export default function LoginLayout() {
  return (
    <div>
      <section className="bg-surface-container-highest">
        <Navbar position="static" />
        <LoginContent/>
        <LoginFooter/>
      </section>
    </div>
  )
}
