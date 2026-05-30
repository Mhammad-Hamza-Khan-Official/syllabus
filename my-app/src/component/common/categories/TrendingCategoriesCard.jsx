
export default function TrendingCategoriesCard() {
  return (
    <div>
      <div className="bg-on-secondary hover:-translate-y-1 border-t-5 transition-all   shadow-md rounded-2xl border-blue-primary p-5 flex flex-col gap-3">
          <h1 className="text-xl font-medium mb-5">MUET Engineering</h1>
          <div className="">
            <div class="flex items-center gap-2 text-on-surface-variant text-md">
              <span class="material-symbols-outlined text-[18px]">quiz</span>
              <span>400 MCQs Available</span>
            </div>
            <div class="flex items-center gap-2 text-on-surface-variant text-md">
              <span class="material-symbols-outlined text-[18px]">group</span>
              <span>12.4k Students</span>
            </div>
          </div>
          <button class="w-full bg-surface-container-highest  font-medium text-blue-primary py-2.5 rounded-xl font-label-md   transition-all mt-2 cursor-pointer  border-blue-primary border-2">
            Start Test
          </button>
        </div>
    </div>
  )
}
