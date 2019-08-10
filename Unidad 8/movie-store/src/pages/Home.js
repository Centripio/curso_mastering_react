import React from 'react'
import Navbar from '../components/Navbar'
import APIInvoker from '../utils/APIInvoke'
import MovieCard from '../components/MovieCard';
import './Home.css'

export default class Home extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            load: false,
            movies: [],
            totalResults: 0
        }
    }

    async componentDidMount(){
        try {
            const response = await APIInvoker.invokeGET('/movies')
            console.log("response=>",response)
            this.setState({
                load: true,
                movies: response.body,
                totalResults: 0
            })
        } catch (error) {
            console.log(error)
            this.setState({
                load: true,
                movies: [],
                totalResults: 0
            })
        }
    }

    render(){
        return(
            <div id="home">
                <Navbar/>

                <div className="catalog">
                    <div className="container">
                        <div className="row">
                            {this.state.movies.map((m,index) => <div key={index} className="col-xs-12 col-md-6 col-lg-4">
                                <MovieCard movie={m}/>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}