import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Layout/Navbar";
import ProjectDetails from "./components/Project/ProjectDetails";
import CreateProject from "./components/Project/CreateProject";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Dashboard}/>
        <Route path="/projects/:id" component={ProjectDetails}/>
        <Route path="/dashBoard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/create-project" component={CreateProject} />
      </BrowserRouter>
    </div>
  );
}

export default App;
