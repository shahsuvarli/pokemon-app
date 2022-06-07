import React from "react";
import "./App.css";
// import Board from "./Board";
import data from "./pokemon";
import TeamBoard from "./TeamBoard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: data,
      team1: [],
      team2: [],
      t1sum: 0,
      t2sum: 0,
    };
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    let tempTeam1 = [];
    let tempTeam2 = this.state.pokemons;
    while (tempTeam1.length < tempTeam2.length) {
      let randomPlayer =
        tempTeam2[Math.floor(Math.random() * tempTeam2.length)];
      tempTeam1 = [...tempTeam1, randomPlayer];
      tempTeam2 = tempTeam2.filter((player2) => player2 !== randomPlayer);
    }
    this.setState({
      team1: tempTeam1,
      team2: tempTeam2,
      t1sum: tempTeam1.reduce(
        (sum, player) => (sum = sum + player.base_experience),
        0
      ),
      t2sum: tempTeam2.reduce(
        (sum, player) => (sum = sum + player.base_experience),
        0
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <h1>Pokemon Game</h1>
          <div className="character">
            {this.state.pokemons.map((pokemon) => (
              <div className="character-detail" key={pokemon.id}>
                <img
                  key={pokemon.id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
              </div>
            ))}
          </div>
          <div className="board">
            <TeamBoard
              players={this.state.team1}
              number={1}
              title="Team 1"
              status={
                this.state.t1sum > this.state.t2sum
                  ? "Winner!"
                  : this.state.t1sum < this.state.t2sum
                  ? "Loser!"
                  : ""
              }
              sum={this.state.t1sum}
            />
            <button onClick={this.startGame}>START</button>
            <TeamBoard
              players={this.state.team2}
              number={2}
              title="Team 2"
              status={
                this.state.t2sum > this.state.t1sum
                  ? "Winner!"
                  : this.state.t2sum < this.state.t1sum
                  ? "Loser!"
                  : ""
              }
              sum={this.state.t2sum}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
