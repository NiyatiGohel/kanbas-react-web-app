export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h2>Assignment Name</h2></label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description" cols={40} rows={11}>
          The assignment is available online
          Submit a link to the landing page of your web application
          runnung on Netlify.The landing page should incude the following: 
          Your Full name and section links to each of the lab assignments 
          Link to the Canbas application Links to all relevant source code repositories
          The kanbas application should include a link to navigate back to the landing page 
        </textarea>
        <br/><br/>
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br/>
        <tr>
        <td align="right" valign="top">
        <label htmlFor="wd-group"> Assignment Groups </label>
        </td>
        <td>
        <select id="wd-group">
          <option selected value="SCIFI">
              ASSIGNMENTS</option>
        </select>
        </td>
        </tr>
        <br/>
        <tr>
        <td align="right" valign="top">
        <label htmlFor="wd-display-grade-as"> Display Grade as </label>
        </td>
        <td>
        <select id="wd-display-grade-as">
          <option selected value="SCIFI">
              Precentage</option>
        </select>
        </td>
        </tr>
        <br/>
        <tr>
        <td align="right" valign="top">
        <label htmlFor="wd-submission-type"> Submission type </label>
        </td>
        <td>
        <select id="wd-submission-type">
          <option selected value="SCIFI">
              Online</option>
        </select>
        <br/><br/>
        <label htmlFor="wd-text-entry">Online Entry options</label><br/>
        <input type="checkbox"
              name="check-genre" id="wd-text-entry"/>
        <label htmlFor="wd-text-entry">Text Entry</label><br/>
        <input type="checkbox"
              name="check-genre" id="wd-website-url"/>
        <label htmlFor="wd-website-url">Website URL</label><br/>
        <input type="checkbox"
              name="check-genre" id="wd-media-recordings"/>
        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
        <input type="checkbox"
              name="check-genre" id="wd-student-annotation"/>
        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
        <input type="checkbox"
              name="check-genre" id="wd-file-upload"/>
        <label htmlFor="wd-file-upload">File Uploads</label><br/>
        

        </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label><br/>
            <input id="wd-assign-to" value="Everyone" /><br/><br/>
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type = "date" id="wd-due-date" value="2024-05-13" /><br/><br/>
            
          
            <label htmlFor="wd-available-from">Available From<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Until</label><br/>
            <input type = "date" id="wd-available-from" value="2024-05-06" /><span>&nbsp;</span>
            
            <input type = "date" id="wd-available-until" value="2024-05-20" />
          
            
            </td>
      
            
            </tr>
            
          </table> 
          <div >
            <hr color="grey"/>
          </div>  
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button id="wd-cancel">
          Cancel
      </button>
      <span>&nbsp;</span>
      <button id="wd-save" type="button">
          Save
      </button>
      </div>
      </div>
  );}
  
  