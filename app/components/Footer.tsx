// import SocialLinks from "./SocialLinks";
import { footerSection } from "../utils/portfolio";
// import { Git}

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto text-center font-mono mb-5 text-xs">
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        {footerSection.title}
      </a>
    </footer>
  );
};

export default Footer;
