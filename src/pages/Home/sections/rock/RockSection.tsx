import FlipCard from "../../../../componets/FlipCard/FlipCard";

import rock_acdc_2026 from "../../../../assets/images/rock_acdc_2026.webp"
import rock_gunsnroses_2026 from "../../../../assets/images/rock_guns_n_roses_2026.webp"
import rock_motleycrue_2026 from "../../../../assets/images/rock_motley_crue_2026.webp"
import rock_theoffspring_2025 from "../../../../assets/images/rock_theoffspring_2025.webp"
import rock_acdc_2025 from "../../../../assets/images/rock_acdc_2025.webp"
import rock_kiss_2023 from "../../../../assets/images/rock_kiss_2023.webp"
import rock_scorpions_2023 from "../../../../assets/images/rock_scorpions_2023.webp"
import rock_deep_purple_2017 from "../../../../assets/images/rock_deep_purple_2017.webp"
import rock_massacration_2023 from "../../../../assets/images/rock_massacration_2023.webp"
import rock_velhas_virgens_2024 from "../../../../assets/images/rock_velhas_virgens_2024.webp"

import {
    RockContainer,
    RockTitle,
    RockDescription,
    RockGrid,
} from "./RockSection.styles";



interface RockArgs {
    description: string;
    shows: any;
}

export default function RockSection(args: RockArgs) {
    return (
        <RockContainer id="rock">
            <RockTitle>Rock and Roll 🤘</RockTitle>
            <RockDescription>{args.description}</RockDescription>
            <RockGrid>
                <FlipCard
                    image={rock_acdc_2026}
                    title='AC/DC'
                    subtitle='Power up Tour 2026'
                    note='Toronto, ON, Canada'
                    text={args.shows.acdc2026.description} />
                <FlipCard
                    image={rock_gunsnroses_2026}
                    title="Guns N' Roses"
                    subtitle='World Tour 2026'
                    note='Toronto, ON, Canada'
                    text={args.shows.gunsnroses.description} />
                <FlipCard
                    image={rock_motleycrue_2026}
                    title='Mötley Crüe'
                    subtitle='The Return Of The Carnival Of Sins'
                    note='Toronto, ON, Canada'
                    text={args.shows.motleycrue.description} />
                <FlipCard
                    image={rock_theoffspring_2025}
                    title='The Offspring'
                    subtitle='Supercharged 2025'
                    note='Toronto, ON, Canada'
                    text={args.shows.theoffspring.description} />

                <FlipCard
                    image={rock_acdc_2025}
                    title='AC/DC'
                    subtitle='Power up Tour 2025'
                    note='Cleveland, OH, USA'
                    text={args.shows.acdc2025.description} />

                <FlipCard
                    image={rock_velhas_virgens_2024}
                    title='Velhas Virgens'
                    subtitle='O bar me chama'
                    note='Joinville, SC, Brazil'
                    text={args.shows.velhasvirgens.description} />

                <FlipCard
                    image={rock_scorpions_2023}
                    title='Scorpions'
                    subtitle='Rock Believer 2023'
                    note='Florianópolis, SC, Brazil'
                    text={args.shows.scorpions.description} />

                <FlipCard
                    image={rock_kiss_2023}
                    title='Kiss'
                    subtitle='End of the road'
                    note='Florianópolis, SC, Brazil'
                    text={args.shows.kiss.description} />

                <FlipCard
                    image={rock_massacration_2023}
                    title='Massacration'
                    subtitle='Metal is my life'
                    note='Joinville, SC, Brazil'
                    text={args.shows.massacration.description} />

                <FlipCard
                    image={rock_deep_purple_2017}
                    title='Deep Purple, Cheap Trick & Tesla'
                    subtitle='Solid Rock Tour'
                    note='JCuritiba, PR, Brazil'
                    text={args.shows.deeppurple.description} />
            </RockGrid>
        </RockContainer>
    );
}