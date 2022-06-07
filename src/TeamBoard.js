import React from "react";
import "./App.css";

class TeamBoard extends React.Component {
  render() {
    return (
      <>
        <div className={`team${this.props.number}`}>
          <h2>
            {this.props.title} : {this.props.status} ({this.props.sum})
          </h2>
          <div className="cards">
            {this.props.players.map((player) => (
              <div className="player-detail" key={player.id}>
                <img
                  key={player.id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player.id}.png`}
                  alt={player.name}
                />
                <h4>{player.name}</h4>
                <div>{player.type}</div>
                <br />
                <div>{player.base_experience}</div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TeamBoard;
