import SuccessStoriesCard from "./SuccessStoriesCard";

export default function SuccessStories() {
  return (
    <div className="bg-surface flex justify-center pt-24 pb-18">
      <div className="py-8  md:w-container-max px-8">
        <h1 className="text-4xl font-bold text-center my-8 mb-13">
          Success Stories
        </h1>
        {/* Card Container */}
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10">
          <SuccessStoriesCard/>
          <SuccessStoriesCard/>
        </div>
      </div>
    </div>
  );
}
