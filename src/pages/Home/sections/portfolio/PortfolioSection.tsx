import ProjectCard from "../../../../componets/ProjectCard/ProjectCard";

import {
    PortifolioContainer,
    PortifolioTitle,
    ProjectsGrid,
} from "./PortfolioSection.styles"


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
                    imageUrl="https://github.com/rodrigobruner/out_of_the_nest_android_app/raw/main/images/screen_recording.gif"
                    imageAlt={args.projects.project1.title}
                    title={args.projects.project1.title}
                    description={args.projects.project1.description}
                    url="https://github.com/rodrigobruner/out_of_the_nest_android_app/"
                    viewOnGithub={args.viewOnGithub}
                />
                <ProjectCard
                    imageUrl="https://github.com/rodrigobruner/car-reservation-system/raw/main/screenshot.gif"
                    imageAlt={args.projects.project2.title}
                    title={args.projects.project2.title}
                    description={args.projects.project2.description}
                    url="https://github.com/rodrigobruner/car-reservation-system/"
                    viewOnGithub={args.viewOnGithub}
                />
                <ProjectCard
                    imageUrl="https://github.com/rodrigobruner/cleverOwl/raw/main/screenshot.gif"
                    imageAlt={args.projects.project3.title}
                    title={args.projects.project3.title}
                    description={args.projects.project3.description}
                    url="https://github.com/rodrigobruner/cleverOwl/"
                    viewOnGithub={args.viewOnGithub}
                />
            </ProjectsGrid>
        </PortifolioContainer>
    );


}