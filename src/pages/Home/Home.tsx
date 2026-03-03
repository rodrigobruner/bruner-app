import { Component, useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";
import FlipCard from "../../componets/FlipCard/FlipCard";
import ProjectCard from "../../componets/ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";
import {
  Nav,
  FixedIcon,
  MainContainer,
  AboutContainer,
  PortifolioContainer,
  Content,
  TextGroup,
  HomeTitle,
  HomeSlogan,
  AboutTitle,
  HomeSubtitle,
  SocialMenu,
  Image,
  RoundedImage,
  PortifolioTitle,
  ProjectsGrid,
  // TimelineContainer,
  // TimelineTitle,
  // Timeline,
  // TimelineItem,
  RockContainer,
  RockTitle,
  RockDescription,
  RockGrid,
  Footer
} from "./Home.styles";

import { FaLinkedin, FaGithubAlt, FaHome, FaGuitar} from "react-icons/fa"
// import { FaTimeline } from "react-icons/fa6";
import { BsChatHeart, BsCodeSquare } from "react-icons/bs"

import bruner_logo from "../../assets/images/bruner_logo.png"
import bruner_rock from "../../assets/images/bruner_rock.png"
import rock_acdc_2026 from "../../assets/images/rock_acdc_2026.webp"
import rock_gunsnroses_2026 from "../../assets/images/rock_guns_n_roses_2026.webp"
import rock_motleycrue_2026 from "../../assets/images/rock_motley_crue_2026.webp"
import rock_theoffspring_2025 from "../../assets/images/rock_theoffspring_2025.webp"
import rock_acdc_2025 from "../../assets/images/rock_acdc_2025.webp"
import rock_kiss_2023 from "../../assets/images/rock_kiss_2023.webp"
import rock_scorpions_2023 from "../../assets/images/rock_scorpions_2023.webp"
import rock_deep_purple_2017 from "../../assets/images/rock_deep_purple_2017.webp"
import rock_massacration_2023 from "../../assets/images/rock_massacration_2023.webp"
import rock_velhas_virgens_2024 from "../../assets/images/rock_velhas_virgens_2024.webp"
import black_ribbon from "../../assets/images/black_ribbon.png"
import LanguageSwitcher from "../../componets/LanguageSwitcher/LanguageSwitcher"

const parseLocalDate = (value: string) => {
  const [year, month, day] = value.split("-").map((part) => Number(part))
  if (!year || !month || !day) {
    return null
  }

  const date = new Date(year, month - 1, day)
  if (Number.isNaN(date.getTime())) {
    return null
  }

  return date
}

const getTodayLocal = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}


