import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import SearchResult from './containers/SearchResult';



const Home = () => {
    return (
        <Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={App} />
                   <Route path="/:name" component={SearchResult} />
                </Switch>
            </Router>
        </Fragment>
    )
}

ReactDOM.render(<Home />, document.getElementById('root'));
