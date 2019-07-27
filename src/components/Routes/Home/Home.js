import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css'


class Home extends Component {
  // Renders the entire app on the DOM
componentDidMount(){
  this.props.dispatch({type: 'FETCH_MOVIES'});
}

nextPage = (item) => {
  console.log('in nextPage', item.id)

  this.props.dispatch({type: 'FETCH_DETAILS' , payload: item.id})

  this.props.history.push('/details')
}

  render() {
    return (
     <> 
      <div className="App">
        <p>This is Home Page</p>
      </div>

      <div>
        {this.props.reduxStore.movieList.map(item => {
          return(
            <div className = "movieImage" key={item.id}>
              <img src={item.poster} alt="" onClick = { (event) => this.nextPage(item)}/> 
              <p>{item.title}</p>
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