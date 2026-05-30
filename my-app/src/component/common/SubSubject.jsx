
export default function SubSubject(props) {
    const {subject = "Math",question = "Question 130+",level = "30"} = props
  return (

          <div className="flex flex-col gap-3 bg-on-secondary items-center p-2.5 py-5 rounded-xl  shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
            <span
              className="material-symbols-outlined  text-blue-primary p-2.5"
              style={{ fontSize: "40px" }}
            >
              function
            </span>
            <h3 className="md:text-3xl text-2xl font-medium capitalize">{subject}</h3>
            {/* progress bar */}
            <div className="w-[90%] rounded-full bg-surface-container-low">
              <div className={`bg-blue-primary h-2 rounded-full`} style={{ width: `${level}%` }}></div>
            </div>
            <p className="text-black/85 md:text-sm text-xs capitalize">{question}</p>
          </div>

  )
}
