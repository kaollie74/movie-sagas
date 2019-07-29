import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'



const styles = theme => ({
  button: {
    margin: 25,
    
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
});


class EditPage extends Component {
  // Renders the entire app on the DOM

  

  state = {
    id: this.props.reduxStore.movieDetails.id,
    name: '',
    description: '',
  }

  handleBackToDetails = () => {

    this.props.history.push('/details')
  }

  handleChangeFor = (propertyName, event) => {

    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    })
    
    console.log(this.state);
    

  }

  handleSubmit = () => {
    console.log('in Handle Submit');
      this.props.dispatch({type: 'UPDATE_DETAILS', payload: this.state})
      this.props.history.push('/details')
  }



  render() {

  const { classes } = this.props;

  let movie = this.props.reduxStore.movieDetails;

  
    
    return (
      <div className="App">
        <h1>Edit: {movie.title}</h1>
         <>
          <div>
            <Button variant="contained" color="secondary" className= {classes.button} onClick={this.handleBackToDetails}>Cancel</Button>
            
            <TextField 
              type='text' 
              label='title' 
              className={classes.textField} 
              margin="normal" 
              variant="outlined" 
              value={this.state.name} 
              onChange={ (event) => this.handleChangeFor('name', event)}
            />
            <TextField 
              type='text' 
              label='Description' 
              className={classes.textField} 
              margin="normal" 
              variant="outlined"
              value={this.state.description} 
              onChange={ (event) => this.handleChangeFor('description', event)}
            />
            <Button variant="contained" color="primary" className= {classes.button} onClick={this.handleSubmit}>Save</Button>
          </div>
        </>
      </div>
    );
  }
}

const mapsToProps = (reduxStore) => ({
  reduxStore
})

export default withStyles(styles)(connect(mapsToProps)(EditPage));