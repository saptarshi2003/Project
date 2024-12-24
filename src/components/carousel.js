import React from 'react'


export default function Carousel() {
  return (
    <div id="testimonial-carousel" className="carousel slide carousel-fade" data-ride="carousel" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner" id='carousel'>
      <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
      <form className="d-flex">
    <input className="form-control me-2 outline-white" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-white text-white bg-success" type="submit">Search</button>
  </form>

  </div>

        <div className="carousel-item active">
          <img className="d-block w-100" src="/pizza.jpeg" style={{width:"400px",height:"600px",filter:"brightness(40%)"}} alt="burger"/>
          
        </div>
        <div className="carousel-item">
          
          <img className="d-block w-100" src="/burger.jpeg" style={{width:"400px",height:"600px",filter:"brightness(40%)"}} alt="pizza"/>
          
        </div>

        <div className="carousel-item">
          
          <img className="d-block w-100" src="/noodles.jpeg" style={{width:"400px",height:"600px",filter:"brightness(40%)"}} alt="noodles"/>
          
        </div>

      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">

        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>


      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>


    </div>
  )
}
