import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import {RouteWrapper} from './routes/RouteWrapper';
import BaseLayout from "./layouts/BaseLayout";
import Index from "./Subsecribe/Pay/index";
import {Home} from "./page/home";
import {About} from "./page/home";
import {Service} from "./page/home";

import {Comuncation} from "./page/home";
import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import index from "./Subsecribe/index";
 import './App.css'
 
function App() {
  

  return (
      <Router>
          <Switch>
               <RouteWrapper  path="/home" exact component={Home} layout={BaseLayout}/>
              <RouteWrapper path="/pay" exact component={Index} layout={BaseLayout}/>
               <RouteWrapper path="/about" exact component={About} layout={BaseLayout}/>
                  <RouteWrapper path="/service" exact component={Service} layout={BaseLayout}/>
                  <RouteWrapper path="/comuncation" exact component={Comuncation} layout={BaseLayout}/>

              <RouteWrapper path="/signIn" exact component={SignIn} layout={BaseLayout}/>
              <RouteWrapper path="/signUp" exact component={SignUp} layout={BaseLayout}/>
              <RouteWrapper path="/subscribe" exact component={index} layout={BaseLayout}/>
         

          </Switch>
      </Router>
  );
}

export default App;
