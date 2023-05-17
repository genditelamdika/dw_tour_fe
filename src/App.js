import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail"
import Navbars from "./components/Header";
// import LoginModal from "./page/LoginModal"
import Login from "./components/Login"
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Props from "./components/Props";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import "./style.css"

import Profile from "./components/Profile";




function App() {
  // const [islogin, setislogin]=useState(false)
  return (
    <div>
      <Router>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Detail/:id" element={<Detail />} />
        
        <Route path="/Login" element={<Login />} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
    </div>
  )
}

export default App;

// import React, { useContext } from 'react';
// import AuthProvider from './components/AuthProvider';
// import Login from './components/Login';
// import AuthContext from './components/AuthContext';

// function App() {
//   const { user, password, logout } = useContext(AuthContext);
  
//   return (
//     <div>
//       {user ? (
//         <>
//           <p>Welcome, {user.email}!</p>
//           {password.password}
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// }

// export default function() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }
