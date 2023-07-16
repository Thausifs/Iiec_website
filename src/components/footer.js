import React  from 'react';
import '../styles/componentscss/footerr.css';
import { RegisterEnquiry } from '../Apis/admin';

const Footer=()=>{

   
    const submit = async () => {
        try {
            
            let name_placehd = document.getElementById("name_placehd").value;
            let phone_placehd = document.getElementById("phone_placehd").value;
            let email_pd = document.getElementById("email_pd").value;
            let sub_pd = document.getElementById("sub_pd").value;
            let description_pd = document.getElementById("description_pd").value;
            if (
                name_placehd.length === 0 ||
                phone_placehd.length === 0 ||
                email_pd.length === 0 ||
                sub_pd.length === 0 ||
                description_pd.length === 0
            ) {
                return alert("Please enter all values");
            }
            else {
                let data = {
                    First_name: name_placehd,
                    Last_name: phone_placehd,
                    Email_id: email_pd,
                    Mobile_Number: sub_pd,
                    Std_destination1: description_pd,
                };
                let registerEnquiry = await RegisterEnquiry(data);
                const dataresponse = registerEnquiry;
                
                if (dataresponse.status === 200) {
                    alert(dataresponse.data.message);
                    window.location.reload();
                } else if (dataresponse.status === 400) {
                    alert(dataresponse.data.message);
                }
            }
        }
        catch (error) {
         alert(error);
        }
        
    }
    
    return (
      <div className="footermaincon">
        <div className="dis_flex">
          <div className="flexcontainer footerdivs  linksdivfooter ">
            <div className="footerulcon mainlinks">
              <p className="footerhead">MAIN LINKS</p>
              <ul className="footerpara">
                <li>
                  <a href="/Aboutiiec">About IIEC</a>
                </li>
                <li>
                  <a href="/Aboutiiec">Students Testimonials</a>
                </li>
                <li>
                  <a href="/Aboutiiec">Video Testimonials</a>
                </li>
                <li>
                  <a href="/Aboutiiec">Gallery</a>
                </li>
                <li>
                  <a href="/Aboutiiec">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footerulcon visa">
              <p className="footerhead">VISA</p>
              <ul className="footerpara">
                <li>
                  <a href="/businessvisa">Investor VISA</a>
                </li>
                <li>
                  <a href="/dependentvisa">Dependent VISA</a>
                </li>{" "}
                <li>
                  <a href="/eb5visa">EB5 VISA</a>
                </li>{" "}
                <li>
                  <a href="/touristvisa">Tourist VISA</a>
                </li>
                <li>
                  <a href="/h1balternative">H1Balternative VISA</a>
                </li>
              </ul>
            </div>

            <div className="footerulcon education ">
              <p className="footerhead">EDUCATION</p>
              <ul className="footerpara">
                <li>
                  <a href="/studyincanada">Study in Canada</a>
                </li>
                <li>
                  <a href="/studyinaustralia">Study in Australia</a>
                </li>
                <li>
                  <a href="/studyinuk">Study in UK</a>
                </li>
              </ul>
            </div>
            <div className="footerulcon immigration">
              <p className="footerhead">IMMIGRATION</p>
              <ul className="footerpara">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <p className="footerhead mglf_3">+91 98415 12043</p>
              <p className="footerhead mglf_3">iiecservice@gmail.com</p>
            </div>
            <div>
              <p className="footerhead mglf_3">Social Media</p>
            </div>
          </div>
          <div className="flexcontainer footerdivs footerform ">
            <p className="mainhead">Have a Question!</p>
            <div>
              <input
                type="textarea"
                id="name_placehd"
                className="footerplaceholder"
                placeholder="Name"
              ></input>
              <input
                type="textarea"
                id="phone_placehd"
                className="footerplaceholder"
                placeholder="Phone"
              ></input>
              <input
                type="textarea"
                id="email_pd"
                className="footerplaceholder"
                placeholder="E-mail"
              ></input>
              <input
                type="textarea"
                id="sub_pd"
                className="footerplaceholder"
                placeholder="Subject"
              ></input>
              <textarea
                type="textarea"
                id="description_pd"
                className="footerplaceholder"
                placeholder="Enter your query..."
              ></textarea>
              <br />
              <button className="msg" onClick={() => submit()}>
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
        <div className="footerbtm">
          <hr></hr>
          <p className="cpyrights">@2023 IIEC</p>
        </div>
      </div>
    );
}

export default Footer 