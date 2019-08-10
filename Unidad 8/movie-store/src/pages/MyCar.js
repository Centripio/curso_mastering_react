import React from 'react'
import CarContext from '../contexts/CarContext';
import Navbar from '../components/Navbar';
import './MyCar.css'
import APIInvoke from '../utils/APIInvoke';
import {Link} from 'react-router-dom'

export default class MyCar extends React.Component{

    constructor(args){
        super(args)
    }

    async removeCar(e,movie){
        e.preventDefault()

        try {
            let newCar = await APIInvoke.invokeDELETE(`/car/${movie.id}`)
            this.context.update(newCar.body)
        } catch (error) {
            console.log("error => ", error)
        }
    }

    async buy(){
        try {
            let response = await APIInvoke.invokePOST('/car/checkout', null)
            if(response.ok){
                this.context.update([])
                //window.location = "/gracias"
                this.props.history.push('/gracias')
            }
        } catch (error) {
            console.log("error => ", error)
        }
    }

    render(){
        console.log(this.context)
        return(
            <div>
                <Navbar/>

                <div className="mycard-container">
                    <div className="container">
                        <div className="col-xs-12">
                            {this.context.movies.length > 0 ? <table>
                                <thead>
                                    <tr>
                                        <td>Titulo</td>
                                        <td>Precio</td>
                                        <td>Portada</td>
                                    </tr>
                                        
                                </thead>
                                <tbody>
                                    {this.context.movies.map( movie => (
                                        <tr key={movie.id}>
                                            <td>
                                                <button className="btn btn-danger btn-sm delete" onClick={(e) => this.removeCar(e,movie.movie)}>X</button> 
                                                <span className="title">{movie.movie.title}</span>
                                            </td>
                                            <td>
                                                <p className="price">${movie.movie.price}</p>
                                            </td>
                                            <td>
                                                <div className="banner">
                                                    <img src={movie.movie.banner} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> : <p className="card-empty">No hay productos en el carrito</p>}

                            <div className="card-controls">
                                <Link to={"/"} className="btn btn-warning">Seguir comprando</Link>
                                {this.context.movies.length > 0 ? <button to={"/gracias"} onClick={() => this.buy()} className="btn btn-success">Pagar</button> : <p></p>}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

MyCar.contextType = CarContext