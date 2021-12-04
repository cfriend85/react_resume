import React, { useState, useEffect } from "react";
import Skills from "../Components/Skills";
import ContactMe from "../Components/ContactMe";
import Education from "../Components/Education";
const Main = (props) => {
    return(
        <div>
            <navbar className="navBarContainer">
                <button className="navBarButtons">Skills</button>
                <button className="navBarButtons">Education</button>
                <button className="navBarButtons">Contact Me</button>
            </navbar>
            <Skills />
            <Education />
            <ContactMe />
        </div>
    )
}


export default Main;