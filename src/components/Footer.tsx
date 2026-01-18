import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find and Apple Store or other retailer near you. Or
          call 000800 0404 1966.
        </p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>

      <hr />
      <div className="links">
        <p>Copyright &copy; 2024 Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map(({ label, link }, index) => (
            <li key={index}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
