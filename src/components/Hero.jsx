import bgImage from "../assets/bg-shadow.png";
import heroImage from "../assets/banner-main.png";
import "../index.css";
import PropTypes from 'prop-types';


const Hero = ({ handleCoinAdd }) => {
    return (
        <div
            className="container mx-auto px-2 py-16 bg-[#131313] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-6 rounded-xl"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <img src={heroImage} alt="" />
            <h2 className="text-5xl text-center font-black text-white">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h2>
            <p className="text-slate-400 text-xl text-center font-inter">
                Beyond Boundaries Beyond Limits
            </p>
            <span className="border rounded-2xl border-[#e7fe29]">
                <button onClick={handleCoinAdd} className="bg-[#E7FE29] px-7 py-4 rounded-2xl text-xl font-bold border-4 hover:border-[#E7FE29] border-[#131313]">
                    Claim Free Credit
                </button>
            </span>
        </div>
    );
};


Hero.propTypes = {
    handleCoinAdd: PropTypes.func
};


export default Hero;