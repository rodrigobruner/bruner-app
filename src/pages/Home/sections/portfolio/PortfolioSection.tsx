import ProjectCard from "../../../../componets/ProjectCard/ProjectCard";

import {
    PortifolioContainer,
    PortifolioTitle,
    ProjectsGrid,
} from "./PortfolioSection.styles"

import vsfood from "../../../../assets/images/portifolio/vs-food.gif"


interface PortifolioArgs {
    description:string;
    projects:any;
    viewOnGithub:string;
}

export default function PortfolioSection(args: PortifolioArgs) {

    return (
        <PortifolioContainer id="portfolio">
            <PortifolioTitle>{args.description}</PortifolioTitle>
            <ProjectsGrid>
                <ProjectCard
                    imageUrl={vsfood}
                    imageAlt={args.projects.vs_food.title}
                    title={args.projects.vs_food.title}
                    description={args.projects.vs_food.description}
                    url="https://www.videosoft.com.br/"
                    viewOnGithub=""
                    company={args.projects.vs_food.company}
                />
                <ProjectCard
                    imageUrl="https://github.com/rodrigobruner/out_of_the_nest_android_app/raw/main/images/screen_recording.gif"
                    imageAlt={args.projects.out_of_the_nest.title}
                    title={args.projects.out_of_the_nest.title}
                    description={args.projects.out_of_the_nest.description}
                    url="https://github.com/rodrigobruner/out_of_the_nest_android_app/"
                    viewOnGithub={args.viewOnGithub}
                />
                <ProjectCard
                    imageUrl="https://github.com/rodrigobruner/car-reservation-system/raw/main/screenshot.gif"
                    imageAlt={args.projects.vehicle_reservation.title}
                    title={args.projects.vehicle_reservation.title}
                    description={args.projects.vehicle_reservation.description}
                    url="https://github.com/rodrigobruner/car-reservation-system/"
                    viewOnGithub={args.viewOnGithub}
                />
                <ProjectCard
                    imageUrl="https://github.com/rodrigobruner/cleverOwl/raw/main/screenshot.gif"
                    imageAlt={args.projects.clever_owl.title}
                    title={args.projects.clever_owl.title}
                    description={args.projects.clever_owl.description}
                    url="https://github.com/rodrigobruner/cleverOwl/"
                    viewOnGithub={args.viewOnGithub}
                />
            </ProjectsGrid>
        </PortifolioContainer>
    );


}