
import { BsGripVertical } from "react-icons/bs";
import { BiCaretDown, BiEdit, BiSolidDownArrow } from "react-icons/bi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import { assignments } from "../../Database";
import { FaPlus, FaRegAddressBook, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
export default function Assignments() {
    const { cid } = useParams();
    const assignmentList = assignments.filter((assignment) => assignment.course === cid);

    return (
        <div id="wd-assignments">
            <div id="wd-assignments">
                <div style={{ marginBottom: "50px" }}>
                    <div className="d-flex align-items-center mb-3">
                        <div className="w-100 d-flex" style={{ justifyContent: "space-between" }}>
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
                        </div>
                    </div>
                

                    <ul id="wd-assignment-list" className="list-group rounded-0 my-4">

                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <BiSolidDownArrow className="me-2" />
                            ASSIGNMENTS
                            <div className="float-end">
                                <button style={{
                                    border: "1px solid #c7cdd158",
                                    borderRadius: "25px",
                                    padding: "5px 10px",
                                    marginRight: "10px"
                                }} type="button" className="btn btn-light btn-md me-2">40% of Total</button>

                                <FaPlus />
                                <IoEllipsisVertical className="fs-4" />
                            </div>



                        </div>
                        {
                            assignmentList && assignmentList.map((item) => (
                                <ul className="wd-lessons list-group rounded-0">
                                <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "4px solid green" }}>
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <BsGripVertical className="fs-3" />
                                        </div>
                                        <div className="col-auto">
                                            <FaRegAddressBook className="text-success fs-3" />
                                        </div>
                                        <div className="col">
                                            <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                                href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                                <h5><b>{item.title}</b></h5>
                                            </a>
                                            <p>
                                                <span className="text-danger"> Multiple Modules </span>
                                                | <b>Not available until</b> {item.available} | <b>Due</b> {item.due} | {item.points} pts
                                            </p>
                                        </div>
                                        
                                        <div className="col float-end">
                                            <LessonControlButtons />
                                        </div>
                                        
                                    </div>
                                    
                                </li>
                                </ul>
                            ))

                        }
                        
                    </ul>
                </div>
            </div>
        
</div>

    );
}



