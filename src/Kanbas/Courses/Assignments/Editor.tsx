import {useLocation, useParams} from "react-router";
import {assignments} from "../../Database";
import {Link} from "react-router-dom";

export default function AssignmentEditor() {
    const {cid} = useParams();
    const {pathname} = useLocation();

    const aid = pathname.split("/").pop();
    const assignment = assignments.find(a => a._id === aid);

    return (
        <div id="wd-assignments-editor " className="container w-100">
            <div className="container w-100">
                <div className="row input-group mb-2">
            
                    <label htmlFor="wd-name" className="form-label"><h2>Assignment Name</h2></label>
                    <input id="wd-name" className="form-control" value={assignment?.title}/>
                </div>
                

                <div className="row input-group mb-2">
                      <textarea id="wd-description" className="form-control" rows={10} cols={60}>
                            {assignment?.description}
                        </textarea>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col">
                        <input id="wd-points" type="number" className="form-control" value={assignment?.points}/>
                    </div>
                </div>
            <br/>
            <div className="row">
           <div className="col-md-6 text-end">
             <label className="col-form-label float-end">Assignment Group</label>
           </div>
          <div className="col-md-6">
             <select className="form-control form-select">
               <option>ASSIGNMENTS</option>
               <option>QUIZZES</option>
               <option>EXAMS</option>
               <option>PROJECT</option>
             </select>
           </div>
         </div>

         
        
         <br />

         <div className="row">
           <div className="col-md-6 text-end">
            <label>Display Grade as</label>
          </div>
          <div className="col-md-6">
             <select className="form-control form-select">
               <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
             </select>
           </div>
         </div>
       <br/>

             <div className="row">
           <div className="col-md-6 text-end">
            <label>Submission Type</label>
          </div>
           <div className="col-md-6">
           <div className="border p-2">
             <select className="form-control from-select">
               <option>Online</option>
               <option>On Paper</option>
               <option>No Submission</option>
             </select><br/>

             <div className="row">
             <label><b>Online Entry Options</b></label>
          <div className="col-md-6">
             <input type="checkbox" id="online_entry_options1" />
             <label htmlFor="online_entry_options1" className="mx-1">Text Entry</label>
             <br />
             <input type="checkbox" id="online_entry_options2" />
            <label htmlFor="online_entry_options2" className="mx-1">Website URL</label>
             <br />
            <input type="checkbox" id="online_entry_options3" />
             <label htmlFor="online_entry_options3" className="mx-1">Media Recordings</label>
             <br />
             <input type="checkbox" id="online_entry_options4" />
             <label htmlFor="online_entry_options4" className="mx-1">Student Annotation</label>
             <br />
             <input type="checkbox" id="online_entry_options5" />
             <label htmlFor="online_entry_options5" className="mx-1">File Uploads</label>

           </div>
         </div>
          </div>
          
         </div>

         <br />

         </div>
         <br/>

         <div className="row">
          <div className="col-md-6 text-end">
             <label>Assign</label>
           </div>
           <div className="col-md-6">
             <div className="border p-2">
               <label><b>Assign to</b></label>
               <br />
               <input className="form-control" value="Everyone" />
               <br />

               <label><b>Due</b></label>
               <input
                className="form-control"
                type="date"
                
                value={assignment?.due}

              />
              <br />

              <div className="row">
                <div className="col-md-6">
                  <label><b>Available from</b></label>
                  <input className="form-control w-30" type="date"value={assignment?.available} />
                </div>

                <div className="col-md-6">
                  <label><b>Until</b></label>
                  <input className="form-control w-30" type="date" value = ""/>
                </div>
              </div>
              </div>
              </div>
              </div>

         
                
                <div className="row mt-3">
                    <hr/>
                </div>

                <div className="mb-2">


                    <Link key={'save'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input type="button" className="btn btn-danger float-end ms-2" value="Save"/>
                    </Link>
                    <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input type="button" className="btn btn-secondary float-end" value="Cancel"/>
                    </Link>
                </div>

                <div className="row" style={{height: '30px', width: '100%'}}></div>
            </div>
        </div>
    )
}
