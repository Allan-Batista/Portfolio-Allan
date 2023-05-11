import {
  mobile,
  design,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  proIot,
  spTech,
  udemy,
  ingles,
  portGabi,
  elixir,
  greenTrash,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

export const navLinksExternal = [
  {
    title: "Linkedin",
    source_code_link: "https://www.linkedin.com/in/allan-batista-398958240/",
  },
  {
    title: "GitHub",
    source_code_link: "https://github.com/Allan-Batista",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    icon: design,
  },
  {
    title: "Front-End",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End - React.js Developer",
    company_name: "ProIOT",
    icon: proIot,
    iconBg: "#383E56",
    date: "Janeiro 2022 - Janeiro 2023",
    points: [
      "Responsável pelo desenvolvimento de telas integradas com back-end, correção de bugs e desenvolvimento de UX/UI desing.",
      "Colaborar com uma equipe multifuncional, junto com outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas .",
    ],
  },
];

const education = [
  {
    title: "Analise e Desenvolvimento de Sistemas",
    company_name: "SPTECH",
    icon: spTech,
    iconBg: "#383E56",
    date: "Agosto 2021 - Novembro 2023",
    points: [
      "Faculdade de tecnologia no curso de ADS.",
      "Curso voltado para aprender as melhores tecnologias e se tornar um bom profissional com um bom socioemocional.",
      "Criação de projetos semestrais na separação de três sprints.",
    ],
  },
  {
    title: "ReactJS do basico ao Avançado",
    company_name: "UDEMY",
    icon: udemy,
    iconBg: "#383E56",
    date: "Janeiro 2022 - março 2022",
    points: [
      "Curso voltado ao desenvolvimento de telas com a tecnologia React.JS.",
      "Com aulas interativas e com o foco em tirar total entendimento do curso.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas .",
    ],
  },
  {
    title: "Inglês",
    company_name: "Escola de Idiomas de São Caetano",
    icon: ingles,
    iconBg: "#383E56",
    date: "Janeiro 2015 - Junho 2019",
    points: [
      "Curso para aprender inglês",
      "Voltado para o inglês gramatico e conversador.",
      "Atualmente estou com um inglês intermediario.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portifolio Gabrielle",
    description:
      "Portifolio da Gabrielle Cicarelli feito em ReactJs - Typescript, i18n e Framer-Motion ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
    ],
    image: portGabi,
    source_code_link: "https://gcicarelli.com/",
  },
  {
    name: "Elixir - Doação de sangue",
    description:
      "Projeto da faculdade, focado no publico jovem, tem como propósito de trazer informações sobre doação de sangue para seus usuários captando  mais doadores para atingir a média estipulada pela ONU de 3% de doadores no país, o que equivale a 363 milhões de brasileiros",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: elixir,
    source_code_link: "https://github.com/foliveiracamara/elixir-www",
  },
  {
    name: "GreenTrash - Reciclagem",
    description:
      "Projeto da Faculdae, um projeto que faz a ligação entre quem quer reciclar, quem transporta, e quem faz o tratamento e destinação final dos resíduos recicláveis. Buscamos realizar o processo utilizando a tecnologia ao nosso favor, tanto na comunicação entre todas as partes quanto na disseminação dos benefícios da reciclagem para o meio ambiente e todas as pessoas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
    ],
    image: greenTrash,
    source_code_link: "https://github.com/GreenTrash/GreenTrash",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
