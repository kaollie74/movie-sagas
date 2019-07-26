import React, { Component } from 'react';
import {connect} from 'react-redux';


class Home extends Component {
  // Renders the entire app on the DOM
componentDidMount(){
  this.props.dispatch({type: 'FETCH_MOVIES'});
}

nextPage = () => {
  this.props.history.push('/details')
}

  render() {
    return (
     <> 
      <div className="App">
        <p>This is Home Page</p>
      </div>

      <div className='container'>
        {this.props.reduxStore.movieList.map(item => {
          return(
            <div className = "movieImage" key={item.id}>
            <img src={item.poster} alt="" onClick ={this.nextPage}/> 
            
            <p>{item.title}</p>
    
            
            <p>{item.description}</p>
            </div>
          )
      
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