import LanguageSwitcher from "../../../../componets/LanguageSwitcher/LanguageSwitcher"
import { FaLinkedin, FaGithubAlt } from "react-icons/fa"
import bruner_logo from "../../../../assets/images/bruner_logo.webp"

import {
  MainContainer,
  Content,
  TextGroup,
  HomeTitle,
  HomeSlogan,
  HomeSubtitle,
  SocialMenu,
  Image,

} from "./MainSection.styles";

interface MainArgs {
  title: string;
  subtitle: string;
  slogan: string;
  socialMidiaLabel: string;
  linkedinLabel: string;
  githubLabel: string;
}

export default function MainSection(args: MainArgs) {

  return (
    <MainContainer id="home">
      <LanguageSwitcher />
      <Content>
        <TextGroup>
          <HomeTitle>{args.title}</HomeTitle>
          <HomeSubtitle>{args.subtitle}</HomeSubtitle>
          <HomeSlogan>{args.slogan}</HomeSlogan>
          <SocialMenu aria-label={args.socialMidiaLabel}>
            <a href="https://www.linkedin.com/in/rodrigobruner/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} color="#fbbf24" />
              {args.linkedinLabel}
            </a>
            <a href="https://github.com/rodrigobruner" target="_blank" rel="noopener noreferrer">
              <FaGithubAlt size={28} color="#fbbf24" />
              {args.githubLabel}
            </a>
          </SocialMenu>
        </TextGroup>
        <Image src={bruner_logo} alt="Bruner Avatar" />
      </Content>
    </MainContainer>
  );

}