import React from 'react'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div>
      <div className='container-fluid bg-primary'>
        <div className='container bg-primary'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid">
              <div>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' id="logo"/>
                <span className='ex'><i>Explore <b>plus</b></i><img className='star' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'  /></span>
              </div>
              
             
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-conpxtrols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <form className="d-flex">
                <input type="search" placeholder="Search for products, brands and more" aria-label="Search" id='nav' />
                <AiOutlineSearch id='icon' color='blue' />
                <button id="login">Log in</button>
              </form>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"> Become a Seller</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  active"><i className="bi text-light w-50 bi-cart4 text-danger" id="cart"> Cart</i> </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar