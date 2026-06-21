import SubjectCard from "./SubjectCard";

export default function Subjects() {
  return (
    <div className="bg-surface-container-low flex justify-center">
      <div className=" py-18 md:w-container-max px-8">
        <div className="flex justify-between py-18 flex-wrap gap-5 ">
          <div className="leading-relaxed">
            <h1 className="text-4xl font-bold">Comprehensive Subjects</h1>
            <p className="text-black/90 mt-3">
              Deep dive into the core modules of the MUET entry test.
            </p>
          </div>
          <div className="flex items-center gap-2  transition-all  cursor-pointer">
            <span className="text-blue-primary font-medium hover:-translate-x-2">
              View All Modules
            </span>
            <span className="material-symbols-outlined text-blue-primary">
              arrow_forward
            </span>
          </div>
        </div>

        <div className="  grid grid-cols-1   sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SubjectCard subject="maths" level="60"/>
          <SubjectCard subject="physics" level="45" />
          <SubjectCard subject="Chemistry" level="55"/>
          <SubjectCard subject="computer" level="80"/>

        </div>
      </div>
    </div>
  );
}
