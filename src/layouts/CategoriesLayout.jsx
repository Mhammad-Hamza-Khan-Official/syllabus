import CategoriesContent from "../common/categories/CategoriesContent";
import DNavbar from "../common/dashboard/DNavbar";
import DSidebar from "../common/dashboard/DSidebar";

export default function CategoriesLayout() {
  return (
    <div >
        <DNavbar/>
        <DSidebar/>
        <CategoriesContent/>
    </div>
  )
}
