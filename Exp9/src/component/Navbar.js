
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [Account, setAccount] = useState(false);
  const [name1, setName] = useState('');
  const state = location.state || {}; // Provide an empty object as a default if 'state' is undefined
  let isAlertVisible = state.showSuccess || false;
  let authtoken = state.authtoken; // Removed the optional chaining operator

  const onclickhandler = (e)=> {
    setAccount(false);
    isAlertVisible = false;
    authtoken=null;
    setName('');
  }


  useEffect(() => {
    if (authtoken) {
      setAccount(true);
      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/auth/getuser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                authtoken: authtoken,
              }),
            }
          );
          const data = await response.json();
          console.log(data);

          if (data.firstname) {
            setName(data.firstname);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      setAccount(false);
    }
  }, [authtoken]);
  return (
    <div style={{position:"fixed",width:"100%", zIndex: 999 }}>
      {Account && (
        <div className='alert alert-success my-0' role='alert'>
          Sign up completed successfully! 
        </div>
      )}

      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white">Gaming Galaxy</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ShopByCategory" className="nav-link text-white">
                  ShopByCategory
                </Link>
              </li>
            </ul>
            <Link to="/cart">

            <button type="button"  className="btn btn-outline-info mx-3">Cart</button>
            </Link>
            {!Account && (
              <form className="d-flex" role="search">
                <Link to="/Login">
                  <button className="btn btn-outline-success" type="submit">
                    Log In
                  </button>
                </Link>
              </form>
            )}
            {Account && (
              <div class="dropdown">
              <button className='mx-2' onClick={()=>{
                navigate("/addtocart", { state: { firstname: name1 } });
              }} style={{width:"45px",backgroundColor:"#28242c",border:"0"}}>
                <img style={{width :"100%",height:"100%"}} src="Cart.png" alt=".."/>
              </button>
              <button class="btn btn-secondary">
                Hello { name1 }
              </button>
              <button type="button" onClick={onclickhandler} class="btn btn-outline-danger mx-2">Log Out</button>
            </div>
            )}
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;
