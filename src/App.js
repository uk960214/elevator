import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import useSound from "use-sound";

import "./App.css";
import Door from "./containers/Door";
import Bulletin from "./containers/Bulletin";

import bgmSrc from "./sound/bgm.mp3";

function App() {
  const [sound, setSound] = useState(null);

  const routes = [
    { path: "/", name: "Door", Component: Door },
    { path: "/bulletin", name: "Bulletin", Component: Bulletin },
  ];

  const [bgm] = useSound(bgmSrc, { volume: 0.3, interrupt: true });

  return (
    <div>
      {sound === null ? (
        <div>
          <h1>Would you like to allow sounds?</h1>
          <input
            type="button"
            value="yes"
            onClick={() => {
              setSound(true);
              bgm();
            }}
          ></input>
          <input
            type="button"
            value="no"
            onClick={() => setSound(false)}
          ></input>
        </div>
      ) : (
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
                    unmountOnExit
                  >
                    <div className="slide">
                      <Component sound={sound} />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
