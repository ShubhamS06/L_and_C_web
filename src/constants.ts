export const brandName = "Lines in Curves"

export const heroSectionData = {
    title: "EXPERIENCE THE",
    heading: "Lines N Curves Difference",
    subHeading: "Mastering the Architecture, Interior & Landscape Design",
}

export const navLinks = [
    { text: "Home", path: "/" },
    { text: "Portfolio", path: "portfolio" },
    { text: "About Us", path: "about" },
    { text: "Contact Us", path: "contact-us" },
]

export const sectionIds = navLinks.map(l => l.path)

// PortfolioPage
export const cardsData = [
    { title: "Rozha One Co.", text: "Architecture & interior Design", link: "", imageUrl: "/portfolio-card-1.png" },
    { title: "Casa Serenity", text: "Architecture & interior Design", link: "", imageUrl: "/portfolio-card-2.png" },
    { title: "Casa Serenity", text: "Architecture & interior Design", link: "", imageUrl: "/portfolio-card-3.png" },
    { title: "Rozha One Co.", text: "Architecture & interior Design", link: "", imageUrl: "/portfolio-card-4.png" },
]
export type CardData = typeof cardsData[number]

export const portfolioHighlightsData = [
    {
        icon: "/icons/highlight-1.png",
        text: "Highlight",
    },
    {
        icon: "/icons/highlight-2.png",
        text: "Highlight",
    },
    {
        icon: "/icons/highlight-3.png",
        text: "Highlight",
    },
    {
        icon: "/icons/highlight-4.png",
        text: "Highlight",
    },
    {
        icon: "/icons/highlight-5.png",
        text: "Highlight",
    },
    {
        icon: "/icons/highlight-6.png",
        text: "Highlight",
    },
]