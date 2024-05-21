import React from 'react';
import { FaFileImport, FaFileExport, FaFilter, FaSearch, FaCaretDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LiaCodeSolid, LiaCogSolid, LiaCogsSolid } from 'react-icons/lia';
export default function Grades() {
  return (
    <div className="container-fluid">
  <div className="row">
    <div className="col-md-8 offset-md-2">
    <div className="btn-group ml-2 d-inline me-1 float-end">
          <button type="button" className="btn btn-light mr-2">
          <LiaCogSolid className="mr-1" />
          </button>
          </div>
    <div className="btn-group ml-2 dropdown d-inline me-1 float-end">
            <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FaFileExport className="mr-1" /> Export
            </button>
        </div>
        
        <div className="btn-group ml-2 d-inline me-1 float-end">
          <button type="button" className="btn btn-light mr-2">
          <FaFileImport className="mr-1" /> Import
          </button>

          
          </div>
          <br/><br/>
          
            <div className="row">
                <div className="col-md-6">
                    <h6><b>Students Name</b></h6>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Assignments" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <h6><b>Assignments Name</b></h6>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Assignments" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>
                    
                </div>
            </div>
            
        <div><br/>
                <button type="button" className="btn btn-light ml-2 " style={{ width: "20%" }}>
                <FaFilter className="mr-1" /> Apply Filters
                </button>
              </div><br/>
        
    
        
        
        
          
        
      
      <div className="table-responsive col-lg mb-3">
        <table className="table-striped table table-bordered mx-0 w-100">
          <thead>
            <tr>
              <th className="mb-3 align-items-center col">Student Names</th>
              <td scope = "col"className="mx-auto col text-center">A1 SETUP</td>
              <td scope = "col"  className="px-3 col text-center">A2 HTML</td>
              <td scope = "col"className="mx-4 col text-center">A3 CSS</td>
              <td scope = "col" className="px-1 col text-center">A4 BOOTSTRAP</td>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className="text-center text-danger w-20 col">Jemi Adam</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col"><input type="text" className="form-control text-center" value="88.01"/></td>
              <td className="text-center w-20 col">72.18%</td>
              <td className="text-center w-20 col">66.22%</td>
            </tr>
            <tr>
              <td className="text-center text-danger w-20 col">Christina Hiley</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
            </tr>
            <tr>
              <td className="text-center text-danger w-20 col">Sampath Ansari</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
            </tr>
            <tr>
              <td className="text-center text-danger w-20 col">Han Bao</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col"><input type="text" className="form-control text-center" value="88.01"/></td>
              <td className="text-center w-20 col">98.97%</td>
            </tr>
            <tr>
              <td className="text-center text-danger w-20 col">Theodore Brooke Buckie</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center w-20 col">94.67%</td>
              <td className="text-center w-20 col">98.27%</td>
              <td className="text-center w-20 col"><input type="text" className="form-control text-center" value="88.01"/></td>
            </tr>
            <tr>
              <td className="text-center text-danger px-3 py-2 w-20 col">Stern Cuz</td>
              <td className="text-center w-20 col form-control"><input type="text" className="form-control text-center" value="100%"/></td>
              <td className="text-center w-20 col">94.67%</td>
              <td className="text-center w-20 col">100%</td>
              <td className="text-center col-2 col">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


  );
}