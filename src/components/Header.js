import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Dropdownn from "../image/Ellipse1.png"
import bill from "../image/bill.png"
import userr from "../image/userr.png"
import logout from "../image/logout.png"
import filmm from "../image/filmm.png"
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') || false);
  const [handleDropdown, setHandleDropdown] = useState(false);

  const handleLogin = (isAdmin) => {
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('isAdmin', isAdmin);
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
  };
   return <nav>
          <img src={require( "../images/navba1.png")} alt="gambar"></img>
          {/* <Home/> */}
    <div className="left-side" style={{position:"absolute"}} >
        <ul>
          <li> 
          < Link to= {"/"} className="text-white" >
          <img   src={require( "../images/Icon.png")} alt="gambar"></img>
             </Link>
          </li>
          
        </ul>
      </div>  
      {/* <img  src={require( "../image/netflic.png")} alt="gambar"></img> */}
      <div className="right-side">
  {isLoggedIn ? (
    <Dropdown className="dark">
      <Dropdown.Toggle className="">
      <img
            type="button"
            // data-bs-toggle="dropdownn"
            onClick={() => setHandleDropdown(!handleDropdown)}
            src={Dropdownn}
            alt="gam"
          />
      </Dropdown.Toggle>
      {handleDropdown && (
        <Dropdown.Menu className="bg-dark">
          {isAdmin ? (
            <>

          <Dropdown.Item  className="bg-dark d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
            <img src={bill}/>
            <Link to="/Profile"className="text-white fw-semibold text-decoration-none">
              Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item  className="bg-dark d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
              <img src={userr}/>
            <Link to="/Pay"className="text-white fw-semibold text-decoration-none">
              Pay</Link>
              </Dropdown.Item>
             </> 
          ) : (
            <>
              <Dropdown.Item className="bg-dark" style={{

              }}>
              <img src={filmm}/>
            <Link to="/Film"className="text-white fw-semibold text-decoration-none">
              Film </Link>
          </Dropdown.Item>
              <Dropdown.Item className="bg-dark">
              <img src={userr}/>
            <Link to="/Transaction">
              Transaction </Link>
          </Dropdown.Item>
            </>

          )}
          <NavDropdown.Divider />
         <NavDropdown.Item className="bg-dark text-white" style={{padding:"10px"}} onClick={handleLogout}>
          <img src={logout}/>
          Logout 
         </NavDropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  ) : (
    <>
      <div className="r" style={{position:"absolute", marginRight:"100px"}}>
        <Register/>
      </div>
      <div   className="b" style={{position:"absolute" }}>
        <Login onLogin={handleLogin} />
      </div>
    </>
  )}
</div>

</nav>
    
}
export default Header;
