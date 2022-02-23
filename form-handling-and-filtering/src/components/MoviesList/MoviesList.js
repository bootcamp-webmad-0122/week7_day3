import { movies as moviesFormFakeAPI } from "../../fakeApi"
import { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard"
import AddMovie from "../AddMovie/AddMovie"
import FilterMovies from "../MoviesFilter/MoviesFilter"

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState(moviesFormFakeAPI)
    const [moviesListData, setMoviesListData] = useState(moviesFormFakeAPI)

    const removeMovie = movieId => {
        const filteredMovies = moviesList.filter(elm => elm._id != movieId)
        setMoviesList(filteredMovies)
    }

    const includeMovie = newMovie => {
        const moviesCopy = [...moviesList, newMovie]
        setMoviesList(moviesCopy)

        const moviesDataCopy = [...moviesListData, newMovie]
        setMoviesListData(moviesDataCopy)
    }

    const showFilteredMovies = str => {

        let filteredMovies

        if (str === 'All') {
            filteredMovies = moviesListData
        } else {
            filteredMovies = moviesListData.filter((movie) => movie.title[0].toLowerCase() === str.toLowerCase())
        }

        setMoviesList(filteredMovies)
    }


    return (

        <section>

            <h1>Listado de pelis!</h1>

            <AddMovie includeMovie={includeMovie} />

            <FilterMovies showFilteredMovies={showFilteredMovies} />

            <hr />
            {
                moviesList.map(movie => <MovieCard key={movie._id} {...movie} removeMovie={removeMovie} />)
            }
        </section>
    )
}

export default MoviesList