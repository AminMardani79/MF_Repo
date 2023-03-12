import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


// Mount funtion to start up the app
const mount = (el)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        el
    )
}


// If we are in development and in isolation,
// call mount immediately

if(process.env.NODE_ENV === 'development'){
    console.log('development');
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function

export {mount}