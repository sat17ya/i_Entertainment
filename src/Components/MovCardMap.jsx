import React, { useEffect, useState } from "react";
import MovCard from "./MovCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MovCardMap() {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=82e8eaae6fc5d2f86ca73b8c8c24a580&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((val) => {
        return  setData(val.results);
      });
  }, []);
  const [data, setData] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
    <div className="">
    <h2 className="text-white text-center mb-3">Most Popular </h2>
      <Carousel
        autoPlay={false}
        
        pauseOnHover={false}
        arrows={true}
        infinite={false}
        responsive={responsive}
        autoPlaySpeed={3000}
      >
        {data.map((val) => {
          return (
            <div className="bg-dark">
              <MovCard
                name={val.original_title}
                desc={val.overview}
                rating={val.vote_average}
                pop={val.popularity}
                vote={val.vote_count}
                img={val.poster_path}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
   
    </>
  );
}
