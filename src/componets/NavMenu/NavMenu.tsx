import { useCallback, useEffect, useState, type JSX, type MouseEvent } from "react";

import {
    Nav,
} from "./NavMenu.styles";

interface sections {
    id: string;
    icon: JSX.Element;
    label: string;
}[]

interface MenuArgs {
    options: sections[]
}


export default function NavMenu(args: MenuArgs) {

    const [activeSection, setActiveSection] = useState("home")

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

        const observedElements = args.options
            .map(({ id }) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null)

        observedElements.forEach((element) => observer.observe(element))

        return () => {
            observedElements.forEach((element) => observer.unobserve(element))
            observer.disconnect()
        }
    }, [args.options])

    return (
        <Nav>
            <ul>
                {args.options.map(({ id, icon, label }) => (
                    <li key={id} className={id === activeSection ? "active" : undefined}>
                        <a href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>
                            <span className="icon">{icon}</span>
                            <span className="label">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </Nav>
    );
}