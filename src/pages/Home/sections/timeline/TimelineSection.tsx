import {
  TimelineContainer,
  TimelineTitle,
  Timeline,
  TimelineItem,
} from "./TimelineSection.styles";

export default function TimelineSection() {

    return (
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
    )
}