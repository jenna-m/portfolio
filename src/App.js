import React from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main';
import './App.css';


export default withRouter(function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
})