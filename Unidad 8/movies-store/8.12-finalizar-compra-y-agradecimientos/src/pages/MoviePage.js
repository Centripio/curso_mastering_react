import React from 'react'
import Navbar from '../components/Navbar'
import APIInvoke from '../utils/APIInvoke'
import './MoviePage.css'
import CarContext from '../context/CarContext'

class MoviePage extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            movie: {}
        }
    }

    async componentDidMount(){

        const movieId = this.props.match.params.movieId
        const response = await APIInvoke.invokeGET(`/movies/${movieId}`)
        this.setState({
            movie: response.body
        })
    }

    async add(){
        /*
        let movies = this.context.movies
        movies.push({
            id: 1,
            movie: this.state.movie
        })
        */
        const request = {
            id: this.state.movie.id
        }
        const response = await APIInvoke.invokePUT(`/car`, request)
        this.context.update(response.body)
    }

    render(){
        const movie = this.state.movie

        const isAdded = this.context.isAdded(movie)

        return(
            <div className="movie-page">
                <Navbar/>
                <div className="main container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <div className="movie-banner">
                                <img src={movie.banner} alt={movie.title}/>
                                {
                                    isAdded ? <button disabled  className="btn" >Ya está en el carrito</button>
                                        : <button onClick={this.add.bind(this)} className="btn btn-success" >Agregar al carrito</button>
                                }
                                
                            </div>
                            
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="movie-data">
                                <label >Titulo:</label>
                                <p>{movie.title}</p>

                                <label>Resumen:</label>
                                <p>{movie.resumen}</p>

                                <label>Año:</label>
                                <p>{movie.year}</p>

                                <label>Genero:</label>
                                <p>{movie.gender}</p>

                                <label>Director:</label>
                                <p>{movie.director}</p>

                                <label>Idioma:</label>
                                <p>{movie.language}</p>

                                <label>País:</label>
                                <p>{movie.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
MoviePage.contextType = CarContext
export default MoviePage