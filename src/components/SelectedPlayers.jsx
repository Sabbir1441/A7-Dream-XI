
import PropTypes from "prop-types";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ setIsActive, selectedPlayers, handleDeletePlayer }) => {
    return (
        <div className="space-y-4 container mx-auto">
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.playerId} selectedPlayer={selectedPlayer} handleDeletePlayer={handleDeletePlayer} />)
            }

            <button onClick={() => setIsActive(true)} className="btn bg-[#E7FE29]">Add More Player</button>
        </div>
    );
};

SelectedPlayers.propTypes = {
    setIsActive: PropTypes.func,
    selectedPlayers: PropTypes.object,
    handleDeletePlayer: PropTypes.func
};

export default SelectedPlayers;