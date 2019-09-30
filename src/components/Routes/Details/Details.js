import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FormHelperText } from '@material-ui/core';
//import images from ''

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



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
    const { classes } = this.props;

    let info = this.props.reduxStore.movieDetails;

    return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '5vh'}} >
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.goBackHome}
          >
            Back To List
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleEdit}
          >
            Edit
          </Button>
        </div>

        <div>
          <Card style={{backgroundColor: 'skyblue', width: '80vh', height: '85vh'}}>
            <Card.Header> <h1> {info.title}</h1></Card.Header>
            <Card.Content>
              <Image src={info.poster} alt="image" />
              <h1>Genre</h1>
              <h4>{info.genre_name}</h4>
              <Card.Description style={{display: 'inline-block', justifyContent: 'center'}}>
                <h1>Description</h1>
                <p style={{wordBreak: 'break-word', hyphens:'auto'}}>{info.description}</p>
              </Card.Description>

            </Card.Content>
          </Card>

        </div>
      </div>
    );
  }
}

const mapsToProps = (reduxStore) => ({
  reduxStore
})

export default withStyles(styles)(connect(mapsToProps)(Details));