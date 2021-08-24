import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Leg({ tag }) {
  return <div className="notice-leg">{tag}</div>;
}

export default function Bulletin() {
  const routes = [
    { path: "/a", name: "notice-leg-a", Component: Leg },
    { path: "/b", name: "notice-leg-b", Component: Leg },
    { path: "/c", name: "notice-leg-c", Component: Leg },
    { path: "/d", name: "notice-leg-d", Component: Leg },
    { path: "/e", name: "notice-leg-e", Component: Leg },
  ];
  const rip = (e) => {
    e.target.parentNode.classList.add("rip");
    setTimeout(() => e.target.parentNode.classList.add("hide"), 1500);
  };
  return (
    <div className="bulletin">
      <h1>bulletin</h1>
      <div className="notice">
        <div className="notice-main">
          <h1>Notice</h1>
        </div>
        <Router>
          <div>
            <ul className="notice-legs">
              {routes.map((route) => (
                <li>
                  <Link
                    key={route.path}
                    as={NavLink}
                    to={route.path}
                    activeClassName="active"
                    className="notice-leg"
                    exact
                    onClick={(e) => rip(e)}
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
                    unmountOnExit
                  >
                    <div className="slide">
                      <Component tag={path} />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </Router>
      </div>
    </div>
  );
}
