import { BiSolidDownArrow} from "react-icons/bi";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch, FaPlus, FaRegAddressBook} from 'react-icons/fa';
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";




export default function Assignments() {
    return (
      
      <div id="wd-assignments">
        <div style={{marginBottom: "50px"}}>
        <div className="d-flex align-items-center mb-3">
          <div className = "w-100 d-flex"style={{justifyContent:"space-between"}}>
      <div className="input-group" style={{ width: '300px' }}>
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input 
          type="text"
          className="form-control border-start-0"
          placeholder="Search"
        />
      </div> 
      <div>
      <button className="btn btn-light ms-2 ">
        <FaPlus className="me-1" />
        Group
      </button>&nbsp;&nbsp;
      <button className="btn btn-danger">
        <FaPlus className="me-1" />
        Assignment
      </button>
      </div>
        </div> </div>
        
        <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-6 fs-6 border-gray">
        <div className="wd-title p-3 ps-1 bg-secondary bg-light w-100 d-flex align-items-center" 
        style={{justifyContent:"space-between"}}>
          <div >
        <h3 id="wd-assignments-title">
        <BsGripVertical className="me-2 fs-3" />
        <BiSolidDownArrow className="me-2 fs-6" />
          ASSIGNMENTS 
        </h3> </div>
        <div className = " d-flex align-items-center">
  <div style={{
    border: "1px solid #c7cdd158",
    borderRadius: "25px",
    padding: "5px 10px",
    marginRight: "10px"
  }}>
    40% of Total
  </div>
  <BsPlus className="fs-4 me-2" />
  <IoEllipsisVertical className="fs-4" />
</div>
        </div> 
        
        <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-2 ps-0">
        <div className= " d-flex w-100 align-items-center"style={{justifyContent:"space-between"}}>
        <div className = " d-flex align-items-center">
        <BsGripVertical className="me-1 fs-3"/>
        <FaRegAddressBook style={{marginRight:"20px"}} /> 
        <div>
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" >
              A1 
            </a> 
            <p> <span className="text-danger">
              Multiple Modules </span>| <b>Not available until</b> May 6 at 11:59 pm&nbsp;|<br/><b>Due&nbsp;</b>May 13 at 11:59pm&nbsp;|&nbsp;100 pts</p>          
            </div></div> <LessonControlButtons /></div>
            
        </li>
        
        </ul>

        <ul className="wd-assignments-a2 list-group rounded-0">
        <li className="wd-assignments-list list-group-item p-2 ps-0">
        <div className= " d-flex w-100 align-items-center"style={{justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center"}}>
        <BsGripVertical className="me-1 fs-3"/>
        <FaRegAddressBook style={{marginRight:"20px"}} /> 
        <div>
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" >
              A2
            </a> 
            <p> <span className="text-danger">
              Multiple Modules </span>| <b>Not available until</b> May 13 at 11:59 am&nbsp;|<br/><b>Due&nbsp;</b>May 20 at 11:59pm&nbsp;|&nbsp;100 pts</p>          
            </div></div> <LessonControlButtons /></div>
            
        </li>
        </ul>

        <ul className="wd-assignments-a3 list-group rounded-0">
        <li className="wd-assignments-list list-group-item p-2 ps-0">
          <div className= " d-flex w-100 align-items-center"style={{justifyContent:"space-between"}}>
        <div className = " d-flex align-items-center">
        <BsGripVertical className="me-1 fs-3"/>
        <FaRegAddressBook style={{marginRight:"20px"}} /> 
        <div>
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123" >
              A3 
            </a> 
            <p> <span className="text-danger">
              Multiple Modules </span>| <b>Not available until</b> May 20 at 11:59 am&nbsp;|<br/><b>Due&nbsp;</b>May 27 at 11:59pm&nbsp;|&nbsp;100 pts</p>          
            </div></div> <LessonControlButtons /></div>
            
        </li>
        </ul>

        </li>
        </ul>
      </div>
      </div>
    );
}  
