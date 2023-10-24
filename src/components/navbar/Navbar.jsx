import "./navbar.css";
import Logo from "../../assets/logo.svg";
// import API_BASE_URL from "../config/Config";

const Navbar = () => {


    return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_main">
          <div className="logo">
            <a href="https://abutech.uz/">
              <img
                src={Logo}
                alt="abutech logo"
                title="Abutech fintech company"
                className="nav_logo"
              />
            </a>
          </div>
          <div className="nav_info">
            <p className="nav_info_text">Arabjon Nishonov</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
