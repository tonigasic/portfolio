import React from 'react';
import '../assets/css/App.css';
import image from '../assets/images/myPic.jpg'
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Amazon from "../Pages/Amazon";
import Messenger from "../Pages/Messenger";

function App() {
  return (
      <Router>
          <div className="app">
              <Switch>
                  <Route path="/about">
                      <Header tab={'about'}/>
                      <img className="app__image" src={image} alt="" />
                      <AboutMe/>
                  </Route>
                  <Route path="/skills">
                      <Header tab={'skills'}/>
                      <img className="app__image" src={image} alt="" />
                      <MySkills/>
                  </Route>
                  <Route path="/work/amazon">
                      <Header tab={'work'}/>
                      <img className="app__image" src={image} alt="" />
                      <Amazon/>
                  </Route>
                  <Route path="/work/messenger">
                      <Header tab={'work'}/>
                      <img className="app__image" src={image} alt="" />
                      <Messenger/>
                  </Route>
                  <Route path="/work">
                      <Header tab={'work'}/>
                      <img className="app__image" src={image} alt="" />
                      <MyWork/>
                  </Route>
                  <Route path="/contact">
                      <Header tab={'contact'}/>
                      <img className="app__image" src={image} alt="" />
                      <Contact/>
                  </Route>
                  <Route path="/">
                      <Header tab={'home'}/>
                      <img className="app__image" src={image} alt="" />
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
