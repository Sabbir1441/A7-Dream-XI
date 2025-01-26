
import { useState } from "react";
import Players from "./Players";
import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const MainSection = ({ coin, setCoin }) => {
    const [isActive, setIsActive] = useState(true);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleActiveButton = (tab) => {
        if (tab === 'available') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const handleSelectPlayer = (player) => {
        if (selectedPlayers.find(selectedPlayer => selectedPlayer.playerId === `${player.playerId}`)) {
            toast.error(`${player.name} already selected.`)
            return;
        }
        if (selectedPlayers.length > 5) {
            toast.info('You cannot add more than 6 players');
            return;
        }
        const availableCoin = coin - player.biddingPrice;
        if (availableCoin <= 0) {
            toast.warn("You don't have enough coin. Please collect free credit!");
            return;
        }
        setCoin(availableCoin);

        const newSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newSelectedPlayers);
        toast.success(`Successfully selected ${player.name}`)
    }

    const handleDeletePlayer = (playerId, name) => {
        const newSelectedPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerId !== playerId);
        setSelectedPlayers(newSelectedPlayers);
        toast.success(`Successfully Removed ${name}`)

    }
    return (
        <div className="container mx-auto my-16 px-2">
            <section className="flex justify-between items-center mb-7">
                <h3 className="text-2xl font-bold">{isActive ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}</h3>
                <div className="join">
                    <button onClick={() => handleActiveButton('available')} className={`px-5 py-3 join-item border ${isActive && 'bg-[#E7FE29]'}`}>
                        Available
                    </button>
                    <button onClick={() => handleActiveButton('selected')} className={`px-5 py-3 join-item border ${isActive ? '' : 'bg-[#E7FE29]'}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </section>

            {
                isActive ? <Players handleSelectPlayer={handleSelectPlayer} /> : <SelectedPlayers selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer} setIsActive={setIsActive} />
            }



        </div>
    );
};

MainSection.propTypes = {
    coin: PropTypes.number,
    setCoin: PropTypes.func
};

export default MainSection;