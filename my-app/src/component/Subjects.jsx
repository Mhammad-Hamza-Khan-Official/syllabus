export default function Subjects() {
  return (
    <div className="bg-surface-container-low flex justify-center">
      <div className=" py-18 md:w-container-max px-8">
        <div className="flex justify-between py-18 flex-wrap gap-5 ">
          <div className="leading-relaxed">
            <h1 className="text-4xl font-medium">Comprehensive Subjects</h1>
            <p className="text-secondary">
              Deep dive into the core modules of the MUET entry test.
            </p>
          </div>
          <div className="flex items-center gap-2 hover:-translate-x-2 transition-all  cursor-pointer">
            <span className="text-blue-primary font-medium">
              View All Modules
            </span>
            <span className="material-symbols-outlined text-blue-primary">
              arrow_forward
            </span>
          </div>
        </div>

        <div className="  grid grid-cols-1   sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* card */}

          <div className="flex flex-col gap-3 bg-on-secondary items-center p-2.5 py-5 rounded-xl  shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
            <span
              className="material-symbols-outlined text-blue-primary p-2.5"
              style={{ fontSize: "40px" }}
            >
              function
            </span>
            <h3 className="text-3xl ">Math</h3>
            {/* progress bar */}
            <div class="w-[90%]  rounded-full  bg-surface-container-low ">
              <div class="bg-blue-primary h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-secondary">150+ Questions</p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 bg-on-secondary items-center p-2.5 py-5 rounded-xl  shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
            <span
              className="material-symbols-outlined text-blue-primary p-2.5"
              style={{ fontSize: "40px" }}
            >
              function
            </span>
            <h3 className="text-3xl ">Math</h3>
            {/* progress bar */}
            <div class="w-[90%] bg-neutral-quaternary rounded-full  bg-surface-container-low ">
              <div class="bg-blue-primary h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-secondary">150+ Questions</p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 bg-on-secondary items-center p-2.5 py-5 rounded-xl  shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
            <span
              className="material-symbols-outlined text-blue-primary p-2.5"
              style={{ fontSize: "40px" }}
            >
              function
            </span>
            <h3 className="text-3xl ">Math</h3>
            {/* progress bar */}
            <div class="w-[90%] bg-neutral-quaternary rounded-full  bg-surface-container-low ">
              <div class="bg-blue-primary h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-secondary"> 150+ Questions</p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 bg-on-secondary items-center p-2.5 py-5 rounded-xl  shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
            <span
              className="material-symbols-outlined text-blue-primary p-2.5"
              style={{ fontSize: "40px" }}
            >
              function
            </span>
            <h3 className="text-3xl ">Math</h3>
            {/* progress bar */}
            <div class="w-[90%]  rounded-full  bg-surface-container-low ">
              <div class="bg-blue-primary h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-secondary">150+ Questions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
