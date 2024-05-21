import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Labs from "../Labs";
export default function Kanbas() {
    return (
      <div id="wd-kanbas">
          <div className="d-flex">
          <div className="d-none d-md-block bg-black ">
            <KanbasNavigation />
            </div>
         
          <div className="flex-fill p-4">
          <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses />} />
              <Route path="Labs" element={<Labs />} />

            </Routes>
            </div>
        </div>


          

            
    </div>
  );}
  
  