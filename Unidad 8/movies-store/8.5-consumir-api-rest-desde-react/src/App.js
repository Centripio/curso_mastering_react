import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      movies: []
    }
  }

  async componentDidMount(){

    const request = {
      id: 1,
      name: "oscar"
    }

    const data = {
      method: "GET",
      //body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const response = await (await fetch(`https://api.github.com/users/centripio`, data)).json()
      console.log(response)
      this.setState({
        movies: response.body
      })
    } catch (error) {
      console.log(error.message)
    }
    

    /*
    fetch(`http://localhost:9999/movies`, data)
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          movies: response.body
        })
      })
      .catch(err => {
        console.log(err.message)
      })
    */
  }

  render(){

    const movies = this.state.movies

    return (
      <div>
        <button className="btn btn-success" >test button</button>

        {movies.map(mov => <p>{mov.title}</p>)}

      </div>
    )
  }
}

export default App;
