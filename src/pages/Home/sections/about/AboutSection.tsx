import bruner_rock from "../../../../assets/images/bruner_rock.webp"

import {
    AboutContainer,
    AboutTitle,
    RoundedImage,

} from "./AboutSection.styles";


interface AboutArgs {
    title: string;
}

export default function AboutSection(args: AboutArgs) {
    return (
        <AboutContainer id="about">
            <RoundedImage src={bruner_rock} alt="Bruner Avatar" />
            <AboutTitle>{args.title}</AboutTitle>
        </AboutContainer>
    );
}