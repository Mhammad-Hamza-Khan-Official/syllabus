
export default function IndividualQuizNavbar() {
  return (
    <>
      <nav className="bg-surface-container-high flex justify-between items-center w-screen px-8 py-4 mb-3 border-b border-outline-variant">
        {/* Title */}
        <div className="text-xl font-medium capitalize">University Entrance test</div>
        <div className="flex items-center gap-2">
          {/* timer */}
          <div className="timer bg-error-container flex items-center gap-1.5 px-2 rounded-2xl">
            <span className="material-outlined-symbols text-error">timer</span>
            <div className="text-error">
            <span>01</span>:<span>03</span>:<span>40</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

