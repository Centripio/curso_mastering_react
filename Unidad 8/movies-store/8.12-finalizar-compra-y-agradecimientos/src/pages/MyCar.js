import React from 'react'
import Navbar from '../components/Navbar'
import CarContext from '../context/CarContext'
import './MyCar.css'
import {Link} from 'react-router-dom'
import APIInvoke from '../utils/APIInvoke'

class MyCar extends React.Component{

    async remove(e,movie){
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/car/${movie.id}`)
        this.context.update(response.body)
    }

    async buy(){
        const response = await APIInvoke.invokePOST(`/car/checkout`)
        if(response.ok){
            console.log(response)
            this.context.update([])
            this.props.history.push(`/gracias/${response.body.id}`)
            //window.location = `/gracias/${response.body.id}`
        }else{
            console.log(response.message)
        }
    }

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
                                            <button onClick={(e) => this.remove(e,movie.movie)} className="btn btn-danger btn-sm">X</button> {movie.movie.title}

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
                        <button onClick={this.buy.bind(this)} className="btn btn-success">Pagar</button>
                    </div>
                </div>
            </div>
        )
    }
}
MyCar.contextType = CarContext

export default MyCar