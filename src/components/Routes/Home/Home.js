import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css'



class Home extends Component {
  

  // Runs dipatch on page load to retrieve moves from DB
componentDidMount(){
  this.props.dispatch({type: 'FETCH_MOVIES'});
}

// Runs a dispatch which sends the specific id of the image over to index.js
// Afterwards, it goes to the next 'details' page where that new info will 
// appear on the DOM
nextPage = (item) => {
  console.log('in nextPage', item.id)

  this.props.dispatch({type: 'FETCH_DETAILS' , payload: item.id})

  this.props.history.push('/details')
}

  render() {
    return (
     <> 
      <div className="App">
        <h1>Movies</h1>
      </div>

      <div>
          
        {this.props.reduxStore.movieList.map(item => {
          return(
            <div className = "movieImage" key={item.id}>
              <p className = "movieTitle">{item.title}</p>
              <img className ="imageDisplay"src={item.poster} alt="" onClick = { (event) => this.nextPage(item)}/> 
              
              <p>{item.description}</p>
            </div>
          ) // end return 
      
        })} 
      </div>
    </>

    );
  }
}

const getToPropsState = (reduxStore) => ({
  reduxStore
})

export default connect(getToPropsState)(Home);