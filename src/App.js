import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousels from "./Components/Carousel";
// import MovieCard from "./Components/MovieCard";


export default function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Carousels/>}/>
    </Routes>
    </BrowserRouter>
      {/* <Carousels/>
      <MovieCard/> */}
    </>
  );
}
