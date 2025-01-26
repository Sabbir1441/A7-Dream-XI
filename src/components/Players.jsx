import { useEffect, useState } from "react";
import Player from "./Player";
import PropTypes from "prop-types";

const Players = ({ handleSelectPlayer }) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("players.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                players.map(player => <Player key={player.playerId} player={player} handleSelectPlayer={handleSelectPlayer}></Player>)
            }
        </section>


    );
};

Players.propTypes = {
    handleSelectPlayer: PropTypes.func,
};

export default Players;