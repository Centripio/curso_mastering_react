import React from 'react'
import {Link} from 'react-router-dom'
import './MovieCard.css'

export default class MovieCard extends React.Component{


    render(){
        const movie = this.props.movie
        return(
            <div className="card" >
                <img className="card-img-top" src={movie.banner} alt={movie.title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <div className="controls">
                        <Link to={`/${movie.id}`} className="btn btn-primary">Ver detalle</Link>
                    </div>
                </div>
            </div>
        )
    }
}
