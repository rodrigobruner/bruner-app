import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      menu: {
        home: "Home",
        homeDescription: "Start here and explore my universe.",
        about: "About",
        aboutDescription: "Get to know my vision.",
        portfolio: "Portfolio",
        portifolioDescription: "See what I build and create.",
        timeline: "Timeline",
        timelineDescription: "Learn about my career path",
        rock: "Rock",
        rockDescription: "A space for attitude, protest, freedom, and the spirit of rock culture."
      },
      tribute: {
        message: "We share the same planet, the same sky, and the same future. Choose peace, not war. Technology should serve life. Not destruction.",
        date: "",
        url: "https://www.cbc.ca/news/canada/british-columbia/suspect-s-mother-victim-tumbler-ridge-mass-shooting-9.7085200"
      },
      home: {
        title: "Rodrigo Bruner",
        subtitle: "Full Stack Software Engineer",
        slogan: "Building meaningful software that connects tech, design & people",
        languageLabel: "Language",
        languageOptions: {
          en: "English",
          pt: "Portuguese",
        },
        links: {
          linkedin: "LinkedIn",
          github: "GitHub",
          twitter: "Twitter",
          ariaLabel: "Social media links",
        },
        about: {
          title: "Crafting digital solutions with the same passion as a guitar solo.",
        },
        portfolio: {
          title: "My Portfolio",
          github: "View on GitHub",
          projects: {
            vsd_ui:{
              title: "VSD-UI",
              company: "Company: Videosoft",
              description: "Shared UI component library developed in Angular 21, with over 85 reusable components and standardized APIs, used by multiple applications in the workspace. It offers semantic CSS design tokens and support for light and dark themes, as well as specialized components for content editing and data visualization. Developed with TypeScript, Angular, ng-packagr, Tiptap, and Chart.js, it is distributed as a package via GitHub Packages."
            },
            vs_central:{
              title: "VSD-Central",
              company: "Company: Videosoft",
              description: "Modular architecture consisting of API, admin panel, workers, and real-time communication service. Developed with Bun, Node.js, Express, Angular 21, Prisma, and MariaDB/MySQL, it integrates AWS services such as S3, SQS, and SES. Asynchronous processing is handled by workers, while the Connector uses Socket.io for real-time communication. The infrastructure utilizes Docker and CI/CD pipelines with GitHub Actions."
            },
            vs_food: {
              title: "VS Food",
              company: "Company: Videosoft",
              description: "The App Totem evolved through three major architectural versions: initially built with JavaFX, later migrated to an Angular-based Progressive Web App (PWA) with offline capabilities and local caching, and eventually redesigned as a cloud solution on AWS. The platform uses Node.js for local hardware integrations, including printing, payment processing (TEF), and OSInterface, as well as microservices for queue management. The administrative system is built with PHP, using Slim Framework and Eloquent ORM.",
            },
            out_of_the_nest: {
              title: "Out of the Nest",
              description: "Out of the Nest is a mobile application designed to help families find welcoming and accessible locations, including restaurants, parks, events, or pet-friendly places.",
            },
            vehicle_reservation: {
              title: "Vehicle Reservation System ",
              description: "A web application built with .NET C# and Razor Pages that allows users to create and manage vehicle reservations.",
            },
            clever_owl: {
              title: "CleverOwl",
              description: "CleverOwl is an iOS app built with Swift, designed to help users organize their tasks in a simple and effective way.",
            },
          },
        },
        timeline: {
          itens: [
            {
              id: "item1",
              type: "education",
              date: "Oct 2025",
              title: "Finished Mobile Solutions Development",
              location: "@ Conestoga",
              description: "I finished my mobile solution development course at Conestoga College.",
              image: "./assets/images/preview.png"
            },
            {
              id: "item2",
              type: "work",
              date: "May 2024",
              title: "Started Mobile Solutions Development",
              location: "@ Conestoga",
              description: "Started my program at Conestoga College."
            }
          ]
        },
        rock: {
          description: "Rock has always been an important part of my life. It's the soundtrack that inspires me, motivates me, and accompanies me in different moments. Whenever possible, I like to reconnect with that energy at concerts of the bands I enjoy, it's a way to recharge and live intense experiences that also drive me in my work as a developer.",
          shows: {
            alicecooper2026: {
              description: "Unbelievable! We loved every song in the concert; it was one hit after another.",
              date: "Nov 06, 2026",
            },
            twisted_sister2026: {
              description: "An incredible concert, with a great set list, lots of energy on stage, and great interaction with the audience.",
              date: "Oct 08, 2026",
            },
            acdc2026: {
              description: "The AC/DC concert in Toronto has been canceled after a severe thunderstorm caused “significant damage” to Rogers Stadium.",
              date: "Sep 16, 2026",
              moreText: "[ Read more ]",
              moreUrl: "https://www.cbc.ca/news/canada/toronto/acdc-concert-cancelled-rogers-stadium-9.7338010"
            },
            ironmaiden2026: {
              description: "The show's production was impressive, with an energetic and engaging performance by the band.",
              date: "Aug 30, 2026",
            },
            gunsnroses: {
              description: "Slash was incredible on stage, with memorable solos and an infectious stage presence.",
              date: "Aug 05, 2026",
            },
            lynyrd_skynyrd:{
              description: "Foreigner delivered a great opening act, and Lynyrd Skynyrd was full of energy and memorable classics.",
              date: "Jul 30, 2026",
            },
            motleycrue: {
              description: "Six Gun Sall and Tesla opened for Mötley Crüe, who delivered pure rock and energy on stage.",
              date: "Jul 22, 2026",
            },

            theoffspring: {
              description: "Jimmy Eat World surprised in the opening, and The Offspring made the audience roar with hits, laughs, and an unforgettable tribute to Ozzy Osbourne, pure emotion!",
              date: "Jul 23, 2025",
            },
            acdc2025: {
              description: "We traveled 9 hours from Waterloo to Cleveland to fulfill a dream. The Pretty Reckless set the stage on fire, and Angus Young made history with incredible solos, the best show of my life.",
              date: "May 28, 2025",
            },
            velhasvirgens: {
              description: "The legendary Brazilian rock band energized the crowd with sharp humor and lyrics full of attitude; between laughs and red faces, no one was left indifferent.",
              date: "Jan 27, 2024",
            },
            massacration: {
              description: "Even with a big delay, the energy was not lacking! The band perfectly embodied the characters, and surrounded by friends, every minute turned into pure fun.",
              date: "Nov 26, 2023",
            },
            kiss: {
              description: "What a spectacle! On their latest tour, the band proved they still had plenty of gas left — pyrotechnics, energy, and a breathtaking stage presence from start to finish.",
              date: "Apr 25, 2023",
            },
            scorpions: {
              description: "I went without high expectations, but left impressed! Scorpions showed contagious energy and stage presence that made every second worthwhile.",
              date: "Apr 20, 2023",
            },
            deeppurple: {
              description: "Chip Trick and Tesla kicked things off in style, but when Deep Purple played “Smoke on the Water,” the crowd sang along, it was epic!",
              date: "Dec 12, 2017",
            }
          }
        },
        footer: {
          rights: "All rights reserved.",
          contact: "Connect with me on LinkedIn"
        }
      },
    },
  },
  pt: {
    translation: {
      menu: {
        home: "Início",
        homeDescription: "Start here and explore my universe.",
        about: "Sobre",
        aboutDescription: "Get to know my vision.",
        portfolio: "Portfólio",
        portfolioDescription: "See what I build and create.",
        timeline: "Linha do Tempo",
        timelineDescription: "Learn about my career path.",
        rock: "Rock",
        rockDescription: "A space for attitude, protest, freedom, and the spirit of rock culture."
      },
      tribute: {
        message: "Nós compartilhamos o mesmo planeta, mesmo céu e mesmo futuro. Escolha paz não a guerra. A tecnologia deveria servir a vida não a destruição.",
        date: "2026-02-18",
        url: "https://g1.globo.com/mundo/noticia/2026/02/11/ataque-a-tiros-no-canada-atentados-sao-raros-no-pais-que-tem-leis-rigidas-para-o-porte-de-armas.ghtml"
      },
      home: {
        title: "Rodrigo Bruner",
        subtitle: "Engenheiro de Software Full Stack",
        slogan: "Construindo softwares significativos que conectam tecnologia, design e pessoas",
        languageLabel: "Idioma",
        languageOptions: {
          en: "Inglês",
          pt: "Português",
        },
        links: {
          linkedin: "LinkedIn",
          github: "GitHub",
          twitter: "Twitter",
          socialMidiaLabel: "Redes sociais",
        },
        about: {
          title: "Criando soluções digitais com a mesma paixão de um solo de guitarra.",
        },
        portfolio: {
          title: "Meu Portfólio",
          github: "Ver no GitHub",
          projects: {
            vsd_ui:{
              title: "VSD-UI",
              company: "Empresa: Videosoft",
              description: "Biblioteca compartilhada de componentes UI desenvolvida em Angular 21, com mais de 85 componentes reutilizáveis e APIs padronizadas, utilizada por múltiplas aplicações do workspace. Oferece design tokens CSS semânticos e suporte a temas claro e escuro, além de componentes especializados para edição de conteúdo e visualização de dados. Desenvolvida com TypeScript, Angular, ng-packagr, Tiptap e Chart.js, é distribuída como pacote por meio do GitHub Packages."
            },
            vs_central:{
              title: "VSD-Central",
              company: "Empresa: Videosoft",
              description: "Arquitetura modular composta por API, painel administrativo, workers e serviço de comunicação em tempo real. Desenvolvida com Bun, Node.js, Express, Angular 21, Prisma e MariaDB/MySQL, integra serviços AWS como S3, SQS e SES. O processamento assíncrono é realizado por workers, enquanto o Connector utiliza Socket.io para comunicação em tempo real. A infraestrutura utiliza Docker e pipelines de CI/CD com GitHub Actions."
            },
            vs_food: {
              title: "VS Food",
              company: "Empresa: Videosoft",
              description: "O App Totem evoluiu por meio de três grandes versões arquiteturais: inicialmente desenvolvido em JavaFX, posteriormente migrado para uma aplicação Angular baseada em Progressive Web App (PWA), com recursos de operação offline e armazenamento em cache, e finalmente evoluído para uma arquitetura cloud-native na AWS. A solução utiliza Node.js para integrações locais com hardware, incluindo impressão, processamento de pagamentos (TEF) e OSInterface, além de microsserviços para gerenciamento de senhas e filas. O sistema administrativo é desenvolvido em PHP, utilizando o framework Slim e o ORM Eloquent.",
            },
            out_of_the_nest: {
              title: "Out of the Nest",
              description: "Out of the Nest é um aplicativo móvel projetado para ajudar famílias a encontrar locais acolhedores e acessíveis, incluindo restaurantes, parques, eventos ou lugares que aceitam animais de estimação.",
            },
            vehicle_reservation: {
              title: "Vehicle Reservation System ",
              description: "Uma aplicação web construída com .NET C# e Razor Pages que permite aos usuários criar e gerenciar reservas de veículos.",
            },
            clever_owl: {
              title: "CleverOwl",
              description: "CleverOwl é um aplicativo iOS construído com Swift, projetado para ajudar os usuários a organizar suas tarefas de maneira simples e eficaz.",
            },
          },
        },
        timeline: {
          itens: [
            {
              id: "item1",
              type: "education",
              date: "Oct 2025",
              title: "Finished Mobile Solutions Development",
              location: "@ Conestoga",
              description: "I finished my mobile solution development course at Conestoga College."
            },
            {
              id: "item2",
              type: "work",
              date: "May 2024",
              title: "Started Mobile Solutions Development",
              location: "@ Conestoga",
              description: "Started my program at Conestoga College."
            }
          ]
        },
        rock: {
          description: "O rock sempre foi uma parte importante da minha vida. É a trilha sonora que me inspira, me motiva e me acompanha em diferentes momentos. Sempre que possível, gosto de me reencontrar com essa energia em shows das bandas que curto, é uma forma de me recarregar e viver experiências intensas que depois também me impulsionam no meu trabalho como desenvolvedor.",
          shows: {
            alicecooper2026: {
              description: "Incrível! Amamos cada música do show, foi um hit atrás do outro.",
              date: "06 nov, 2026",
            },
            twisted_sister2026: {
              description: "Um show incrível, com um ótimo setlist, muita energia no palco e ótima interação com o público.",
              date: "08 out, 2026",
            },
            acdc2026: {
              description: "Infelizmente, o show do AC/DC em Toronto foi cancelado depois que uma forte tempestade causou “danos significativos” ao Rogers Stadium.",
              date: "16 set, 2026",
              moreText: "[ Leia mais ]",
              moreUrl: "https://www.cbc.ca/news/canada/toronto/acdc-concert-cancelled-rogers-stadium-9.7338010"
            },
            ironmaiden2026: {
              description: "Impressionante a produção do show, com uma performance energética e envolvente da banda.",
              date: "30 ago, 2026",
            },
            gunsnroses: {
              description: "O Slash foi incrível no palco, com solos memoráveis e uma presença de palco contagiante.",
              date: "05 ago, 2026",
            },
            lynyrd_skynyrd:{
              description: "Foreigner fez uma grande abertura e Lynyrd Skynyrd, cheio de energia e clássicos memoráveis.",
              date: "30 jul, 2026",
            },
            motleycrue: {
              description: "Six Gun Sall e Tesla abriram oara Motley Crue, que entregou puro rock e energia no palco.",
              date: "22 jul, 2026",
            },
            theoffspring: {
              description: "Jimmy Eat World surpreendeu na abertura, e o The Offspring fez o público vibrar com hits, risadas e uma homenagem inesquecível a Ozzy Osbourne, pura emoção!",
              date: "23 jul, 2025",
            },
            acdc2025: {
              description: "Viajamos 9h de Waterloo a Cleveland para realizar um sonho. The Pretty Reckless incendiou o palco, e Angus Young fez história com solos incríveis, o melhor show da minha vida.",
              date: "28 mai, 2025",
            },
            velhasvirgens: {
              description: "A lendária banda de rock brasileira levantou o público com humor afiado e letras cheias de atitude, entre risadas e caras vermelhas, ninguém ficou indiferente.",
              date: "27 jan, 2024"
            },
            massacration: {
              description: "Mesmo com um grande atraso, a energia não faltou! A banda incorporou os personagens com perfeição e, cercado de amigos, cada minuto virou pura diversão.",
              date: "26 nov, 2023",
            },
            kiss: {
              description: "Que espetáculo! Na última turnê, a banda provou que ainda tinha fôlego de sobra, pirotecnia, energia e uma presença de palco arrebatadora do início ao fim.",
              date: "25 abr, 2023",
            },
            scorpions: {
              description: "Fui sem grandes expectativas, mas saí impressionado! O Scorpions mostrou uma energia contagiante e uma presença de palco que fez cada segundo valer a pena.",
              date: "20 abr, 2023",
            },
            deeppurple: {
              description: "Chip Trick e Tesla abriram com classe, mas quando o Deep Purple tocou “Smoke on the Water”, a multidão cantou em coro, foi épico!",
              date: "12 dez, 2017",
            }
          }
        },
        footer: {
          rights: "Todos os direitos reservados.",
          contact: "Conecte-se comigo no LinkedIn"
        }
      },
    },
  },
}

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "pt",
  supportedLngs: ["en", "pt"],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  returnEmptyString: false,
})

export default i18n
