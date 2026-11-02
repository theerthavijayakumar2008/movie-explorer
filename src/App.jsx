import React, { useState } from "react";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief enters people's dreams to steal secrets."
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Adventure",
    year: 2014,
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "Explorers travel through space to find a new home."
  },
  {
    id: 3,
    title: "Avatar",
    genre: "Fantasy",
    year: 2009,
    rating: 7.9,
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    description: "Explore the beautiful world of Pandora."
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces a dangerous criminal in Gotham City."
  },
  {
    id: 5,
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    rating: 7.9,
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description: "A memorable story unfolds aboard a famous ocean liner."
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers unite for one final mission."
  }
];

function MovieCard({ movie, onSelect }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre} • {movie.year}</p>
        <span>⭐ {movie.rating}/10</span>
        <button onClick={() => onSelect(movie)}>
          View Details
        </button>
      </div>
    </div>
  );
}

function MovieGrid({ movies, onSelect }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🎬 Movie Explorer</h1>
        <p>Discover your next favourite movie</p>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </header>

      <main>
        <h2>Popular Movies</h2>

        <MovieGrid
          movies={filteredMovies}
          onSelect={setSelectedMovie}
        />

        {filteredMovies.length === 0 && (
          <p>No movies found.</p>
        )}

        {selectedMovie && (
          <div className="modal" onClick={() => setSelectedMovie(null)}>
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="close"
                onClick={() => setSelectedMovie(null)}
              >
                ✕
              </button>

              <img src={selectedMovie.image} alt={selectedMovie.title} />
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.genre} • {selectedMovie.year}</p>
              <p>⭐ {selectedMovie.rating}/10</p>
              <p>{selectedMovie.description}</p>
            </div>
          </div>
        )}
      </main>

      <footer>Made with ❤️ using React</footer>
    </div>
  );
}

export default App;
      
