import React from "react"; // Make sure to import React if you are using JSX
import './Contact.css';
import { useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate(); // Create a navigation function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here

    // After handling the submission, navigate to the home page ("/")
    navigate("/");
  };
  return (
    <>
    <div className="contactback">
    <div className="footer_get_touch_outer">
      <div className="container">
        <div className="footer_get_touch_inner grid-70-30">
          <div className="column-70 get_form">
            <div className="get_form_inner">
              <div className="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <form action="#">
                <div className="grid-50-50">
                  <input className="first-name-input" type="text" placeholder="First Name" />
                  <input className="last-name-input" type="text" placeholder="Last Name" />
                  <input className="email-input" type="email" placeholder="Email" />
                  <input className="phone-input" type="tel" placeholder="Phone/Skype" />
                </div>
                <div className="grid-full">
                  <textarea
                    className="project-textarea"
                    placeholder="About Your Project"
                    cols={50}
                    rows={10}
                    defaultValue={""}
                  />
                  <input className="consubmit" type="submit" defaultValue="Submit" onClick={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
          <div className="column-30 get_say_form">
            <h5>Say Hi!</h5>
            <ul className="get_say_info_sec">
              <li>
                <i className="fa fa-envelope" />
                <a>Eduexplorer.com</a>
              </li>
              <li>
                <i className="fa fa-whatsapp" />
                <a>+91 9602381997</a>
              </li>
              <li>
                <i className="fa fa-skype" />
                <a>Eduexplorer@.com</a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
