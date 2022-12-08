import React from 'react'

export default function MovCard(props) {
  return (
    <>
     <div class="movie">
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.img}`} height={250} alt="" />
        <div class="movie-info">
          <p class="title">{props.name}</p>
          <div class="tags">
            <div class="tag">Popularity-{props.pop}</div>
            <div class="tag">Votes-{props.vote}</div>
            {/* <div class="tag">Drama-4568</div> */}
            <div class="rate"><p>Rating: {props.rating}/10</p></div>

            <div class="summary">
              <p class="text">
                {props.desc}<a
                  href="/"
                  >Read more</a
                >
              </p>
            </div>
          
          </div>
        </div>
      </div>

    </>
  )
}
