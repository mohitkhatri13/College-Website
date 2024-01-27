import React from "react";
import "./style.css"
import Component1 from './Images/Component1.png'
import Ballon from './Images/Ballon.png'
import Component2 from './Images/Component2.png'
import Component3 from './Images/Component3.png'
import Facebook from './Images/Facebook.png'
import Union from './Images/Union.png'
import Youtube from './Images/Youtube.png'
import Twitter from './Images/Twitter.png'
const Bottom = ()=>{
     return (
      <div className="mainpage">
      <div className="midpage">
          <h1 className="college_line">COLLEGE UNDER OUR COMMUNITY</h1>
      </div>
      <div className="three_boxes">
          <div className="boxb">
              <div className="box-cont">
                  <img className="box_img" src={Component1} alt=""/>
                  <h2 className="box-head font-size: 40px" >collaboration</h2>
              </div>
              <div className="box-text">
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                      the visual.</p>
              </div>
          </div>


          <div className="boxb">
              <div className="box-cont">
                  <img className="box_img" src={Component2} alt=""/>
                  <h2 className="box-head  ">120 Colleges all Over India</h2>
              </div>
              <div className="box-text">
                  <p>IIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                      the visual.</p>
              </div>
          </div>
          <div className="boxb">
              <div className="box-cont">
                  <img className="box_img" src={Component3} alt=""/>
                  <h2 className="box-head">We are using AI to get better</h2>
              </div>
              <div className="box-text">
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                      the visual.</p>
              </div>
          </div>

      </div>
       <footer className="footer">
       <img src={Ballon} className="balloon" alt=""/>
       <div className="All_ipu">
                <h2 className="color: white; font-size:18px; margin-bottom: 10px;">ALL IPU COMMUNITY</h2>
                <ul>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
          
            <div className="All_ipu">
                <h2  className="color: white; font-size:18px; margin-bottom: 10px; ">CONTACT US <br/> FOR</h2>
                <ul>
                    <li>general enquiries</li>
                    <li>please feel free to <br/> reach out to us at <br/> xyz#gmail.com </li>

                </ul>
            </div>

            <div className="foot_right">
                <h2
                     className="height: 21px; width: 124px; font-style: italic; font-size:18px; line-height: 21.28px; color:white; ">
                    Let's get social</h2>
                <div className="icons">
                    <img src={Union} alt=""/>
                    <img src={Twitter} alt=""/>
                    <img src={Facebook} alt=""/>
                    <img src={Youtube} alt=""/>
                </div>
            </div>
            
       </footer>
  </div>

     );
}
export default Bottom