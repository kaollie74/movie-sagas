import React, { Component } from 'react';
import {connect} from 'react-redux';



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

    console.log(this.props.reduxStore.movieDetails);
    
    return (
      <div className="App">
        <p>This is Edit Page</p>
         <>
          <div>
            <button onClick={this.handleBackToDetails}>Cancel</button>
            
            <input type='text' placeholder='title' value={this.state.name} onChange={ (event) => this.handleChangeFor('name', event)}/>
            <input type='text'  value={this.state.description} onChange={ (event) => this.handleChangeFor('description', event)}/>
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        </>
      </div>
    );
  }
}

const mapsToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapsToProps)(EditPage);