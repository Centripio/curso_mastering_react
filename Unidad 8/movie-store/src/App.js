import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import CarContext from './contexts/CarContext'
import APIInvoke from './utils/APIInvoke'
import MyCar from './pages/MyCar';
import Thanks from './pages/thank';

export default class App extends React.Component{

  constructor(args){
    super(args)
    this.state = {
      movies: [],
      update: this.update.bind(this),
      isAdded: this.isAdded.bind(this)
    }
  }

  async componentDidMount(){
    try {
      let myCar = await APIInvoke.invokeGET(`/car`)
      this.setState({
        movies: myCar.body
      })
    } catch (error) {
      console.log("error => ", error)
    }
  }


  isAdded(movie){
    let added = this.state.movies.find(x => x.movie.id == movie.id)
    console.log("isAdded =>", added)
    return added;
  }

  update(newCar){
    this.setState({
      movies: newCar,
      update: this.update.bind(this),
      isAdded: this.isAdded.bind(this)
    })
  }

  render(){
    return (
      <CarContext.Provider value={this.state} >
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/carrito" component={MyCar}/>
            <Route exact path="/gracias" component={Thanks}/>
            <Route path="/:movieId" component={MoviePage}/>
          </Switch>
        </Router>
      </CarContext.Provider>
    )
  }
}
