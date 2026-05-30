function Card({
  icon = "home",
  iconColor = "blue",
  value = "2.5%",
  text = "Average",
  subValue = "",
}) {
  return (
    <div>
      {/* Card */}
      <div class="bg-on-secondary shadow-sm shadow-surface-dim p-6 rounded-2xl soft-xl-shadow border border-outline-variant/30 flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <span class="p-2 bg-surface-variant text-primary rounded-full">
            <span
              class="material-symbols-outlined align-middle"
              style={{ color: iconColor }}
              data-icon={icon}
            >
              {icon}
            </span>
          </span>
          <span class="text-md font-medium font-label-sm text-blue-primary">
            {subValue}
          </span>
        </div>
        <div>
          <p class="text-4xl font-bold text-on-surface">{value}</p>
          <p class="text-label-sm capitalize font-label-md text-secondary ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function MasteryFeild({ subject = "math", value = "70" }) {
  if (value >= "70") {
    return (
      <div className="flex flex-col gap-1 w-full   ">
        <div className="flex items-center justify-between ">
          <p className="text-lg font-medium capitalize">{subject}</p>
          <p className="text-blue-primary font-bold text-xs 4xl:text-lg">
            {value}%
          </p>
        </div>
        <div className="  bg-surface-container-high overflow-hidden rounded-2xl flex">
          <div
            className="bg-blue-primary h-3  "
            style={{ width: value + "%" }}
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col gap-1 w-full   ">
          <div className="flex items-center justify-between ">
            <p className="text-lg font-medium capitalize">{subject}</p>
            <p className="text-error font-bold text-xs 4xl:text-lg">{value}%</p>
          </div>
          <div className="  bg-surface-container-high overflow-hidden rounded-2xl flex">
            <div
              className="bg-error h-3  "
              style={{ width: value + "%" }}
            ></div>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="material-symbols-outlined text-error">report</span>
            <p className="text-error font-medium">Need to Attention</p>
          </div>
        </div>
      </div>
    );
  }
}

function Analytics() {
  return (
    <div className="">
      <div className="lg:col-span-2 h-full flex flex-col justify-around py-4   shadow-md bg-surface px-8 rounded-2xl soft-xl-shadow border border-outline-variant/30">
        <div className="flex items-center justify-between mb-8">
          <h3 class="text-title-lg font-title-lg text-on-surface">
            Performance Over Time
          </h3>
          <div class="flex gap-2">
            <button class="px-3 py-1 text-label-sm font-label-sm bg-primary/10 text-primary rounded-md">
              Weekly
            </button>
            <button class="px-3 py-1 text-label-sm font-label-sm text-outline">
              Monthly
            </button>
          </div>
        </div>
        <div className="relative h-64 w-full bg-surface-container-lowest rounded-xl flex items-end justify-between px-8 pb-4">
          <div className="w-12 bg-blue-primary rounded-t-lg h-[40%]"></div>
          <div className="w-12 bg-blue-primary  rounded-t-lg h-[55%]"></div>
          <div className="w-12 bg-blue-primary  rounded-t-lg h-[45%]"></div>
          <div className="w-12 bg-blue-primary rounded-t-lg h-[70%]"></div>
          <div className="w-12 bg-blue-primary rounded-t-lg h-[85%]"></div>
          <div className="w-12 bg-blue-primary rounded-t-lg h-[95%]"></div>
          <div className="absolute inset-x-8 bottom-0 flex justify-between pt-2 border-t border-outline-variant/30  text-label-sm font-label-sm text-outline">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
          <div className="absolute top-1/5 left-0 w-full h-px bg-primary/20 border-dashed border-t"></div>
        </div>
      </div>
    </div>
  );
}

function RecentTestResult({title = "Mock Test",date,totalQestion = "100" ,attemptQuestion = "88",result = "passed"}) {
  function getDate(){
   return new Date().toLocaleDateString("en-US",{
   day:"numeric",
   month: "short",
   year:"numeric"
  })}
   return ( <tr class="hover:bg-surface-container-low/30">
                        <td class="py-4 font-label-md text-label-md text-on-surface">
                          {title}
                        </td>
                        <td class="py-4 font-body-md text-label-md text-on-surface-variant">
                         {date || getDate()}
                         
                        </td>
                        <td class="py-4 font-label-md text-label-md text-primary font-bold">
                          {attemptQuestion}/{totalQestion}
                        </td>
                        <td class="py-4">
                          <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {result}
                          </span>
                        </td>
                      </tr>
  )
}

function RecentTestList() {
  return ( 
    <div class="bg-surface-container-lowest p-stack-lg rounded-2xl soft-xl-shadow">
                <div class="flex justify-between items-center mb-stack-lg">
                  <h4 class="font-title-lg text-title-lg">Recent Tests</h4>
                  <a class="text-primary font-label-md text-label-md" href="#">
                    See all
                  </a>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr class="text-left border-b border-outline-variant">
                        <th class="pb-3 font-label-sm text-label-sm text-on-surface-variant">
                          Test Name
                        </th>
                        <th class="pb-3 font-label-sm text-label-sm text-on-surface-variant">
                          Date
                        </th>
                        <th class="pb-3 font-label-sm text-label-sm text-on-surface-variant">
                          Score
                        </th>
                        <th class="pb-3 font-label-sm text-label-sm text-on-surface-variant">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-outline-variant/30">
                      
                     <RecentTestResult date={"oct 05 ,202"}/>
                     <RecentTestResult/>
                     <RecentTestResult/>
                     
                    </tbody>
                  </table>
                </div>
              </div>
  )
  
}

export default function DContent({ mt = 60 }) {
  return (
    <div>
      <div
        className="p-4 sm:ml-64 bg-surface-container-low"
        style={{ marginTop: mt }}
      >
        <div className="p-4 border-2 border-default border-dashed rounded-base">
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
          <div className="flex items-center justify-center bg-green-600 h-48 rounded-base bg-neutral-secondary-soft mb-4">
            <p className="text-fg-disabled">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center bg-yellow-700 h-24 rounded-base bg-neutral-secondary-soft">
              <p className="text-fg-disabled">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center bg-yellow-700 h-24 rounded-base bg-neutral-secondary-soft">
              <p className="text-fg-disabled">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center bg-yellow-700 h-24 rounded-base bg-neutral-secondary-soft">
              <p className="text-fg-disabled">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center bg-yellow-700 h-24 rounded-base bg-neutral-secondary-soft">
              <p className="text-fg-disabled">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
