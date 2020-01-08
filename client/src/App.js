import React from "react";
import Header from "../src/components/Header";
import Title from "../src/components/pages/Title";
import Login from "../src/components/pages/Login";
import Sorry from "../src/components/pages/Sorry";
import CreateAccount from "../src/components/pages/CreateAccount";
import Menu from "../src/components/pages/Menu";
import OilChange from "../src/components/pages/OilChange";
import Recalls from "../src/components/pages/Recalls";
import Repairs from "../src/components/pages/Repairs";
import FindCar from "../src/components/pages/FindCar";
import TireRotation from "../src/components/pages/TireRotation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./components/pages/Protected";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../src/components/css/style.css";

class App extends React.Component {

  render() {
    
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Header />
            <div className="container mainApp">
              <Switch>
                <Route exact path="/">
                  <Title />
                </Route>
                <Route path="/login">
                  <Login id="loginComp" />
                </Route>
                <Route path="/createAccount">
                  <CreateAccount />
                </Route>
                <Route path="/menu">
                  <Title />
                  <Menu />
                </Route>
                <PrivateRoute path="/oilChange" component={OilChange} />
                <PrivateRoute path="/tireRotation" component={TireRotation} />
                <PrivateRoute path="/findCar" component={FindCar} />
                <PrivateRoute path="/recalls" component={Recalls} />
                <PrivateRoute path="/repairs" component={Repairs} />
                <PrivateRoute path="/protected" component={Protected} />
                <Route>
                  <Sorry />
                </Route>
                </Switch>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
