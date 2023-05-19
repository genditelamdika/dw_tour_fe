import detail1 from "../images/detail1.png"
import detail2 from "../images/detail22.png"
import detail3 from "../images/detail33.png"
import detail4 from "../images/detail44.png"
import ihotel from "../images/ihotel.png"
import ilion from "../images/ilion.png"
import ieat from "../images/ieat.png"
import itime from "../images/itime.png"
import Footer from '../components/Footer'
import icalendar from "../images/icalendar.png"
import { Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const {id} = useParams();
    const detailTr = [
      {
        id:1,
        title:" 6D/4N Fun Tassie Vacation + Sydney",
        negara:"Australia",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:"IDR. 12,398,000",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
            {
        id:2,
        title:" 6D/4N Exciting Summer in ...",
        negara:"Amerika",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:"IDR. 22,398,000",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
            {
        id:3,
        title:"4D/3N Overland Jakarta B...",
        negara:"Indonesias",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:"IDR. 100,398,000",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
      {
        id:4,
        title:"4D/3N Overland Jakarta B...",
        negara:"Indonesias",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:"IDR. 100,398,000",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
      {
        id:5,
        title:"4D/3N Overland Jakarta B...",
        negara:"Indonesias",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:"IDR. 100,398,000",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
      {
        id:6,
        title:"4D/3N Overland Jakarta B...",
        negara:"Indonesias",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:"IDR. 100,398,000",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
    ] 
      const selectedTr = detailTr.find((tour) => tour.id === parseInt(id));
      return(
        <>
        <h1 style={{ marginLeft:"150px", marginTop:"50px",fontFamily:"Avenir",fontWeight:"bolder" }}>{selectedTr.title} </h1>
        <h1 style={{ marginLeft:"150px", marginTop:"10px",size:"24px", color:"#A8A8A8"}}>{selectedTr.negara}</h1>
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
    <div className="flex" style={{marginLeft:"150px"}}>
      <p style={{color:"#A8A8A8"}}>acomodation</p>
      <p style={{marginLeft:"120px", color:"#A8A8A8"}}>Tranformation</p>
      <p style={{marginLeft:"120px",color:"#A8A8A8"}}>Eat</p>
      <p style={{marginLeft:"120px",color:"#A8A8A8"}}>Time Date</p>
      <p style={{marginLeft:"150px",color:"#A8A8A8"}}>Calendar</p>

    </div>

    <div className="flex" >
      <div className="flex">
      <img style={{height:"30px",marginLeft:"150px"}} src={ihotel}/>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}> {selectedTr.Accommodation}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"40px"}} src={ilion}/>
        <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}} >{selectedTr.Transportation}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"50px"}} src={ieat}></img>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{selectedTr.Eat}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"50px"}} src={icalendar}></img>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{selectedTr.Datetrip}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"50px"}} src={itime}></img>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}> {selectedTr.Duration}</h3>
      </div>


    </div>
    <h1 style={{marginLeft:"150px"}}>Description</h1>
    <p style={{marginLeft:"150px"}}>{selectedTr.Description}</p>

    <div className="flex" style={{marginLeft:"150px"}}>
    <h1 style={{color:"yellow" , fontWeight:"bold", height: "33px",fontFamily: 'Avenir'}}>{selectedTr.Idr}</h1>
    <h1>/Person</h1>
    </div>

    <div style={{margin: "150px", marginTop:"0",marginBottom:"0"}}>
    <hr style={{ borderTop: "2px solid black" }} />
    </div>

    <div className="flex">
      <h1 style={{marginLeft:"150px"}}>Total</h1>
      <h1 style={{color:"yellow",marginLeft:"650px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir'}}>{selectedTr.Idr}</h1>
    </div>

    <div style={{margin: "150px", marginTop:"0",marginBottom:"0"}}>
    <hr style={{ borderTop: "2px solid black" }} />
    </div>
    <Button style={{
      marginLeft:"1000px",
      width: "213px",
      height: "50px",
      left: "1016px",
      top: "1284px",
      background:" #FFAF00",
      borderRadius:"5px"
    
    }}>Book</Button>

<div style={{paddingTop:"100px"}}>
          <Footer/>

            </div>

        
        </>

    )
}
export default Detail