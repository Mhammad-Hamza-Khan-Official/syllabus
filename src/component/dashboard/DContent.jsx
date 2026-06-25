import Analytics from "./Analytics";
import Card from "./Card";
import MasteryFeild from "./MasteryFeild";
import RecentTestList from "./RecentTestLIst";

export default function DContent({ mt = 60 }) {
  return (
    <div>
      <div
        className="p-4 sm:ml-64 bg-surface-container-low"
        style={{ marginTop: mt }}
      >
        <div className="p-4  rounded-base">
          <div className="p-5 px-9 py-9 rounded-2xl text-on-secondary bg-blue-primary/90  rounded-base bg-neutral-secondary-soft mb-4 flex items-center justify-between">
            <div className="space-y-3">
              <h1 className="font-bold text-4xl ">Welcome back, Ahmed!</h1>
              <p className="text-md w-150 mt-5">
                Your exam prep is 68% complete. Keep the momentum going and ace
                your upcoming mocks.
              </p>
              <button
                type="button"
                className=" flex items-center gap-2 text-blue-primary bg-on-secondary bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs  leading-5 text-md rounded-xl  px-6 py-2.5 focus:outline-none font-medium hover:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">bolt</span>
                Quick Start Mock Test
              </button>
            </div>
            <div className="w-48 h-48 rounded-xl overflow-hidden">
              <img
                alt="Student Illustration"
                class="w-full h-full object-contain mix-blend-luminosity"
                data-alt="A clean, minimalist 3D illustration of a student surrounded by floating academic icons like graduation caps, pencils, and digital graphs. The style is modern corporate with a vibrant blue and white color scheme. The lighting is flat and bright, designed to feel breathable and professional against a dark navy background."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxHUloc2ENQyc3ggu5iohSIxLS6J1Eq_StHwy02AKckFXO_kTCtSTUW7WiZjZtRaywhCI96e1HaqeuHDV9H03X-wmyhuikKIoPWRDbwosGLHJg8zErpiSoaID4LhHVA8MaZyXBkjCacly-9EExMI2BqUGSjwS2zhxESNrKlR-6PKWY965Bmthl2yYWOevumT81qyg-YaS5vWbBKIn5rSeEDTQsy5DfcIPExP799i6CZeZvVxk_12Fl5Vs_ZIwXEPWrZsVPdgDzAuhh"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <Card
              icon="analytics"
              text="average score"
              iconColor="#0c0859"
              value="85%"
              subValue="2.5%"
            />
            <Card
              icon="task_alt"
              iconColor="green"
              text="Mock Test Taken"
              value="18/20"
            />
            <Card icon="timer" iconColor="red" text="study time" value="24h" />
            <Card
              icon="star"
              iconColor="#0c0859"
              text="global rank"
              value="#45"
            />
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-4">
            <div className="space-y-4">
              <Analytics />
              <RecentTestList/>
              
            </div>
            <div className="">
              <div className="flex  flex-col rounded-2xl p-8 bg-on-secondary shadow-sm h-auto rounded-base bg-neutral-secondary-soft">
                <h3 className="capitalize text-2xl font-medium mb-2">
                  subject mastery
                </h3>
                <div className="flex flex-col justify-between h-full pt-2 px-1.5 mb-2  gap-1">
                  <MasteryFeild />
                  <MasteryFeild value="50" subject="physics" />
                  <MasteryFeild />
                  <MasteryFeild value="60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
