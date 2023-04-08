import React from 'react'
import Design from './Design'
import Footer1 from './Footer1'
import Footer2 from './Footer2'

import MainSlide from './MainSlide'
import NavProdut from './NavProdut'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Responsive from './Slide2'
import Slide3 from './Slide3'
const Home = () => {
  var value ="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/972e4bba49749c28.jpeg?q=50 2x, https://rukminim1.flixcart.com/fk-p-flap/480/480/image/972e4bba49749c28.jpeg?q=50 1x"
  
  return (
    <div>
        <NavProdut />
        <MainSlide />
      <Slide1 />
     <Design />
     <Slide2 />
     <Design data={value} />
     <Design />
     <Slide3 />
     <Design />
     <Design />
     <Design />
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home