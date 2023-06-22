import { Outlet } from "react-router-dom";
import "../App.css";
import DashNav from "../components/DashNav";

export default function Dashboard() {
  return (
    <>
      <DashNav />
      <div className="section">
        <Outlet />
      </div>
    </>
  );
}
