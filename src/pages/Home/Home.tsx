import { useMemo } from "react";
import MainSection from "./sections/main/MainSection";
import AboutSection from "./sections/about/AboutSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
// import TimelineSection from "./sections/timeline/TimelineSection";
import RockSection from "./sections/rock/RockSection";
import { useTranslation } from "react-i18next";
import { FaHome, FaGuitar } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { BsChatHeart, BsCodeSquare } from "react-icons/bs";
import NavMenu from "../../componets/NavMenu/NavMenu";
import Footer from "../../componets/Footer/Footer";
import Badge from "../../componets/Badge/Badge";

interface Item {
    id: string,
    type: string,
    date: string,
    title: string,
    location: string,
    description: string
}

export default function Home() {

  const { t } = useTranslation();

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
    // {
    //   id: "timeline",
    //   icon: <FaTimeline size={28} />,
    //   label: t("menu.timeline")
    // },
    {
      id: "rock",
      icon: <FaGuitar size={28} />,
      label: t("menu.rock")
    }
  ]), [t]);

  return (
    <>
      <NavMenu
        options={sections}
      />
      <MainSection
        title={t("home.title")}
        subtitle={t("home.subtitle")}
        slogan={t("home.slogan")}
        linkedinLabel={t("home.links.linkedin")}
        githubLabel={t("home.links.github")}
        socialMidiaLabel={t("home.links.socialMidiaLabel")}
      />
      <Badge
        imageSrc="/src/assets/images/peace.webp"
        // url={t("tribute.url")}
        message={t("tribute.message")}

      />
      <AboutSection
        title={t("home.about.title")}
      />
      <PortfolioSection
        description={t("home.portfolio.title")}
        projects={t("home.portfolio.projects", { returnObjects: true })}
        viewOnGithub={t("home.portfolio.github")}
      />
      {/* <TimelineSection
        itens={t("home.timeline.itens", { returnObjects: true }) as Item[]}
      /> */}
      <RockSection
        description={t("home.rock.description")}
        shows={t("home.rock.shows", { returnObjects: true })} />
      <Footer
        rights={t("home.footer.rights")}
        contact={t("home.footer.contact")}
      />
    </>
  )
}