import React from 'react'
import Navbar from '../components/Navbar'
import CarContext from '../context/CarContext'
import './MyCar.css'
import {Link} from 'react-router-dom'

class MyCar extends React.Component{

    render(){
        const movies = this.context.movies
        console.log(movies)
        return(
            <div className="my-car">
                <Navbar/>
                <div className="main container">
                    <table>
                        <thead>
                            <tr>
                                <td>Titulo</td>
                                <td>Precio</td>
                                <td>Portada</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie => <tr key={movie.id}>
                                    <td>
                                        <div>
                                            <button className="btn btn-danger btn-sm">X</button> {movie.movie.title}

                                        </div>
                                    </td>
                                    <td className="price">$ {movie.movie.price}</td>
                                    <td className="banner">
                                        <img src={movie.movie.banner} alt={movie.movie.title} />
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <div className="controls">
                        <Link to="/" className="btn btn-warning">Seguir comprando</Link>
                        <button className="btn btn-success">Pagar</button>
                    </div>
                </div>
            </div>
        )
    }
}
MyCar.contextType = CarContext

export default MyCar