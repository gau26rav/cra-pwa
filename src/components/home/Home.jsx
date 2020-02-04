import React, { Suspense } from "react";
import { useState } from "react";
import "./styles/home.css";
import { Route, Switch, Link } from "react-router-dom";
import Landing from "../landing/landing";
//import Employees from '../emp-crud/Employees';
const Employees = React.lazy(() => import('../emp-crud/Employees'))

const Lazy = (Component) => {
  return props => <Suspense fallback=""><Component {...props} /></Suspense>
}

const Home = () => {
  return (
    <>
      <header>
        <h1>List of Concepts to go through</h1>
      </header>

      <section>
        <div id="concepts-list">
          <Link to="/emp">Employees CRUD</Link><br />
          <Link to="hooks">Sample CRUD</Link>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/emp" component={Lazy(Employees)} />
          </Switch>
        </div>
      </section>
    </>
  );
};

export default Home;
