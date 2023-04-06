import React from 'react'
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <>
      
      <div className='container-fluid container-fluid-2'>
      <nav class="navbar navbar-expand-lg  ">

  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100' style={{height:"64px",width:"64px"}}></img>
          <a class="nav-link active" aria-current="page" href="#">Fashion</a>
        
        </li>

        <li class="nav-item">
        <img src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' style={{height:"64px",width:"64px"}}></img>
          <a class="nav-link active" href="/home">Mobiles</a>
        </li>
        
        <li class="nav-item">
        <img src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' style={{height:"64px",width:"64px"}}></img>
          <a class="nav-link active" href="#">ELectronics</a>
        </li>

        <li class="nav-item">
        <img src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' style={{height:"64px",width:"64px"}}></img>
          <a class="nav-link active" href="#">Top Offers</a>
        </li>
       
        <li class="nav-item">
        <img src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' style={{height:"64px",width:"64px"}}></img>
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
        <img src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' style={{height:"64px",width:"64px"}}></img>
          <a class="nav-link active" href="#">Appliances</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
      </div>

    </>
  )
}

export default Header2
