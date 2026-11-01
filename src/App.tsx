import { useState } from "react";
import "./App.css";
import { movies } from "./movies";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  return (
    <div className="app">
      <h1>🎬 Movie Explorer</h1>
      <p>Explore Your Favourite Movies</p>

      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      ) : (
        <MovieList
          movies={movies}
          onSelect={setSelectedMovie}
        />
      )}
    </div>
  );
}

export default App;