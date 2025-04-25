import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full absolute top-0 z-50 mt-[2%]">
      {" "}
      <div className="flex gap-10 justify-center">
        <ul className="flex mt-6">
          {" "}
          <li className="py-[1%] px-[2%]">
            {" "}
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-all duration-300 focus:outline-none active:scale-100 active:translate-x-0"
            >
              Anasayfa
            </Link>
          </li>
        </ul>
        <ul className="flex mt-6">
          <li className="py-[1%] px-[2%]">
            <Link
              to="/about"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-all duration-300 focus:outline-none active:scale-100 active:translate-x-0"
            >
              Hakkımda
            </Link>
          </li>
        </ul>
        <ul className="flex mt-6">
          <li className="py-[1%] px-[2%]">
            <Link
              to="/contact"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-all duration-300 focus:outline-none active:scale-100 active:translate-x-0"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
