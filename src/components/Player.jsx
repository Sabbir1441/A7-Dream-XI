import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({ player, handleSelectPlayer, }) => {
    const {
        name,
        country,
        image,
        role,
        battingType,
        bowlingType,
        biddingPrice,
        rating,
    } = player;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-5 items-center">
                <h2
                    className="flex items-center gap-2 text-lg
             font-bold"
                >
                    <FaUser /> {name}
                </h2>
                <div className="flex justify-between my-3">
                    <p className="flex items-center gap-2">
                        <IoFlagSharp /> {country}
                    </p>
                    <button className="btn btn-sm cursor-default">{role}</button>
                </div>
                <hr className="mb-3" />
                <div className="flex justify-between">
                    <p className="font-semibold">Rating :</p>
                    <p className="font-semibold">{rating}</p>
                </div>
                <div className="flex justify-between my-3">
                    <p className="font-semibold">{battingType} Bat</p>
                    <p className="font-semibold">{bowlingType}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold">Price: ${biddingPrice}</p>
                    <button onClick={() => handleSelectPlayer(player)} className="btn btn-sm btn-outline">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleSelectPlayer: PropTypes.func,
};

export default Player;