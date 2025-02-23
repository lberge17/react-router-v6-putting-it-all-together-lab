import { useOutletContext, useParams } from "react-router-dom"

function MovieCard() {
  const { id, movieId } = useParams()
  const { directors } = useOutletContext()
  const director = directors.find(d => d.id.toString() === id.toString())

  if (!director) return <h2>Director not found.</h2>
  
  const movie = director.movies.find(m => m.id.toString() === movieId.toString())

  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard
