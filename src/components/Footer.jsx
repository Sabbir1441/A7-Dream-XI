import footerLogo from "../assets/logo-footer.png";
const Footer = () => {
    return (
        <div className="bg-[#06091A] pt-80 md:pt-52 mt-72">
            <div className="container mx-auto px-2">
                <img className="mx-auto" src={footerLogo} alt="" />
                <div className="text-slate-500 flex flex-col md:flex-row gap-8 justify-between my-8">
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-slate-300">About Us</h4>
                        <p>
                            We are a passionate team <br /> dedicated to providing the best{" "}
                            <br /> services to our customers.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-slate-300">
                            Quick Links
                        </h4>
                        <ul className="list-disc space-y-2">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Fixtures</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-3 text-slate-300">
                            Subscribe
                        </h4>
                        <p className="text-slate-500">
                            Subscribe to our newsletter for the <br /> latest updates.
                        </p>
                        <div className="join mt-3">
                            <input
                                className="input input-bordered join-item"
                                placeholder="Email"
                            />
                            <button className="btn join-item rounded-r-lg bg-gradient-to-tr from-pink-400 to-yellow-400 text-black px-5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-slate-400" />
            <p className="text-center py-6 text-slate-300">
                @2024 Az Industries BD | All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;