import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import personajes from "./personajes.json";
import './App.css';

class App extends React.Component {
  state={
    characters: personajes.Characters
  }
  componentDidMount(){
    console.log(this.state.characters);
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <Home characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
