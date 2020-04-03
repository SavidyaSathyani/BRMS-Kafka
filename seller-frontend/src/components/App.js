import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import ThankYouPage from './ThankYouPage.jsx';

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/thanks" exact component={ThankYouPage} />
                </div>
            </Router>
        );
    } 
}

export default App;
