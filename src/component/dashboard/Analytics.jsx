

export default function Analytics() {
  return (
    <div className="">
      <div className="lg:col-span-2 h-full flex flex-col justify-around py-4   shadow-md bg-surface px-8 rounded-2xl soft-xl-shadow border border-outline-variant/30">
        <div className="flex items-center justify-between mb-8">
          <h3 class="text-title-lg font-title-lg text-on-surface">
            Performance Over Time
          </h3>
          <div class="flex gap-2">
            <button class="px-3 py-1 text-label-sm font-label-sm bg-primary/10 text-primary rounded-md">
              Weekly
            </button>
            <button class="px-3 py-1 text-label-sm font-label-sm text-outline">
              Monthly
            </button>
          </div>
        </div>
        <div className="relative h-64 w-full bg-surface-container-lowest rounded-xl flex items-end justify-between px-8 pb-4">
          <div className="w-12 bg-blue-primary rounded-t-lg h-[40%]"></div>
          <div className="w-12 bg-blue-primary  rounded-t-lg h-[55%]"></div>
          <div className="w-12 bg-blue-primary  rounded-t-lg h-[45%]"></div>
          <div className="w-12 bg-blue-primary rounded-t-lg h-[70%]"></div>
          <div className="w-12 bg-blue-primary rounded-t-lg h-[85%]"></div>
          <div className="w-12 bg-blue-primary rounded-t-lg h-[95%]"></div>
          <div className="absolute inset-x-8 bottom-0 flex justify-between pt-2 border-t border-outline-variant/30  text-label-sm font-label-sm text-outline">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
          <div className="absolute top-1/5 left-0 w-full h-px bg-primary/20 border-dashed border-t"></div>
        </div>
      </div>
    </div>
  );
}
