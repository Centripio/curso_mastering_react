import React from 'react'
import Navbar from '../components/Navbar'
import APIInvoke from '../utils/APIInvoke'
import CarContext from '../contexts/CarContext'
import './MoviePage.css'

class MoviePage extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            load: false, 
            movie: {}
        }
    }

    async componentDidMount(){
        try {
            const movieID = this.props.match.params.movieId
            let response = await APIInvoke.invokeGET(`/movies/${movieID}`)
            this.setState({
                load: true,
                movie: response.body
            })
        } catch (error) {
            console.log(error)
        }
    }

    async addToCar(e){
        let request = {
            id: this.state.movie.id
        }
        let response = await APIInvoke.invokePUT(`/car`, request)
        this.context.update(response.body)
    }

    render(){
        console.log(this.state.movie)
        const movie = this.state.movie
        const isAdded = this.context.isAdded(this.state.movie)
        return(
            <div id="moviePage">
                <Navbar/>
                <div className="movie-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <aside>
                                    <img src={movie.banner} alt={movie.title} />
                                    {isAdded ? <button className="btn btn-default" disabled>Ya está en el carrito</button> : <button onClick={() => this.addToCar()} className="btn btn-success">Agregar al carrito</button>}
                                    
                                </aside>
                            </div>
                            <div className="col-xs-12 col-md-8">
                                <main>
                                    <form>
                                        <label>Titulo:</label>
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
                                    </form>
                                </main>
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