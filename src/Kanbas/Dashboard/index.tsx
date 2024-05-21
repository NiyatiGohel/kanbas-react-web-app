export{}
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr/>
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/reactjs1.jpeg"/>
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title  card-text" >
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
        
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/webdevelopment.jpg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5610 Web development
              </a>
              <p className="wd-dashboard-course-title  card-text" >
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/AI.jpg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS4100 Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title  card-text" >
              Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/AI1.jpg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5100 Foundations of Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title  card-text" >
              Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/NLP.jpg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS6120 Natural Language Processing
              </a>
              <p className="wd-dashboard-course-title  card-text" >
              Natural Language Processing
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div><br/>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/MP.jpg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS7200 Master's Project
              </a>
              <p className="wd-dashboard-course-title  card-text" >
              Project
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div><br/>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/CV.jpeg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5300 Pattern recogntion and computer vision
              </a>
              <p className="wd-dashboard-course-title  card-text" >
              Machine Learning
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div><br/>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="images/CV.jpeg" />
            <div  className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5383 Unsupervised Machine Learning and Data Mining
              </a>
              <p className="wd-dashboard-course-title  card-text" >
              Unsupervised Machine Learning
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
            </div><br/>
          </div>
          
         
          </div>
          </div>
</div>

  );}
  
  