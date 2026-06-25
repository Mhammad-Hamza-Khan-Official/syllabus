export default function RecentTestResult({
  title = "Mock Test",
  date,
  totalQestion = 100,
  attemptQuestion = 78,
  minPercentage =  75
}) {
  const getDate = () => {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  const percentage = (attemptQuestion / totalQestion) * 100
  console.log("Percentage :",percentage)
  return (
    <tr class="hover:bg-surface-container-low transition-all group">
              <td class="py-5 font-bold text-on-surface">
               {title}
              </td>
              <td class="py-5 text-on-background">{date || getDate()}</td>
              <td class="py-5">
                <span class={` ${percentage <=  minPercentage ?"text-error bg-error-container/20" : "text-blue-primary"} px-3 py-1 rounded-full font-bold`}>
                  {attemptQuestion}/{totalQestion}
                </span>
              </td>
              <td class="py-5">
                <span class={`flex capitalize font-semibold items-center gap-1  ${percentage <=  minPercentage ?"text-error bg-error-container/20" : "text-success"}`}>
                  <span class={`material-symbols-outlined text-[18px] ${percentage <=  minPercentage ?"text-error" : "text-success"} `}>
                    {percentage <=  minPercentage ?"cancel" : "check_circle"}
                  </span>{" "}
                  {percentage <=  minPercentage ?"failed" : "passed"}
                </span>
              </td>
              <td class="py-5 text-right">
                <button class="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </td>
            </tr>
  );
}
