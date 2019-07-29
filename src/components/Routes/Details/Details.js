import React, { Component } from 'react';
import {connect} from 'react-redux';





class Details extends Component {
 

// function runs 'history.push' which will go back to the Home page
// where the list of movies resides. 
goBackHome = () => {
  console.log('in go Back Home Function');
  this.props.history.push('/')
}

// function activates onClick where it will send the App
// to the 'Edit Page'
handleEdit = () => {
  this.props.history.push('/EditPage')
}

  render() {

    let info = this.props.reduxStore.movieDetails;

    return (
      <>
        <div>
          <button onClick = {this.goBackHome}>Back To List</button>
          <button onClick = {this.handleEdit}>Edit</button>
        </div>
        
        <div className="App">
          
          <h1>Title</h1>
            <p> {info.title}</p>
          <h1>Genre</h1>
            <p>{info.name}</p>
          <h1>Description</h1>
            <p className = 'detailDescription'>{info.description}</p>
          
          
        </div>
     </>   
    );
  }
}

const mapsTOProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapsTOProps)(Details);