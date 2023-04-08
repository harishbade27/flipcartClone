import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import './Slides.css'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
const Slide2 = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [value, setvalue] = useState([])
  useEffect(() => {
    axios.get("data2.json")
      .then((res) => {
        setvalue(res.data.slice(0,10))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(value)
  return (
    <>
      <div className='container-fluid mt-5 ' id="Sliders ">
        <div className='row border  '  >
          <div className="col-lg-2 mt-5">
              <h2 className="text-center mt-5">Top Products</h2>
              <button className="Bt btn-primary ">VIEW ALL</button>
              <img src="gift.png" className="img-fluid" />
          </div>
          <div className="col-lg-10  ">
          <Slider {...settings}>
            {
              value.map((item) => {
                return (
                  <div className="col-lg-3 w-100 mt-3  ">
                    <img id="img1" src={item.image} />  
                    <div className="mt-3 ms-5">
                    <h5 >{item.title.slice(0,15)}</h5> 
                    <p className="cssPrice  t">From &#8377;{item.price}</p>
                     <p className="cssPrd ">{item.description.slice(0,20)}</p>
                    </div>
                    </div>
                )
              })
            }
          </Slider>
          </div>
        </div>
      </div>

      </>
  )
}

export default Slide2