type Movie = {
  id: number;
  title: string;
  year: number;
  image: string;
  description: string;
};

type Props = {
  movie: Movie;
  onBack: () => void;
};

function MovieDetails({ movie, onBack }: Props) {
  return (
    <div className="movie-details">
      <button onClick={onBack}>← Back</button>

      <img src={movie.image} alt={movie.title} />

      <h2>{movie.title}</h2>
      <h4>{movie.year}</h4>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;