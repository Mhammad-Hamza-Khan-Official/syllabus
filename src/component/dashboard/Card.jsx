export default function Card({
  icon = "home",
  iconColor = "blue",
  value = "2.5%",
  text = "Average",
  subValue = "",
}) {
  return (
    <div>
      {/* Card */}
      <div class="bg-on-secondary shadow-sm shadow-surface-dim p-6 rounded-2xl soft-xl-shadow border border-outline-variant/30 flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <span class="p-2 bg-surface-variant text-primary rounded-full">
            <span
              class="material-symbols-outlined align-middle"
              style={{ color: iconColor }}
              data-icon={icon}
            >
              {icon} 
            </span> 
          </span>
          <span class="text-md font-medium font-label-sm text-blue-primary">
            {subValue}
          </span>
        </div>
        <div>
          <p class="text-4xl font-bold text-on-surface">{value}</p>
          <p class="text-label-sm capitalize font-label-md text-secondary ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
