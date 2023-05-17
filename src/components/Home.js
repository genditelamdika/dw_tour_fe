// import The from "../image/thewitcher.png"
import Vector1 from "../images/Vector1.png"
import Cards from './cards';
import Props from "./Props";
import Footer from '../components/Footer'


import { Container, Image, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';

// import ExampleForm from "/hooks/ExampleForm";
function Home(){
  const Tour = {
    TR : {
      tr1: {
        id:1,
        images:"Rectangle1",
        title:"6D/4N Fun Tessie",
        negara:"Australia",
        idr:"12.398.00",
      },
      tr2: {
        id:2,
        title:"ah yang sudaha",
        images:"Rectangle2",
        negara:"Amerika",
        idr:"12.398.00",
      },
      tr3: {
        id:3,
        title:"ah yang bener",
        images:"Rectangle1",
        negara:"Australia",
        idr:"12.398.00",
      },
      // tr4: {
      //   id:4,
      //   title:"ah yang bener",
      //   images:"Rectangle1",
      //   negara:"Australia",
      //   idr:"12.398.00",
      // }
    }
    
  }

    return(
      <div className="bg">
        <div className="the">
          <h1 style={{fontSize:"100px", color:"white"}}>Explore</h1>
          <p style={{fontSize:"50px", color:"white"}}>Your Amazing City Together</p>
          <div>

          </div>
          {/* <Stack direction="horizontal"> */}
          <div>

          
          <p>Find great place to holiday</p>
          <Form.Group
            className="d-flex flex-column justify-content-center w-120"
            controlId="formSearch"
            style={{ width:"800px", height:"100px" }}
          >
            <Form.Control
              className="py-1 fs-5 my-4"
              style={{
                
                borderColor: "#BCBCBC",
                borderWidth: "3px",
                backgroundColor: "white",
                // color: "rgb(210,210,210,0.25)",
              }}
              type="search"
              placeholder="Search"
            />
          </Form.Group>

          </div> 
        {/* <img  src={require( "../images/pantai.png")} alt="gambar"  className=""></img> */}
        
      
        </div>


        <img className="kontol" style={{position:"fixed",position:"absolute",zIndex:-1, top:"0"}}   src={require( "../images/pantai.png")} alt="gambar"></img>
        {/* <Props className="text-decoration-none" value={movie}/> */}
        {/* <Card style={{ width: '18rem' }} className="best">
      <Card.Body>
        <Image src={Vector1}></Image>
        <Card.Title>Best Travel Agent</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> */}
     <div className="card-group">
              <Cards icon={Vector1} title="Best Price Guarantee"/>
              <Cards icon={Vector1} title="Travellers Love Us"/>
              <Cards icon={Vector1} title="Best Travel Agent"/>
              <Cards icon={Vector1} title="Our Dedicated Support"/>
          <Props className="text-decoration-none" value={Tour}/>
            </div>
            <div style={{paddingTop:"1200px"}}>
          <Footer style={{marginTop:"800px"}}/>

            </div>

          {/* </div> */}
    </div>
    )
}
export default Home