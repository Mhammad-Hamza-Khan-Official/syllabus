import heroImg from "../../assets/hero.png";
export default function Hero() {
  return (
    <>
      <div
        className={`bg-on-background text-white flex justify-center align-center h-screen py-24 px-8`}
      >
        <div className="md:w-container-max  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="flex items-center flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl leading-tight sm:text-5xl font-bold ">
              Prepare for MUET Entry Test Like Real Exam
            </h1>
            <p className="text-surface-variant text-sm md:text-lg font-light  text-balance">
              Master the Mehran University Entrance Test with our comprehensive
              mock exam environment and expert-led subject modules.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2   w-full  grid-cols-1 self-start gap-2">
              <button className="bg-blue-primary md:text-2xl  text-on-primary-container px-8 py-4 rounded-xl  cursor-pointer">
                Start Moch Test
              </button>
              <button className="border border-surface-variant md:text-xl  text-surface px-8 py-4 rounded-xl  hover:bg-surface/10 transition-colors cursor-pointer">
                Explore Subjects
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={heroImg}
              alt="img"
              className="rounded-3xl h-57 md:h-100  w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
