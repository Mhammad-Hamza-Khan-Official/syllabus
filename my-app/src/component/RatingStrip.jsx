
export default function RatingStrip() {
  return (
    <div className="flex justify-center">
      <div className="bg-surface flex  px-8 md:w-container-max w-full">\
        <div className="grid md:grid-cols-3 grid-cols-1   w-full  gap-4 ">

            <div className="text-center relative bottom-6 shadow-xl bg-on-secondary rounded-xl py-9">
                <h1 className="text-5xl font-medium mb-2">10K+</h1>
                <p>Active Student</p>
            </div>

            <div className="text-center relative bottom-6 shadow-xl bg-on-secondary rounded-xl py-9 ">
                <h1 className="text-5xl font-medium  mb-2">50+</h1>
                <p>Mock Test</p>
            </div>

            <div className="text-center relative bottom-6 shadow-xl bg-on-secondary rounded-xl py-9">
                <h1 className="text-5xl font-medium mb-2 ">10K+</h1>
                <p>Active Student</p>
            </div>


        </div>
      </div>
    </div>
  )
}
