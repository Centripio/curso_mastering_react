import React from 'react'
import APIInvoke from '../utils/APIInvoke'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

export default class Home extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            movies: []
        }
    }

    async componentDidMount(){
        const response = await APIInvoke.invokeGET("/movies")
        this.setState({
            movies: response.body
        })
    }

    render(){
        const movies = this.state.movies
        return(
            <div>
                <Navbar/>
                <div className="main container">
                    <div className="row">
                        {
                            movies.map(mov => <div key={mov.id} className="col-sm-12 col-md-6 col-lg-4">
                                <MovieCard movie={mov} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}