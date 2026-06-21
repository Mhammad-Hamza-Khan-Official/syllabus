import Navbar from "../component/landingPage/Navbar";
import LoginFooter from "../component/Login/LoginFooter";
import RegistrationContent from "../component/Registration/RegistrationContent";

export default function RegistrationLayout() {
  return (
    <>
      <div className="">
        <Navbar position="static" />
      </div>

      <section className="bg-surface-container-highest pt-4">
        <RegistrationContent/>
        <LoginFooter />
      </section>
    </>
  );
}
