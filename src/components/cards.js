import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({ icon, title }) {
  return (
    <div className='card-body' style={{width:"200px",height:"330px"}}>
      <div className='image'>
        <img src={icon} alt="icon" />
      </div>
      <div className='card-textt'>
        <p>{title}</p>
        <p>A small river named Duren flows by their place and supplies</p>
      </div>
    </div>
  );
}

export default Cards;