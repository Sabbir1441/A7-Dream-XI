import PropTypes from "prop-types";
import { IoTrashBin } from "react-icons/io5";

const SelectedPlayers = ({ selectedPlayer, handleDeletePlayer }) => {
    const {
        playerId,
        name,
        image,
        role,
    } = selectedPlayer;
    return (
        <>
            <div className="p-5 border rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <img
                            className="w-28 rounded-lg"
                            src={image}
                            alt=""
                        />
                        <div>
                            <h2 className="text-xl font-bold">{name}</h2>
                            <p>{role}</p>
                        </div>
                    </div>
                    <IoTrashBin onClick={() => handleDeletePlayer(playerId, name)} className="text-4xl text-red-600 cursor-pointer" />
                </div>
            </div>
        </>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayer: PropTypes.object,
    handleDeletePlayer: PropTypes.func
};

export default SelectedPlayers;