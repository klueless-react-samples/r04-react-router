import { React } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Contact } from '../pages';
import { Content } from '.';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <Content title="Page not found" description="Please use the menu above" />
      </Route>
    </Switch>
  );
}
