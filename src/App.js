import React, {useState} from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import personajes from "./personajes.json";
import CharacterDetail from "./Components/CharacterDetail/CharacterDetail";
import About from "./Components/About/About";

export default function App() {
  const [characters, setCharacters]= useState(personajes.Characters);
  

  return (
      <div>
        <Navbar />
        <Home characters={characters}/>
        <CharacterDetail />
        <About />
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
