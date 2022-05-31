export interface SingleFactProps {
    title: string,
    info: string | string[]
}

export interface SingleProjectProps {
    title: string,
    content: string
}

export interface SingleArticleProps extends SingleProjectProps { }

interface DataList {
    about: SingleFactProps[],
    projects: SingleProjectProps[],
    articles: SingleArticleProps[]
}

const data: DataList = {
    about: [
        {
            title: 'My Story',
            info: 'Since teenager years I was into multimedia, but somehow turned different direction and was working jobs like - administrator, receptionist or consultant. However I always felt my inner artist knocking and really desired creative work. In 2020 I finally decided to change my career and stepped in IT industry. Learned programming, practiced design & illustration skills, and here we are - in my developed page. 😎'
        },
        {
            title: 'Vision & Mission',
            info: 'I am to help people or companies in developing their product and ofc share it with the world. I am trying to keep my code clean, elegant and efficient. So as my design.'
        },
        {
            title: 'Skills',
            info: ['CodeAcademy - Full Stack Developer (HTML, CSS, SCSS, Javascript, PHP)', 'Self Taught - Typescript, React.js, Next.js, Node.js']
        },
        {
            title: 'Personality',
            info: ['Foodie', 'Loves Nature & Gardening', 'Empathetic', 'Ambivert', 'Positive']
        },
        {
            title: 'Experience',
            info: ['CodeAcademy: PHP Consutant/Mentor & Front End Web Development Lecturer 2020 Oct - 2021 Oct', 'Freelance: Web Developer & Web Designer 2021 Oct - Present']
        },
    ],
    projects: [
        {
            title: 'Creta Nail and Beauty',
            content: 'lalalala'
        },
        {
            title: 'Meal Planner',
            content: 'lalalala'
        },
        {
            title: 'E-Shop Nursery Garden',
            content: 'lalalala'
        },
        {
            title: 'Mood Tracker',
            content: 'lalalala'
        },
        {
            title: 'Recipes Database',
            content: 'lalalala'
        },
        {
            title: 'Pizza Quizz',
            content: 'lalalala'
        },
    ],
    articles: [
        {
            title: "Career Change Story",
            content: ""
        },
        {
            title: "Apps I Like",
            content: ""
        },
        {
            title: "How I stay sane",
            content: ""
        },
        {
            title: "New Illustration alert",
            content: ""
        },
    ]
}

export default data