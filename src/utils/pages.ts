type Page = {
    pageName: string;
    imgSrc?: string;
    url?: string;
    desc?: string;
};

const pagesMap: Page[] = [
    {
        pageName: "Protección Mayor",
        imgSrc: "/images/proteccionmayor/services.png",
        url: "/proyectos/proteccion-mayor",
        desc: "Sistema de administración de servicios para personas mayores",
    },
    {
        pageName: "Sword - Rust web framework",
        imgSrc: "/images/sword.webp",
        url: "https://github.com/sword-web/sword",
        desc: "Inspirado en frameworks estructurados como Spring y NestJS.",
    },
];

export default pagesMap;
