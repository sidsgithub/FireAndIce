import React from "react";
import { useSelector } from 'react-redux';
import "./App.css";
import Character from "./features/character/character";
import House from "./features/house/house";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./features/landing";
import { Backdrop, CircularProgress } from "@mui/material";

function App() {
  const backdropOpen = useSelector(state => state.backdrop) || false;
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/character">
          <Character />
        </Route>
        <Route path="/house">
          <House />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Router>
  );
}

export default App;
