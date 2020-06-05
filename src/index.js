import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './App'
import './App.css'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './Store/Reducer/rootReducer'

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk)));

    const { useEffect } = React;

    const loader = document.querySelector('.Loader');
    
    // if you want to show the loader when React loads data again
    const showLoader = () => loader.classList.remove('Loader--hide');
    
    const hideLoader = () => loader.classList.add('Loader--hide');
    
    const App = ({ hideLoader }) => {
      useEffect(() => hideLoader(), []);
      
      return (
        <div><MainApp/></div>
      ); 
    }    

    setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <Provider store = {store}><App hideLoader={hideLoader} showLoader={showLoader}/></Provider>, document.getElementById('app')
  )
, 1000);