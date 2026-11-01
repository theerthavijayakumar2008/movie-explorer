type Movie = {
  id: number;
  title: string;
  year: number;
  image: string;
  description: string;
};

type Props = {
  movie: Movie;
  onSelect: (movie: Movie) => void;
};

function MovieCard({ movie, onSelect }: Props) {
  return (
    <div
      className="movie-card"
      onClick={() => onSelect(movie)}
    >
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <button>View Details</button>
    </div>
  );
}

export default MovieCard;