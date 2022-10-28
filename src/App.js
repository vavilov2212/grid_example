import "./styles.scss";
import GooglePlay from "./static/GooglePlay/GooglePlay";
import AppleStore from "./static/AppleStore/AppleStore";
import ExscudoLogoSmall from "./static/ExscudoLogoSmall/ExscudoLogoSmall";
import Icon from "./static/Icon";
import FacebookIcon from "./static/FacebookIcon/FacebookIcon";
import TwitterIcon from "./static/TwitterIcon/TwitterIcon";

import "./Footer.scss";

export default function App() {
  const NAVIGATION_LINKS = [
    {
      label: "wallet",
      link: "/#wallet"
    },
    {
      label: "buyAndSell",
      link: "/#buy"
    },
    {
      label: "exchange",
      link: "/#exchange"
    },
    {
      label: "advantages",
      link: "/#advantages"
    },
    {
      label: "proprietaryBlockchain",
      link: "/#blockchain"
    },
    {
      label: "company",
      link: "/#company"
    }
  ];

  return (
    <div className="App">
      <div className="footer">
        <div className="background" />

        <div className="footerContentContainer">
          <div className="logoContainer">
            <a href="/">
              <ExscudoLogoSmall className="logo" />
            </a>
            <a href={"/"}>
              <ExscudoLogoSmall className="logo" />
            </a>
          </div>
          <div className="navLinkContainer">
            <div>
              {NAVIGATION_LINKS.map((link, i) => (
                <a key={i} href={link.link} className="navLink">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="applinksContainer">
              <a href={"/"}>
                <Icon Image={GooglePlay} variant="googlePlay" />
              </a>
              <a href={"/"}>
                <Icon Image={AppleStore} variant="appleStore" />
              </a>
            </div>
          </div>
          <div className="socialIconsAndQuestiosBlockContainer">
            <div className="socialIconsContainer">
              <a
                href={"/"}
                target="_blank"
                rel="noreferrer"
                className="socialIcon"
              >
                <FacebookIcon />
              </a>
              <a
                href={"/"}
                target="_blank"
                rel="noreferrer"
                className="socialIcon"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
