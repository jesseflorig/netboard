import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/home"
import Board from "./components/board"
import Controller from "./components/controller"
import Create from "./components/create"
import Lobby from "./components/lobby"

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Create} />
        <Route exact path="/:gameId/lobby" component={Lobby} />
        <Route exact path="/:gameId/board" component={Board} />
        <Route exact path="/:gameId/controller" component={Controller} />
      </Switch>
    </main>
  );
}

export default App;
