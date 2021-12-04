import React from "react";
import GitImg from '../Images/github.svg';
import LinkedInImage from '../Images/linkedin.svg';
import Email from '../Images/mail.svg';
import Phone from '../Images/phone.svg';
const ContactMe = (props) => {

    const onClickGitHub = () => {
        window.open("https://github.com/cfriend85");
        }
    
    const onClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/charles-friend/");
    }
    
    return(
        <div>
            <div className="jumbotronContainer">
                <div className="jumbotron bg-danger text-light">
                    <h5 className="display-6 mb-3">Charles Friend</h5>
                    <hr className="my-2"></hr>
                    <div className="jumbotronFooter">
                        <h5><img src={Phone} alt="Phone" /> (469) 401-9771</h5>
                        <a href="mailto:c.friend85@yahoo.com">
                        <button className="btn btn-outline-light gitButton"><img className="gitImage" src={Email}/></button>
                        </a>
                        {/* <button className="btn btn-outline-light gitButton" onClick={() => "location.href='mailto:c.friend85@yahoo.com'"}><img className="gitImage" src={Email}/></button> */}
                        <button className="btn btn-outline-light gitButton" onClick={onClickGitHub}><img className="gitImage" src={GitImg}/></button>
                        <button className="btn btn-outline-light gitButton" onClick={onClickLinkedIn}><img className="gitImage" src={LinkedInImage}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;