import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import page components
import Home from '../components/home';
import Work from '../components/pages/work/work';
import ProjectPage from '../components/pages/work/projectPage';
import Contact from '../components/pages/contact/contact';
import NotFound from '../components/404';

export const Routes = 
    <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path ="/work" component={ Work } />
            <Route path="/project" component={ ProjectPage } />
            <Route exact path="/contact" component={ Contact } />
            <Route component={ NotFound } />
        </Switch>
    </div>