import React from "react";
import "react-bootstrap";
// import The from "../image/Ellipse1.png"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/css/detail-account.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Profile from "./image/Ellipse.png";
// import { CgProfile } from "react-icons/cg";
// import { FiMail } from "react-icons/fi";
// import { RiVipFill } from "react-icons/ri";
// import { TbGenderBigender } from "react-icons/tb";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { SiGooglemaps } from "react-icons/si";
// import Button from "react-bootstrap/Button";
function Profile() {
    return (
      <div
        style={{ background: "black", height: "90.5vh", margin:"20px" }}
        className="d-flex align-items-center justify-content-center">
        <div
          style={{
            background: "#1f1f1f",
            padding: "25px",
            borderRadius: "5px",
            width: "40rem",
          }}>
          <Row>
            <Col sm={6} style={{ marginTop: "-5px", paddingRight: "55px", }}>
              <>
                <h4 className="mb-5 text-white">Personal Info</h4>
              </>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-white" style={{ fontSize: "" }}>
                    Anjenggggg
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Full name
                  </p>
                </span>
              </div>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector2.png")} className="me-3" style={{height:"30px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-white" style={{ fontSize: "14px" }}>
                    boy@mail.com
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Email
                  </p>
                </span>
              </div>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector3.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-white" style={{ fontSize: "14px" }}>
                    Active
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Status
                  </p>
                </span>
              </div>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector4.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-white" style={{ fontSize: "14px" }}>
                    Male
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Gender
                  </p>
                </span>
              </div>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector5.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-white" style={{ fontSize: "14px" }}>
                    0812-xxx-xxxx
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Mobile Phone
                  </p>
                </span>
              </div>
  
              <div className="d-flex">
             <img src={require( "../image/Vector5.png")} className="me-3 w-3 h-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-white" style={{ fontSize: "14px" }}>
                    0812-xxxx-xxxx
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Mobile Phone
                  </p>
                </span>
              </div>
            </Col>
            <Col sm={6} style={{ paddingLeft: "10px" }}>
              <img
                src={require( "../image/profile.png" )}
                alt="Profile"
                style={{
                  width: "280px",
                  height: "345px",
                  borderRadius: "5px",
                  left:"838px",
                  top:"163px",
                }}></img>
              <button
                className=" mt-3"
                style={{ background: "red", border: "none",
                position: "absolute;",
width: "280px",
height: "50px",
left: "838px",
top: "521px", }}>
                Change Photo Profile
              </button>{" "}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  
  export default Profile