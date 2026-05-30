export default function SuccessStories() {
  return (
    <div className="bg-surface flex justify-center pt-24 pb-18">
      <div className="py-8  md:w-container-max px-8">
        <h1 className="text-4xl font-bold text-center my-8 mb-13">
          Success Stories
        </h1>
        {/* Card Container */}
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10">
          {/* card */}
          <div className="p-10 bg-on-secondary shadow-xl rounded-xl flex flex-col gap-7 relative">
            <div className="flex justify-between">
              {/* logo */}
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAXQ5Z_ylYrhwxGCT9MQIrHoengbVxq4P1g&s"
                  alt=""
                  className="rounded-full w-15"
                />
                <div className="flex flex-col ">
                  <div className="font-medium text-xl">Ahmed Khan</div>
                  <div className="font-body-lg text-md text-on-surface-variant italic leading-relaxed">
                    Future Engineer
                  </div>
                </div>
              </div>
              <span
                className="material-symbols-outlined text-surface-container-high text-8xl absolute top-1 right-1"
                style={{ fontSize: "78px" }}
              >
                format_quote
              </span>
            </div>
            <p className="font-body-lg text-lg text-on-surface-variant italic leading-relaxed">
              "MUETPrep helped me score 90+! The mock tests were incredibly
              accurate to the actual exam difficulty. The analytics helped me
              focus on exactly what I needed to improve."
            </p>
          </div>
          {/* card */}
          <div className="p-10 bg-on-secondary shadow-xl rounded-xl flex flex-col gap-7 relative">
            <div className="flex justify-between">
              {/* logo */}
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAXQ5Z_ylYrhwxGCT9MQIrHoengbVxq4P1g&s"
                  alt=""
                  className="rounded-full w-15"
                />
                <div className="flex flex-col ">
                  <div className="font-medium text-xl">Ahmed Khan</div>
                  <div className="font-body-lg text-md text-on-surface-variant italic leading-relaxed">
                    Future Engineer
                  </div>
                </div>
              </div>
              <span
                className="material-symbols-outlined text-surface-container-high text-8xl absolute top-1 right-1"
                style={{ fontSize: "78px" }}
              >
                format_quote
              </span>
            </div>
            <p className="font-body-lg text-lg text-on-surface-variant italic leading-relaxed">
              "MUETPrep helped me score 90+! The mock tests were incredibly
              accurate to the actual exam difficulty. The analytics helped me
              focus on exactly what I needed to improve."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
