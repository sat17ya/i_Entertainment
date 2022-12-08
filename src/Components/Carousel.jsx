import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Assets/Images/img1.jpg';
import img2 from '../Assets/Images/img2.jpg';
import img3 from '../Assets/Images/img3.jpg';
import img4 from '../Assets/Images/img4.jpg';
import img5 from '../Assets/Images/img5.jpg';
// import MovCard from './MovCard';
import MovCardMap from './MovCardMap';
import MovRecentMap from './MovRecentMap';
// import MovieCard from './MovieCard';

export default function Carousels() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <Carousel
          autoPlay={true}
          pauseOnHover={false}
          arrows={false}
          infinite={true}
          responsive={responsive}
          autoPlaySpeed={3000}
          >
            <div><img src={img1} height={700} style={{width:'100%'}} alt="" /></div>
            <div><img src={img2} height={700} style={{width:'100%'}} alt="" /></div>
            <div><img src={img3} height={700} style={{width:'100%'}} alt="" /></div>
            <div><img src={img4} height={700} style={{width:'100%'}} alt="" /></div>
            <div><img src={img5} height={700} style={{width:'100%'}} alt="" /></div>
          </Carousel>
        </div>
      </div>
      {/* <MovCard/> */}
      <div className='bg-dark'>

      <MovCardMap/>
      <MovRecentMap/>
      </div>
      {/* <MovieCard/> */}
    </>
  )
}
