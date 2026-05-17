export default function Feature() {
  return (
    <div className="bg-surface flex justify-center px-8">
      <div className="md:w-container-max text-center py-8 pt-56 flex flex-col justify-center">
        <h1 className="sm:text-4xl text-4xl  font-bold">Elevate Your Preparation</h1>
        <p className=" sm:text-lg text-md mt-4">
          Professional tools designed for your academic success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center text-left py-10 gap-2">
            {/* Card */}
          <div class="   flex flex-col gap-2  p-8  rounded-xl  bg-on-secondary shadow-xl">
            <span className="material-symbols-outlined text-blue-primary">
              timer
            </span>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">
                Real Exam Environment
              </h5>
            </a>
            <p class="mb-3 text-body">
              Simulate the actual MUET testing experience with timed sections
              and authentic question formats.
            </p>
          </div>
            {/* Card */}
          <div class="   flex flex-col gap-2  p-8  rounded-xl  bg-on-secondary shadow-xl">
            <span className="material-symbols-outlined text-blue-primary">
              timer
            </span>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">
                Real Exam Environment
              </h5>
            </a>
            <p class="mb-3 text-body">
              Simulate the actual MUET testing experience with timed sections
              and authentic question formats.
            </p>
          </div>
            {/* Card */}
          <div class="   flex flex-col gap-2  p-8  rounded-xl  bg-on-secondary shadow-xl">
            <span className="material-symbols-outlined text-blue-primary">
              timer
            </span>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">
                Real Exam Environment
              </h5>
            </a>
            <p class="mb-3 text-body">
              Simulate the actual MUET testing experience with timed sections
              and authentic question formats.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
