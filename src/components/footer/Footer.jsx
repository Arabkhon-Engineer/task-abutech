import "./footer.css";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_hr"></div>
      <div className="container">
        <div className="footer_main">
          <div className="footer_left">
            <div className="footer_left_logo">
              <a href="https://abutech.uz/">
                <img src={Logo} alt="abutech" width='350px' title="abutech fintech company" />
              </a>
            </div>
          </div>
          <div className="footer_right">
            <div className="footer_links">
              <div className="mysocial_link">
                <div className="mySocial_link_title">My social links</div>
                <div className="mysocial_link_items">
                    <p>github</p>
                    <p>instagram</p>
                    <p>twitter</p>
                    <p>vkontact</p>
                    <p>apple</p>
                    <p>amazon</p>
                </div>
              </div>
              <div className="faang_company_link">
                <div className="footer_links_title">FAANG companies</div>
                <div className="faang_company_link_items">
                    <p>github</p>
                    <p>instagram</p>
                    <p>twitter</p>
                    <p>vkontact</p>
                    <p>apple</p>
                    <p>amazon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
