import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Routes/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import{ takeEvery, put} from 'redux-saga/effects';
import Axios from "axios";
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


/***************************************** ROOT SAGA *******************************/
function* rootSaga() {

    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_DETAILS', fetchDetails)
    yield takeEvery('UPDATE_DETAILS', updateDetails)

}

/***************************************** FETCH MOVIES *****************************/
function* fetchMovies () {

    try{
        const response = yield Axios.get('/movies');
        yield put({type: 'SET_MOVIES', payload: response.data})
    }
    catch(error){
        console.log('Error (index.js) retrieving from SERVER', error);
        
    }
} // end of FETCH MOVIES

/******************************************* FETCH DETAILS **********************************/
function* fetchDetails (action){
    try{
       
        const response = yield Axios.get(`/movies/${action.payload}`)
        yield put ({type: 'SET_MOVIE_DETAILS', payload: response.data })
    } 
    catch(error){
        console.log('Error (index.js) retrieving from SERVER IN FETCH DETAILS', error);
        
    }
}

function* updateDetails(action){
    try {
        
        console.log(action.payload);
        
        yield Axios.put(`movies/update/${action.payload.id}`, action.payload);

        console.log('this is action.payload in updateDetails', action.payload.id);

        yield put ({type: 'FETCH_DETAILS', payload: action.payload.id});

        yield put ({type: 'FETCH_MOVIES'});
    }
    catch (error){
        console.log('ERROR, Updating Movies', error);
        
    }
}



// Used to store movies returned from the server
const movieList = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genreList = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = {}, action) =>{
    if (action.type === 'SET_MOVIE_DETAILS'){
        return action.payload;
    }
    return state;

}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieList,
        genreList,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
