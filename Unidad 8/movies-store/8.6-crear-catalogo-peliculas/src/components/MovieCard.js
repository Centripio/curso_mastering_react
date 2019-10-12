import React from 'react'
import {Link} from 'react-router-dom'
import './MovieCard.css'

const MovieCard = (props) => {

    const movie = props.movie

    return(
        <article className="card">
            <div className="card-content">
                <img src={movie.banner} alt={movie.title} />
            </div>
            <div className="card-control">
                <p>{movie.title}</p>
                <Link className="btn btn-success" to={"#"} >Ver detalle</Link>
            </div>
        </article>
    )
}
export default MovieCard