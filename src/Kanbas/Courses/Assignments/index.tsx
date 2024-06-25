import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import {BiCaretDown, BiEdit, BiSolidDownArrow} from "react-icons/bi";
import LessonControlButtons from "./LessonControlButtons";
import {useParams} from "react-router";
import {addAssignment, deleteAssignment, setAssignments, updateAssignment} from "./reducer";
import {useSelector, useDispatch} from "react-redux";
import * as client from "./client";
import {useEffect} from "react";
import { FaPlus, FaRegAddressBook } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    const {cid} = useParams();

    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const cidAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };


    const removeAssignment = async (moduleId: string) => {
        await client.deleteAssignment(moduleId);
        dispatch(deleteAssignment(moduleId));
    };

    return (
        <div id="wd-assignments">
            <AssignmentsControls cid={cid!}/>
            
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
                    cidAssignments && cidAssignments.map((item: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "4px solid green"}}>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="fs-4"/>
                                </div>
                                <div className="col-auto">
                                    <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                       href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                        <FaRegAddressBook className="text-success fs-4"/>
                                    </a>

                                </div>
                                <div className="col">
                                    <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                       href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                    <h5><b>{item.title}</b></h5>
                                    </a>
                                    
                                    <p>
                                        <span className="text-danger"> Multiple Modules </span>
                                        <b>| Not available until</b> {item.available} | <b>Due</b> {item.due} | {item.points} pts
                                    </p>
                                </div>
                                <div className="col float-end">
                                    <LessonControlButtons assignmentId={item._id}
                                                          deleteAssignment={(assignmentId) => {
                                                              dispatch(deleteAssignment(assignmentId));
                                                          }}/>
                                </div>
                            </div>
                        </li>
                    ))

                }
            </ul>
        </div>
        
    );
}