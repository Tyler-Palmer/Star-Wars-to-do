import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BountyProvider from './context/BountyProvider'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<BrowserRouter>
                    <BountyProvider>
                        <App />
                    </BountyProvider>
                </BrowserRouter>, document.getElementById('root'));

