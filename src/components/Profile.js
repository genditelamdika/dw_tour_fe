import React from "react";
import "react-bootstrap";
// import The from "../image/Ellipse1.png"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/css/detail-account.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from '../components/Footer'
import Historytrip from "./Historytrip";

function Profile() {
    return (
      <>
      <div

        style={{ background:"E5E5E5",  height: "90.5vh", margin:"20px" }}
        className=" d-flex align-items-center justify-content-center">
        <div
        // className="bg-secondary"
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "5px",
            width: "40rem",
            border:"1px solid black",
          }}>
          <Row>
            <Col sm={6} style={{ marginTop: "-5px", paddingRight: "55px", }}>
              <>
                <h4 className="mb-5 text-white">Personal Info</h4>
              </>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "" }}>
                    Userkun
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
                  <p className="text-dark" style={{ fontSize: "14px" }}>
                    boy@mail.com
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Email
                  </p>
                </span>
              </div>
  
  
              <div className="d-flex mb-3 text-dark">
              <img src={require( "../image/Vector4.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "14px" }}>
                    0812xxxxxxxxxxxx
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Mobile Phone
                  </p>
                
                </span>
              </div>
  
              <div className="d-flex mb-3">
              <img src={require( "../image/Vector5.png")} className="me-3" style={{height:"40px"}}></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "14px" }}>
                    jalan kaki di sawangan
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}>
                    Alamat
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
                style={{ background: "yellow", border: "none",
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
        <Historytrip/>
      </>
    );
  }
  
  export default Profile