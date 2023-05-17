import detail1 from "../images/detail1.png"
import detail2 from "../images/detail2.png"
import detail3 from "../images/detail3.png"
import detail4 from "../images/detail4.png"
import { Carousel } from "react-bootstrap";
import { useState } from "react";
function Detail() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
        <>
        <h1 style={{ marginLeft:"150px", marginTop:"50px" }}> 6D/4N Fun Tassie Vacation + Sydney </h1>
        {/* <img src={detail1}></img> */}
        <Carousel activeIndex={index} onSelect={handleSelect} style={{marginTop:"50px",width:"80%", marginLeft:"150px", }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={detail2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={detail3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src={detail4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 style={{ marginLeft:"150px", marginTop:"50px" }}>Information Trip</h1>
        
        </>

    )
}
export default Detail