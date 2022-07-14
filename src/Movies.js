import React, { Component } from 'react';
import './movies.css';
import {getMovies} from './services/fakeM'
class Movies extends Component {
  state = { 
    movies:getMovies()
   } 
   delete = (movie)=>{
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies})
   }
  render() { 
    const {length:count} = this.state.movies;
    if(count===0) return <h2 className='mt-5'>there's No Movies Yet</h2>
    return (
      <main className='container'>
        <p className='mt-4'>there's {count} movies in Database</p>
        <table className='table table-hover table-stripped border mt-5 '>
          <thead>
            <tr>
              <th>TiTle</th>
              <th>GENRE</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.state.movies.map(movie=>
            <tr key={movie._id} >
              <td>{movie.title}</td>
              <td>{movie.genre._id}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><button onClick={()=>{this.delete(movie)}} className='btn btn-danger'>
                <i className='fa fa-trash'></i>
                </button></td>
            </tr>
          )}
          </tbody>
        </table>

      </main>
       
    );
  }
}


export default Movies;
