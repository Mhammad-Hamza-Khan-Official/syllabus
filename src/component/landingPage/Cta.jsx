
export default function Cta() {
  return (
    <div className="bg-surface flex justify-center py-22  ">
      <div className="md:w-container-max mx-8 py-12 rounded-2xl bg-blue-primary flex flex-col gap-4 justify-center items-center text-center" >
        <h2 className="text-on-secondary font-medium sm:text-4xl text-2xl px-2">

            Ready to secure your future? 
        </h2>
        <p className="text-on-secondary opacity-90 font-medium sm:text-xl text-md sm:px-3 xl:px-76 px-4 pt-2 text-center   ">

Join thousands of students who have already started their journey with MUETPrep. Start your free mock test today.
        </p>
        <button className="sm:text-xl text-md font-medium cursor-pointer text-on-secondary bg-on-background py-2 px-4 sm:py-4 sm:px-8 rounded-xl" >Get Started Now</button>
      </div>
    </div>
  )
}
