import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
      <>
        <div>
          <Button variant="contained" color= "secondary" className={classes.button} onClick = {this.goBackHome}>Back To List</Button>
          <Button variant="contained" color= "primary" className = {classes.button} onClick = {this.handleEdit}>Edit</Button>
        </div>
        
        <div className="App">
          
          <h1>Title</h1>
            <p> {info.title}</p>
          <h1>Genre</h1>
            <p>{info.name}</p>
          <h1>Description</h1>
            <p className = 'detailDescription'>{info.description}</p>
          <img src="" alt="image"/>
          
        </div>
     </>   
    );
  }
}

const mapsToProps = (reduxStore) => ({
  reduxStore
})

export default withStyles(styles)(connect(mapsToProps)(Details));