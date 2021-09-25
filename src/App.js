import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import personajes from "./personajes.json";
import CharacterDetail from "./Components/CharacterDetail/CharacterDetail";
import About from "./Components/About/About";

class App extends React.Component {
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

export default App;
