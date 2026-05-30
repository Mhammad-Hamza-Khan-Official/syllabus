import DContent from "../common/dashboard/DContent";
import DNavbar from "../common/dashboard/DNavbar";
import DSidebar from "../common/dashboard/DSidebar";

export default function DashboardLayout() {
  return (
    <div>
    <DNavbar/>
    <DSidebar/>
    <DContent/>
    </div>
  );
}
