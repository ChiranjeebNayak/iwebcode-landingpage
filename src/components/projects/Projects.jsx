import React from 'react'
import './projects.css'
import rectangle1 from '../assets/img/Rectangle 1.png'
import rectangle2 from '../assets/img/Rectangle 2.png'
import rectangle3 from '../assets/img/Rectangle 3.png'
function Projects() {
    return (
        <div className="projects container">
            <div className="title">
                <h2 className="content">Projects</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 imgcard">
                    <h4>01 Example</h4>
                    <div className="image">
                        <img src={rectangle1} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 imgcard">
                    <h4>02 Example</h4>
                    <div className="image">
                        <img src={rectangle2} alt="" /></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 imgcard">
                    <h4>03 Example</h4>
                    <div className="image">
                        <img src={rectangle3} alt="" /></div>
                </div>
                <div className="col imgcard addbtn">
                    <button  className="btn">+</button>
                </div>
            </div>
        </div>
    )
}

export default Projects
