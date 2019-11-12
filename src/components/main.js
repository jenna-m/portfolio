import React from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import Navigation from './navigation';
import { Routes } from '../constants/routes';
import Footer from './footer';


class Main extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Navigation />
                    { Routes }
                    <Footer />
                </ScrollToTop>
            </Router>
        );
    }
}

export default withRouter(Main);