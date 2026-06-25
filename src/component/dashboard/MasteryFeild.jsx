export default function MasteryFeild({ subject = "math", value = "70" }) {
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
