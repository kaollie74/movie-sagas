import React, { Component } from 'react';
import {connect} from 'react-redux';





class Details extends Component {
  // Renders the entire app on the DOM


goBackHome = () => {
  console.log('in go Back Home Function');
  this.props.history.push('/')
}

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
          <p>This is Details Page</p>
          <p>Title: {info.title}</p>

        <p>{info.description}</p>
      
        
        <p>GENRE: {info.name}</p>
          
        </div>
     </>   
    );
  }
}

const mapsTOProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapsTOProps)(Details);