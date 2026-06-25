import RecentTestResult from "./RecentTestResult";

export default function RecentTestList() {
  return (
    <div class="col-span-12 lg:col-span-8 bg-white p-8 rounded-2xl soft-xl border border-surface-variant/20">
      <div class="flex justify-between items-center mb-6">
        <h3 class="font-title-lg text-title-lg text-on-surface">
          Recent Tests
        </h3>
        <button class="text-primary font-label-md text-label-md hover:underline">
          View All
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="text-label-sm text-secondary uppercase tracking-widest border-b border-surface-variant/30">
              <th class="pb-4 font-semibold">Test Name</th>
              <th class="pb-4 font-semibold">Date</th>
              <th class="pb-4 font-semibold">Score</th>
              <th class="pb-4 font-semibold">Status</th>
              <th class="pb-4"></th>
            </tr>
          </thead>
          <tbody class="text-label-md">
            <RecentTestResult attemptQuestion={88}/>
            <RecentTestResult/>
            <RecentTestResult/>
            <RecentTestResult attemptQuestion={60}/>
          </tbody>
        </table>
      </div>
    </div>
  );
}
