import {
    ProjectCardContainer,
    ProjectImage
} from "./ProjectCard.styles";

import { FaGithubAlt } from "react-icons/fa"
import { MdWorkspacePremium } from "react-icons/md";

interface ProjectCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    url?: string;
    viewOnGithub?: string;
    company?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <ProjectCardContainer>
            <ProjectImage
                src={props.imageUrl}
                alt={props.imageAlt}
            />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.viewOnGithub && (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <FaGithubAlt size={28} color="#fbbf24" />
                    {props.viewOnGithub}
                </a>
            )}
            {props.company &&(
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <MdWorkspacePremium size={28} color="#fbbf24"/> {props.company}
                </a>
                
            )}

        </ProjectCardContainer>
    );
}