import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Card, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App/App.css';
//import './Home.css';



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
                style={{ backgroundColor: 'skyblue', width: '80vh' }}
              >

                <Card.Content>

                  <Card.Header
                    className='movieTitle'
                  >
                    {item.title}
                  </Card.Header>

                  <Image
                    className='imageDisplay'
                    src={item.poster}
                    size='small'
                    alt=""
                    onClick={(event) => this.nextPage(item)}
                    
                  />

                  <Card.Description>
                     <h5 style={{wordBreak: 'break-word', hyphens: 'auto'}}> {item.description}</h5>
                  </Card.Description>


                </Card.Content>
                <div className='button'>
                <Button onClick={(event) => this.nextPage(item)}>Read</Button>
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