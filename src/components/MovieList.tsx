import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  title: string;
  year: number;
  image: string;
  description: string;
};

type Props = {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
};

function MovieList({ movies, onSelect }: Props) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default MovieList;