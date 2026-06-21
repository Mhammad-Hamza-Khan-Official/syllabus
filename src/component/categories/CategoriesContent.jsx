import AllExams from "./AllExams";
import SelectionStrip from "./SelectionStrip";
import TrendingCategories from "./TrendingCategories";

export default function CategoriesContent({ mt = "60px" }) {
  return (
    <div>
      <div
        className="p-4 sm:ml-64 bg-surface-container-low"
        style={{ marginTop: mt }}
      >
        <div className="p-4 border-2 border-default border-dashed rounded-base">
          <SelectionStrip />
          <TrendingCategories />
          <AllExams />
        </div>
      </div>
    </div>
  );
}
