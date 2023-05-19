import { Link } from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Cardss = (props) => {
    
    const objTv = Object.values(props.value.TR)
    // const objmovie = Object.values(props.value.Movies)
    console.log(objTv)
    const ListMovies = () => {
        return objTv.map((gendi) => {
            return (
                <Link to={`/Detail/${gendi.id}`} className="text-decoration-none ">

                <div className="d-flex flex-wrap gap-3 bg-white" >
                <div className="props text-decoration-none">
                    <p className="text-decoration-none" style={{marginLeft:"290px",marginTop:"30px",position:"absolute",background:"white",borderRadius:"5px 0 0 5px",textAlign:"center",width:"50px",height:"30px"}}>{gendi.quote}</p>
                    <img style={{margin:"10px"}} src={require(`../images/Card/${gendi.images}.png` )} />
                    <p className="text-decoration-none" style={{paddingLeft:"20px",fontWeight:"bold"}}>{gendi.title}</p>
                    <div className="flex">
                    <p style={{color:"#FFAF00",fontWeight:"bold",paddingLeft:"20px"}}>IDR.{gendi.idr}</p>
                    <p style={{paddingLeft:"130px",fontWeight:"bold",color:"#878787"}} >{gendi.negara}</p>

                    </div>
                </div>
                </div>
                </Link>
            )
        })
    }
    

    return (
        <div>
            <div>
                <p className=" text-white text-3xl mb-8">Tour</p>
            </div>
            <div className="flex gap-3 flex-wrap">
                <ListMovies/>
            </div>
          
        </div>
    )
}

export default Cardss


// export default function Props(Tv) {
//     return (
//         <>
//         <div className="props">
//             <h1>
//                 Ini Props!
//             </h1>
//             <img src={require(`../image/${Tv.img}`)}></img>
//             <p>{Tv.name}</p>
//             <p>{Tv.years}</p>

//         </div>
//         <div>
//         <img src={require(`../image/${Tv.img}`)}></img>
//             <p>{Tv.name}</p>
//             <p>{Tv.years}</p>
//         </div>
//         </>
//     )
// }

