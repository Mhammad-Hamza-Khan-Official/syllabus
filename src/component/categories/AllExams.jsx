import AllExamsCard from "./AllExamsCard";

export default function AllExams() {
  return (
    <div className="flex items-center p-5 flex-col">
      <div className="self-start py-4">
        <h1 className="capitalize self-start text-2xl font-medium">
          all exam categories
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        <AllExamsCard/>
      </div>
    </div>
  );
}