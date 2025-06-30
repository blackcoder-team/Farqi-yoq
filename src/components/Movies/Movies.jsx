import React, { useState } from "react";
import "../Movies/Movies.css";
import img from "../Movies/img/1.jpeg";
import img2 from "../Movies/img/2.jpeg";
import img3 from "../Movies/img/3.jpeg";
import img4 from "../Movies/img/4.jpeg";
import img5 from "../Movies/img/5.jpeg";
import img6 from "../Movies/img/6.jpeg";
import img7 from "../Movies/img/7.jpg";
import img8 from "../Movies/img/8.jpg";
import img9 from "../Movies/img/9.jpg";

const moviesData = [
  { id: 1, movieName: "Nokaut", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img, movieStar: "7.2", movieGanre: "war" },
  { id: 2, movieName: "John Uyik", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img2, movieStar: "9.5", movieGanre: "war" },
  { id: 3, movieName: "Troya", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img3, movieStar: "10", movieGanre: "war" },
  { id: 4, movieName: "Sevgi", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img4, movieStar: "-1", movieGanre: "milodrama" },
  { id: 5, movieName: "Farqi yuq", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img5, movieStar: "4.2", movieGanre: "milodrama" },
  { id: 6, movieName: "Farqi yuq", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img6, movieStar: "6.2", movieGanre: "milodrama" },
  { id: 7, movieName: "Balerina", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img7, movieStar: "9.2", movieGanre: "fantastik" },
  { id: 8, movieName: "Qasoskorlar", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img8, movieStar: "9", movieGanre: "fantastik" },
  { id: 9, movieName: "Мечь короля Артура", moviTitle: "Bu kino farqi yuq degan projectda qoraman xaqida", movieImg: img9, movieStar: "10", movieGanre: "fantastik" },
];

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const filteredMovies = selectedGenre === "all"
    ? moviesData
    : moviesData.filter((item) => item.movieGanre === selectedGenre);

  return (
    <div className="movies-cards mt-5 pt-5 container">
      <div className="movies-text text-center">
        <h1 className="pb-3 movies-title">Kinolar</h1>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button className="movies-btn" onClick={() => setSelectedGenre("all")}>Hammasi</button>
          <button className="movies-btn" onClick={() => setSelectedGenre("milodrama")}>Milo drama</button>
          <button className="movies-btn" onClick={() => setSelectedGenre("war")}>Urush</button>
          <button className="movies-btn" onClick={() => setSelectedGenre("fantastik")}>Fantastik</button>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {filteredMovies.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4" key={item.id}>
              <div className="movie-card position-relative">
                <img src={item.movieImg} alt={item.movieName} />
                <div className="movie-info">
                  <div className="year-country">{item.movieName}</div>
                  <div className="ratings">
                    <div className="imdb">IMDb {item.movieStar}</div>
                  </div>
                  <p className="class">{item.moviTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn movies-btn center">View more</button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
