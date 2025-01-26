import bgImage from "../assets/bg-shadow.png"

const Newsletter = () => {
    return (
        <div className="container mx-auto backdrop-blur-sm bg-[#ffffff56] p-5 border rounded-2xl absolute -top-44 left-0 right-0">
            <div className="bg-white py-20 px-2 flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover rounded-xl border text-center" style={{ backgroundImage: `url(${bgImage})` }}>
                <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>
                <p className="text-lg text-slate-600 font-inter my-3">Get the latest updates and news right in your inbox!</p>
                <div className="flex flex-col md:flex-row gap-3">
                    <input className="input input-bordered px-6" type="text" placeholder="Enter your email" />
                    <button className="btn bg-gradient-to-tr from-pink-400 to-yellow-400 text-black px-5">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;