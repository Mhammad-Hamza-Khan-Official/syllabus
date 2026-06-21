function NavBtn({text = "button"}) {
  return (
    <div>
      <button className="p-1 px-2  cursor-pointer  rounded-full bg-surface-container-highest">
        <p className="">{text}</p>
      </button>
    </div>
  );
}
export default function SelectionStrip() {
  return (
    <div>
      <div className="  rounded-2xl  bg-on-secondary shadow-md  rounded-base bg-neutral-secondary-soft mb-4 flex flex-col p-4">
        {/* Selection */}
        <div className="grid grid-cols-1 p-3 sm:grid-cols-4 gap-x-2">
          <div className="flex flex-col  rounded-xl  gap-2">
            <label htmlFor="examtype">Exam Type</label>
            <select
              name=""   
              id="examtype"
              className="bg-surface-container-high focus:outline  py-2 px-4 rounded-xl text-lg "
            >
              <option value="" className="capitalize">
                Select Exam Type
              </option>
              <option value="ECAT">ECAT</option>
              <option value="">UN</option>
              <option value="">Engenieer</option>
              <option value="">Doctor</option>
            </select>
          </div>
          <div
            className="flex flex-col  rounded-xl  gap-2"
          >
            <label htmlFor="examtype">Exam Type</label>
            <select
              name=""
              id="examtype"
              className="bg-surface-container-high focus:outline  py-2 px-4 rounded-xl text-lg "
            >
              <option value="" className="capitalize">
                Select Exam Type
              </option>
              <option value="ECAT">ECAT</option>
              <option value="">UN</option>
              <option value="">Engenieer</option>
              <option value="">Doctor</option>
            </select>
          </div>
          <div className="flex flex-col  rounded-xl  gap-2">
            <label htmlFor="examtype">Exam Type</label>
            <select
              name=""
              id="examtype"
              className="bg-surface-container-high focus:outline  py-2 px-4 rounded-xl text-lg "
            >
              <option value="" className="capitalize">
                Select Exam Type
              </option>
              <option value="ECAT">ECAT</option>
              <option value="">UN</option>
              <option value="">Engenieer</option>
              <option value="">Doctor</option>
            </select>
          </div>
          <div className="flex flex-col  rounded-xl  gap-2">
            <label htmlFor="examtype">Exam Type</label>
            <select
              name=""
              id="examtype"
              className="bg-surface-container-high focus:outline  py-2 px-4 rounded-xl text-lg "
            >
              <option value="" className="capitalize">
                Select Exam Type
              </option>
              <option value="ECAT">ECAT</option>
              <option value="">UN</option>
              <option value="">Engenieer</option>
              <option value="">Doctor</option>
            </select>
          </div>
        </div>
        {/* btns */}
        <div className="flex flex-wrap mt-3 pb-3 px-4 gap-4">
          <NavBtn text="Quick Filter"/>
          <NavBtn/>
          <NavBtn/>
          <NavBtn/>
        </div>
      </div>
    </div>
  );
}
