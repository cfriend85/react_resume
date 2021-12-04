import React, { useState } from "react";
import Dojo from '../Images/dojocert.png'
import jQuery from '../Images/jQuery.png';
import Async from '../Images/asyncJS.png';
import Numpy from '../Images/numpy.png';
import Statistics from '../Images/pythonStats.png';

const Education = () => {

    const [showCertificate, setShowCertificate] = useState(false);
    const [certificate, setCertificate] = useState(Dojo)
    const [courses, setCourses] = useState(["Asyncronous JavaScript", "jQuery", "Statistics with Python", "Statistics with NumPy"]);
    const [showCourse, setShowCourse] = useState("");
    
    const onClickCerticateButton = () => {
        setShowCertificate(true)
    }

    const codeCademyHandler = (event) => {
        event.preventDefault();
        console.log(event.target.innerHTML)
        setShowCourse(event.target.innerHTML)
    }

    return(
        <div>
            <div className="jumbotronContainer">
                <div className="jumbotron bg-danger text-light">
                    <h5 className="display-6 mb-3">Coding Dojo</h5>
                    <hr className="my-2"></hr>
                    <div className="educationFooter">
                        <div className="columnizeEducationFooter">
                            <h4>Field of Study: Full-Stack Development</h4>
                            <h4>Attended: February 2021 - July 2021</h4>
                        </div>
                        <div className="columnizeEducationFooter">
                            <h4>Core Studies:</h4>
                            <ul>
                                <li>Web Fundementals</li>
                                <li>Python</li>
                                <li>MEAN</li>
                                <li>Ruby on Rails</li>
                            </ul>
                        </div>                      
                    </div>
                    
                    <hr></hr>
                    
                {showCertificate? <img src={certificate} className="certificateImage" /> : <button className="btn btn-outline-light" onClick={onClickCerticateButton}>Certificate of Achievement</button>}
                <hr></hr>
                        <h5 className="display-6 mb-3">Codecademy</h5>
                        <hr className="my-2"></hr>
                        <div className="educationFooter">
                            <div className="columnizeEducationFooter">
                                    <ul>
                                        <li><h4>jQuery</h4></li>
                                        <li><h4>Asynchronous JavaScript</h4></li>
                                        <li><h4>Statistics with NumPy</h4></li>
                                    </ul>
                            </div>                      
                        </div>
                        <hr></hr>
                        {
                            courses.map((item, i) => {
                                return <button className="btn btn-outline-light" key={i} onClick={codeCademyHandler}>{item}</button>
                            })
                        }
                        {showCourse === "Asyncronous JavaScript"? <img src={Async} alt={showCourse} /> : showCourse === "jQuery"? <img src={jQuery} alt={showCourse} /> : showCourse === "Statistics with Python"? <img src={Statistics} alt={showCourse} /> : showCourse === "Statistics with NumPy"? <img src={Numpy} alt={showCourse} /> : <p></p>}
                </div>
                </div>
                <div className="jumbotronContainer">
                
            </div>
        </div>
    )
}

export default Education;