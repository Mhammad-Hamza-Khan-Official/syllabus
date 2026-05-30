export default function AllExamsCard({icon = "precision_manufacturing" ,title = "Engineering",discrip = "Comprehensive preparation for ECAT, MUET, and other regional engineering entry tests.",cta1 = "Explore Category",cta2 = "Start Quick Test"}) {


  return (
    <div class="bg-surface-container-lowest rounded-2xl p-6 soft-shadow border border-surface-variant hover:-translate-y-2 transition-transform group">
      <div class="h-14 w-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:bg-primary  transition-colors">
        <span class="material-symbols-outlined text-3xl text-blue-primary">
          {icon}
        </span>
      </div>
      <h4 class="font-title-lg text-lg font-medium mb-2">{title}</h4>
      <p class="text-body-md text-on-surface-variant mb-6 line-clamp-2">
        {discrip}
      </p>
      <div class="flex flex-col gap-3">
        <button class="w-full bg-blue-primary text-on-primary py-2.5 rounded-xl font-label-md shadow-sm hover:scale-95 cursor-pointer">
          {cta1}
        </button>
        <button class="w-full bg-transparent text-blue-primary py-2 rounded-xl font-bold border-blue-primary cursor-pointer border  hover:bg-primary-fixed/30 shadow-surface-container-highest shadow-md hover:scale-95">
          {cta2}
        </button>
      </div>
    </div>
  );
}