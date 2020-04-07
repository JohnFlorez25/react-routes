import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Main from '../components/Main';
import { NotFound } from '../components/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
