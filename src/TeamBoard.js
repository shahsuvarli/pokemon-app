import React from "react";
import "./App.css";

class TeamBoard extends React.Component {
  render() {
    return (
      <div className={`team${this.props.number}`}>
        {this.props.players.map((player) => (
          <div className="player-detail" key={player.id}>
            <img
              key={player.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player.id}.png`}
              alt={player.name}
            />
            <h3>{player.name}</h3>
            <br />
            <div>{player.type}</div>
            <br />
            <div>{player.base_experience}</div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default TeamBoard;
