import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./App.css";
import Door from "./containers/Door";
import Bulletin from "./containers/Bulletin";

function App() {
  const routes = [
    { path: "/", name: "Door", Component: Door },
    { path: "/bulletin", name: "Bulletin", Component: Bulletin },
  ];

  return (
    <Router>
      <div>
        <ul>
          {routes.map((route) => (
            <li>
              <Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="slide"
                timeout={{ enter: 5000, exit: 5000 }}
              >
                <div className="slide">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
