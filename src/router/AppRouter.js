import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/shared/Navbar";
import { App } from "../App";
import { NotFound } from "../Pages/NotFound";
import { Footer } from "../components/shared/Footer";
import { User } from "../components/User";
import { Users } from "../Pages/Users";
import { AddUser } from "../components/AddUser";
import { EditUser } from "../components/EditUser";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/usuarios" component={Users} />
          <Route path="/usuario/:id" component={User} />
          <Route path="/agregar-usuario" component={AddUser} />
          <Route path="/editar/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}