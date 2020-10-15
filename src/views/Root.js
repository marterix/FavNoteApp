import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Root/App.css';
import Main from 'templates/Main';
import Twitter from './Twitter';
import Article from './Article';
import Note from './Note';

const Root = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Note} />
        <Route path="/twitters" component={Twitter} />
        <Route path="/articles" component={Article} />
      </Switch>
    </BrowserRouter>
  </Main>
);

export default Root;