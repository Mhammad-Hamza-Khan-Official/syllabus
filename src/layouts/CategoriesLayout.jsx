import CategoriesContent from "../component/categories/CategoriesContent";
import DNavbar from "../component/dashboard/DNavbar";
import DSidebar from "../component/dashboard/DSidebar";

export default function CategoriesLayout() {
  return (
    <div >
        <DNavbar/>
        <DSidebar/>
        <CategoriesContent/>
    </div>
  )
}
