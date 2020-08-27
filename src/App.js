import React from 'react';
import './index.css';
import Nav from './Nav'
import Form from './Form';
import Footer from './Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import {} from 'bootstrap/dist/css/bootstrap.min.css'


function App() {
    return(
        <div>
            <BrowserRouter>
                <Nav />
                <Form />                
                <Footer />
            </BrowserRouter>
            
        </div>
    )
}

export default App