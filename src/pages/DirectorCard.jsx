import { useParams, Link, Outlet, useOutletContext } from "react-router-dom"

function DirectorCard() {
    const { directors, setDirectors } = useOutletContext()
    console.log(directors)
    const { id } = useParams()
    const director = directors.find((d) => d.id.toString() === id.toString())

  if (!director) {
    return <h2>Director not found.</h2>
  }

  const updateDirector = (updatedDirector) => {
    setDirectors(pDirectors => pDirectors.map(d => d.id === director.id ?
        updatedDirector  : d
    ))
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to={`movies/new`}>Add New Movie</Link>
      <Outlet context={{updateDirector, directors}} />
    </div>
  )
}

export default DirectorCard
