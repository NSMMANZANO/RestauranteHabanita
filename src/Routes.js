import React from "react";
import { Route, Switch } from "react-router-dom";
import Carta from "./pages/Carta";
import Pedironline from "./pages/Pedironline";
import Recetasyvideos from "./pages/Recetasyvideos";
import DondeEstamos from "./pages/DondeEstamos";
import Contactanos from "./pages/Contactanos";
import Eventos from "./pages/Eventos";
import HomePage from "./pages/HomePage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/carta" component={Carta} />
        <Route exact path="/pedironline" component={Pedironline} />
        <Route exact path="/recetasyvideos" component={Recetasyvideos} />
        <Route exact path="/dondeestamos" component={DondeEstamos} />
        <Route exact path="/contactanos" component={Contactanos} />
        <Route exact path="/eventos" component={Eventos} />

        {/* FREE */}
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
