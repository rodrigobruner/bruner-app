import { FaLinkedin } from "react-icons/fa";
import {
  SocialMenu,
  FooterContainer,
} from "./Footer.styles";


interface FooterArgs {
  rights: string;
  contact: string;
}

export default function Footer(args: FooterArgs) {
  return (
    <FooterContainer role="contentinfo">
      <p>
        &copy; {new Date().getFullYear()} Rodrigo Bruner. {args.rights}
      </p>
      <SocialMenu>
        <a
          href="https://linkedin.com/in/rodrigobruner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} style={{ marginRight: "4px" }} />
          {args.contact}
        </a>
      </SocialMenu>
    </FooterContainer>
  );
}