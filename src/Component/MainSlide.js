import React from 'react'
import './Mainslide.css'
const MainSlide = () => {
  return (
    <div>
        <div className='Slide'>
        <div className='container-fluid '>
        
        <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img srcSet="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9c06db25774a1ea8.png?q=50 2x, https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9c06db25774a1ea8.png?q=50 1x" className=" w-100" alt="App" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img srcSet='https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/3814cba7465b8ee5.jpg?q=50 2x, https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/3814cba7465b8ee5.jpg?q=50 1x' className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img srcSet='https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/1b23c9113048a6a3.jpg?q=50 2x, https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1b23c9113048a6a3.jpg?q=50 1x' className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img srcSet='https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/86037b95d956d960.jpg?q=50 2x, https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/86037b95d956d960.jpg?q=50' className="d-block w-100 " alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev carousel-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon carousel-dark bg-dark "   aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next carousel-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon carousel-dark bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>    
  </div>
    </div>
    </div>
  )
}

export default MainSlide