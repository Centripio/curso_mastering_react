import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import CarContext from './context/CarContext'
import MyCar from './pages/MyCar';
import APIInvoke from './utils/APIInvoke';
import ThanksPage from './pages/ThanksPage';

class App extends React.Component {


  constructor(args){
    super(args)
    this.state = {
      movies: [],
      update: this.update.bind(this),
      isAdded: this.isAdded.bind(this)
    }
  }

  async componentDidMount(){
    const reponse = await APIInvoke.invokeGET("/car")
    this.setState({
      movies: reponse.body
    })
  }

  update(newContext){
    this.setState({
      movies: newContext
    })
  }

  isAdded(movie){
    return this.state.movies.find(x => x.movie.id === movie.id)
  }

  render(){
    return (
      <CarContext.Provider value={this.state} >
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/carrito" exact component={MyCar} />
            <Route path="/:movieId" exact component={MoviePage} />
            <Route path="/gracias/:orderId" exact component={ThanksPage} />
          </Switch>
        </Router>
      </CarContext.Provider>
    )
  }
}

export default App;
