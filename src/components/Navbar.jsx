import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between bg-base-100 py-6 px-2">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fixtures</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Schedules</a>
              </li>
            </ul>
          </div>
          <a href="#">
            <img className="max-w-16" src={logo} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ul className="menu hidden md:flex menu-horizontal px-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixtures</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>
          <a className="border px-6 py-3 rounded-xl flex items-center gap-2 font-bold">
             Coin 
          </a>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
