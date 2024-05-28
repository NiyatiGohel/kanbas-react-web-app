import { LiaCogSolid } from "react-icons/lia";
import { assignments, enrollments, grades, users } from "../../Database"
import { useParams } from "react-router";
import { FaCaretDown, FaFileExport, FaFileImport, FaFilter, FaSearch } from "react-icons/fa";

export default function Grades() {
    const { cid } = useParams();
    const courseEnrollments = enrollments.filter((enrollment) => enrollment.course === cid);
    const student = courseEnrollments.map((student_id) => users.find((user) => user._id === student_id.user));
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    const courseGrades = student.map((student) => {
        const studentGrades = courseAssignments.map((assignment) => {
            const grade = grades.find((grade) => grade.assignment === assignment._id && grade.student === student?._id);
            return grade ? grade.grade : "N/A "
        });
        return {
            ...student,
            grades: studentGrades
        }
    });

    return (
        <div className="container ">



            <button className="btn btn-secondary float-end">
                <LiaCogSolid className="mr-1 ml-2" />
            </button>
            <button className="btn btn-secondary float-end mx-2 dropdown-toggle" data-toggle="dropdown" >
                <FaFileExport className="me-1 mr-1 ml-2" />
                Export
            </button>

            <button className="btn btn-secondary float-end">
                <FaFileImport className="me-2 mr-1 ml-2" />
                Import
            </button>
            <br />
            <div className="row mt-4">
                <div className="col-md-6">
                    <label htmlFor="wd-student-names" className="form-label"><b>Student Names</b></label>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <select id="wd-student-names" className="form-select">
                        <option selected>Search Students</option>
                        <option selected>Search Students</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-assignment-names" className="form-label"><b>Assignment Names</b></label>
                    <div className="input-group">
                    <span className="input-group-text"><FaSearch /> </span>
                    <select id="wd-assignment-names" className="form-select">
                        <option selected>Search Assignments</option>
                        {courseAssignments.map((assignment) => (
                            <option key={assignment._id} value={assignment._id}>
                                {assignment.title}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>
            </div>
            <div className="row my-3 row-cols-auto">
                <button className="btn btn-light ms-2">
                    <FaFilter className="mr-1" />
                    Apply Filters
                </button>
            </div>
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col-md-6" className="w-20" style={{ width: "20%" }}>Student Name</th>
                                {
                                    courseAssignments && courseAssignments.map((assignment) => (
                                        <th scope="col" className="w-20 text-center" style={{ width: "20%" }}>
                                            {assignment.title}<br />
                                            Out of {assignment.points}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courseGrades && courseGrades.map((student) => (
                                    <tr key={student._id}>
                                        <th scope="row" className="text-danger">{student.firstName + " " + student.lastName}</th>
                                        {
                                            student.grades && student.grades.map((grade, index) => (
                                                <td key={index} className="text-center">{grade}</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

