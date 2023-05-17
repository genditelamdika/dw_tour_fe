import { Link } from "react-router-dom"

const Card = (props) => {
    
    const objTv = Object.values(props.value.TR)
    // const objmovie = Object.values(props.value.Movies)
    console.log(objTv)
    const ListMovies = () => {
        return objTv.map((gendi) => {
            return (
                <Link to={`/Detail/${gendi.id}`} className="text-decoration-none">

                <div className="flex">
                <div className="props text-decoration-none">
                    <img style={{margin:"10px"}} src={require(`../images/Card/${gendi.images}.png` )} />
                    <p className="text-decoration-none">{gendi.title}</p>
                    <div className="flex">
                    <p style={{color:"yellow", textDecoration:"none"}}>IDR.{gendi.idr}</p>
                    <p style={{paddingLeft:"130px"}} >{gendi.negara}</p>

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
            <div className="flex gap-6">
                <ListMovies/>
            </div>
          
        </div>
    )
}

export default Card


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

