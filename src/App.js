import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import personajes from "./personajes.json";
import CharacterDetail from "./Components/CharacterDetail/CharacterDetail";
import CharacterParams from "./Components/CharacterDetail/CharacterParams";
import About from "./Components/About/About";

export default function App() {
  const [charactersInfo, setCharacters] = useState([]);

  //COMPONENT DID MOUNT    
  useEffect(() => {
    setCharacters(personajes.Characters)
  }, [])

  return (
    <div>
      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home characters={charactersInfo} />
        </Route>
        <Route exact path="/charDetail">
          <CharacterDetail />
        </Route>
        <Route exact path="/charDetail/:id">
          <CharacterParams />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

      </Switch>
    </div>
  );
}



/* class App extends React.Component {
  state={
    characters: personajes.Characters
  }

  render(){
    return (
      <div>
        <Navbar />
        <Home characters={this.state.characters}/>
        <CharacterDetail />
        <About />
      </div>
    );
  }
}

export default App; */
