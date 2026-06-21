import TrendingCategoriesCard from "./TrendingCategoriesCard";

export default function TrendingCategories() {
  return (
    <div className="flex flex-col items-center justify-center pb-4  capitalize   rounded-xl">
      <div className="flex  justify-between items-center w-full py-4">
        <h2 className="capitalize font-medium text-2xl">
          Trending practice test
        </h2>
        <div className="flex items-center gap-2 text-lg text-blue-primary cursor-pointer">
          <p className="hover:mr-2 transition-all ">view all </p>
          <span className="material-symbols-outlined">arro</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4  w-full px-3">
        <TrendingCategoriesCard/>
      </div>
    </div>
  );
}