export default function Home() {

  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("home")


  const sections = useMemo(() => ([
    {
      id: "home",
      icon: <FaHome size={28} />,
      label: t("menu.home")
    },
    {
      id: "about",
      icon: <BsChatHeart size={28} />,
      label: t("menu.about")
    },
    {
      id: "portfolio",
      icon: <BsCodeSquare size={28} />,
      label: t("menu.portfolio")
    },
    /*
    {      
      id: "timeline",
      icon: <FaTimeline />,
      label: t("menu.timeline")
    },*/
    {
      id: "rock",
      icon: <FaGuitar size={28} />,
      label: t("menu.rock")
    }
  ]), [t])

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    setActiveSection(sectionId)

    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          const targetId = mostVisible.target.id
          setActiveSection((current) => (current === targetId ? current : targetId))
        }
      },
      {
        root: null,
        threshold: [0.3, 0.55, 0.8],
        rootMargin: "-20% 0px -40% 0px"
      }
    )

    const observedElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    observedElements.forEach((element) => observer.observe(element))

    return () => {
      observedElements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [sections])

  const tributeDateValue = t("tribute.date")
  const shouldShowTribute = useMemo(() => {
    const tributeDate = parseLocalDate(tributeDateValue)
    if (!tributeDate) {
      return false
    }

    const today = getTodayLocal()
    return tributeDate > today
  }, [tributeDateValue])

  return (
    <>
      <Nav>
        <ul>
          {sections.map(({ id, icon, label }) => (
            <li key={id} className={id === activeSection ? "active" : undefined}>
              <a href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>
                <span className="icon">{icon}</span>
                <span className="label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Nav>

      {shouldShowTribute && (
        <FixedIcon>
          <a href="https://www.cbc.ca/news/canada/british-columbia/suspect-s-mother-victim-tumbler-ridge-mass-shooting-9.7085200" target="_blank">
            <img src={black_ribbon} alt="Black ribbon" style={{ width: '55px', height: '55px' }} />
          </a>
          <div className="tooltip">{t("tribute.message")}</div>
        </FixedIcon>
      )}
      
      <MainContainer id="home">
        <LanguageSwitcher />
        <Content>
          <TextGroup>
            <HomeTitle>{t("home.title")}</HomeTitle>
            <HomeSubtitle>{t("home.subtitle")}</HomeSubtitle>
            <HomeSlogan>{t("home.slogan")}</HomeSlogan>
            <SocialMenu aria-label={t("home.links.ariaLabel")}>
              <a href="https://www.linkedin.com/in/rodrigobruner/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} color="#fbbf24" />
                {t("home.links.linkedin")}
              </a>
              <a href="https://github.com/rodrigobruner" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size={28} color="#fbbf24" />
                {t("home.links.github")}
              </a>
            </SocialMenu>
          </TextGroup>
          <Image src={bruner_logo} alt="Bruner Avatar" />
        </Content>
      </MainContainer>
      <AboutContainer id="about">
        <RoundedImage src={bruner_rock} alt="Bruner Avatar" />
        <AboutTitle>{t("home.about.title")}</AboutTitle>
      </AboutContainer>
      <PortifolioContainer id="portfolio">
        <PortifolioTitle>{t("home.portfolio.title")}</PortifolioTitle>
        <ProjectsGrid>
          <ProjectCard
            imageUrl="https://github.com/rodrigobruner/out_of_the_nest_android_app/raw/main/images/screen_recording.gif"
            imageAlt={t("home.portfolio.projects.project1.title")}
            title={t("home.portfolio.projects.project1.title")}
            description={t("home.portfolio.projects.project1.description")}
            url="https://github.com/rodrigobruner/out_of_the_nest_android_app/"
            viewOnGithub={t("home.portfolio.github")}
          />
          <ProjectCard
            imageUrl="https://github.com/rodrigobruner/car-reservation-system/raw/main/screenshot.gif"
            imageAlt={t("home.portfolio.projects.project2.title")}
            title={t("home.portfolio.projects.project2.title")}
            description={t("home.portfolio.projects.project2.description")}
            url="https://github.com/rodrigobruner/car-reservation-system/"
            viewOnGithub={t("home.portfolio.github")}
          />
          <ProjectCard
            imageUrl="https://github.com/rodrigobruner/cleverOwl/raw/main/screenshot.gif"
            imageAlt={t("home.portfolio.projects.project3.title")}
            title={t("home.portfolio.projects.project3.title")}
            description={t("home.portfolio.projects.project3.description")}
            url="https://github.com/rodrigobruner/cleverOwl/"
            viewOnGithub={t("home.portfolio.github")}
          />
        </ProjectsGrid>
      </PortifolioContainer>
      {/*
      <TimelineContainer id="timeline">
          <TimelineTitle>Timeline</TimelineTitle>
          <Timeline>
            <TimelineItem>
              <h3>Oct 2025</h3>
              <h4>Finished Mobile Solutions Development</h4>
              <h4>@ Conestoga</h4>
              <p>I finished my mobile solution developement course at Conestoga College.</p>
            </TimelineItem>
            <TimelineItem>
              <h3>Oct 2023 - Aug 2025</h3>
              <h4>Head of software development</h4>
              <h4>@ Videosoft</h4>
              <p>Led a team of developers in creating innovative mobile solutions. Oversaw the entire development process, from ideation to deployment.</p>
            </TimelineItem>
            <TimelineItem>
              <h3>Aug 2019 - Dec 2022</h3>
              <h4>Software Engineering Management</h4>
              <h4>@ Videosoft</h4>
              <p>Managed a team of software engineers and led projects to develop scalable web applications. Implemented best practices for software development and ensured timely delivery of high-quality products.</p>
            </TimelineItem>
          </Timeline>
      </TimelineContainer>
          */}
      <RockContainer id="rock">
        <RockTitle>Rock and Roll 🤘</RockTitle>
        <RockDescription>{t("home.rock.description")}</RockDescription>
        <RockGrid>
        <FlipCard 
          image={rock_acdc_2026}
          title='AC/DC'
          subtitle='Power up Tour 2026'
          note='Toronto, ON, Canada'
          text={t("home.rock.shows.acdc2026.description")}/>
        <FlipCard 
          image={rock_gunsnroses_2026}
          title="Guns N' Roses"
          subtitle='World Tour 2026'
          note='Toronto, ON, Canada'
          text={t("home.rock.shows.gunsnroses.description")}/>
        <FlipCard 
          image={rock_motleycrue_2026}
          title='Mötley Crüe'
          subtitle='The Return Of The Carnival Of Sins'
          note='Toronto, ON, Canada'
          text={t("home.rock.shows.motleycrue.description")}/>
        <FlipCard 
          image={rock_theoffspring_2025}
          title='The Offspring'
          subtitle='Supercharged 2025'
          note='Toronto, ON, Canada'
          text={t("home.rock.shows.theoffspring.description")}/>

        <FlipCard 
          image={rock_acdc_2025}
          title='AC/DC'
          subtitle='Power up Tour 2025'
          note='Cleveland, OH, USA'
          text={t("home.rock.shows.acdc2025.description")}/>

        <FlipCard 
          image={rock_velhas_virgens_2024}
          title='Velhas Virgens'
          subtitle='O bar me chama'
          note='Joinville, SC, Brazil'
          text={t("home.rock.shows.velhasvirgens.description")}/>

        <FlipCard 
          image={rock_scorpions_2023}
          title='Scorpions'
          subtitle='Rock Believer 2023'
          note='Florianópolis, SC, Brazil'
          text={t("home.rock.shows.scorpions.description")}/>

        <FlipCard 
          image={rock_kiss_2023}
          title='Kiss'
          subtitle='End of the road'
          note='Florianópolis, SC, Brazil'
          text={t("home.rock.shows.kiss.description")}/>

        <FlipCard 
          image={rock_massacration_2023}
          title='Massacration'
          subtitle='Metal is my life'
          note='Joinville, SC, Brazil'
          text={t("home.rock.shows.massacration.description")}/>

        <FlipCard 
          image={rock_deep_purple_2017}
          title='Deep Purple, Cheap Trick & Tesla'
          subtitle='Solid Rock Tour'
          note='JCuritiba, PR, Brazil'
          text={t("home.rock.shows.deeppurple.description")}/>
        
        </RockGrid>
      </RockContainer>
      <Footer>
        <p>
          &copy; {new Date().getFullYear()} Rodrigo Bruner. {t("home.footer.rights")}
        </p>
        <SocialMenu>
          <a
            href="https://linkedin.com/in/rodrigobruner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} style={{ marginRight: "4px" }} /> 
            {t("home.footer.contact")}
          </a>
        </SocialMenu>
      </Footer>
    </>
  )
}
