import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css'
import {Card, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



class Home extends Component {


  // Runs dipatch on page load to retrieve moves from DB
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  // Runs a dispatch which sends the specific id of the image over to index.js
  // Afterwards, it goes to the next 'details' page where that new info will 
  // appear on the DOM
  nextPage = (item) => {
    console.log('in nextPage', item.id)

    this.props.dispatch({ type: 'FETCH_DETAILS', payload: item.id })

    this.props.history.push('/details')
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Movies</h1>
        </div>

        <div className="movieContainer">

          {this.props.reduxStore.movieList.map(item => {
            return (
              <Card 
              className="movieImage" 
              key={item.id}
              >
                <Card.Header>{item.title}</Card.Header>
                <Image className="imageDisplay" src={item.poster} alt="" onClick={(event) => this.nextPage(item)} />
                <div className='detailDescription'>
                <p >{item.description}</p>
                </div>
                
              </Card>
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