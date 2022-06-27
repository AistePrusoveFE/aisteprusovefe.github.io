export interface SingleFactProps {
    title: string,
    info: string[]
}

export interface SingleProjectProps {
    category: CategoryType,
    title: string,
    content: ProjectsContentProps
}

export type CategoryType = 'web' | 'art' | 'branding'

interface ProjectsContentProps {
    preview?: string
    url?: string,
    subtitle: string,
    img: string
    shape: string
}

interface ArticleContent {
    heading: string
    subheading: string
    photo?: string
    alt?: string
    description: string
    url: string
}

export interface SingleArticleProps {
    content: ArticleContent
}


interface DataList {
    aisteLoves: string[],
    about: SingleFactProps[],
    skills: string[],
    projects: SingleProjectProps[],
    articles: SingleArticleProps[]
}

const data: DataList = {
    aisteLoves: [
        '🥰 apples & peanut butter',
        'is actually a Sim - sul sul!',
        'grows her own 🍅🥬 & 🍏🍓',
        'has 2 meow meows 🙀😼🐈',
        'absolutely ❤️\'s nature 🌳',
        '❤️\'s cooking',
        'thinks summer is the best 😎☀️',
        'is happy to see you here! ❤️'
    ],
    about: [
        {
            title: 'My Story',
            info: [
                'Since teenager years I was into multimedia, but life happened..',
                '..and turned me into different direction - administrative or consultant jobs.',
                'However, my inner artist was knocking and desired creative work, hence digital illustrations came into my life as a therapy/hobby.',
                'In 2020 I finally decided to change my career and actually stepped in IT industry as I enrolled into Full Stack Developer program in CodeAcademy coding school.',
                'Learned programming, practiced design & illustration skills, and here we are in a page, I fully developed. 😎'
            ]
        },
        {
            title: 'Vision & Mission',
            info: [
                'I aim to make a product valuable.',
                'Keeping my code as clean, elegant and efficient as possible.',
                'My designs are simple and playful.',
                'My illustrations show the way I see the world'
            ]
        },
        {
            title: 'Personality',
            info: [
                'ENFJ-T',
                'Empathetic',
                'Positive vibes',
                'Slightly perfectionist',
                'Loves nature & gardening',
                'Marvel',
                'Into dark humor & weird stuff',
            ]
        },
        {
            title: 'Experience',
            info: [
                'CodeAcademy: PHP Consultant/Mentor 2020 Oct - 2021 Jan',
                'CodeAcademy: Front End (HTML, CSS, Javascript) Lecturer/Mentor 2021 Jan - 2021 Nov',
                'Freelance: Web Development & Web Design 2021 Nov - Present',
                'Freelance: Digital Illustrations 2022 May - Present'
            ]
        },
    ],
    skills: [
        'https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white',
        'https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white',
        'https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white',
        'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
        'https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white',
        'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
        'https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black',
        'https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white',
        'https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white',
        'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
        'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
        'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
        'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white',
        'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
        'https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white',
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
        'https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white',
        'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    ],
    projects: [
        {
            category: 'web',
            title: 'Creta Nails and Beauty',
            content: {
                preview: './web-preview/creta-nails.png',
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                img: 'https://www.sigmawebsolutions.com/wp-content/uploads/2020/05/AdobeStock_256229414.jpg',
                shape: './overlays/circle.svg'
            }
        },
        {
            category: 'art',
            title: 'Illustration',
            content: {
                subtitle: 'Makeup',
                img: './art-preview/makeup.svg',
                shape: './overlays/hexagon.svg'
            }
        },
        {
            category: 'branding',
            title: 'Meal Planner',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                img: 'https://andystalman.com/as/wp-content/uploads/Branding.jpg',
                shape: './overlays/hexa.svg'
            }
        },
        {
            category: 'web',
            title: 'E-Shop Nursery Garden',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                img: 'https://dmlab.edu.gr/assets/media/2019/09/Web_Development.png',
                shape: './overlays/circle.svg'
            }
        },
        {
            category: 'art',
            title: 'Illustration',
            content: {
                subtitle: 'Space Husband',
                img: './art-preview/egle-makeup.svg',
                shape: './overlays/hexagon.svg'
            }
        }, 
        {
            category: 'web',
            title: 'Mood Tracker',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                img: 'https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000',
                shape: './overlays/circle.svg'
            }
        },
        {
            category: 'art',
            title: 'Illustration',
            content: {
                subtitle: 'Maudymke',
                img: './art-preview/swimwear.svg',
                shape: './overlays/hexagon.svg'
            }
        },
        {
            category: 'art',
            title: 'Pizza Quizz',
            content: {
                subtitle: 'Static page to show off works',
                img: './art-preview/pinup.svg',
                shape: './overlays/hexagon.svg'
            }
        },
        {
            category: 'web',
            title: 'Recipes Database',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                img: 'https://img.freepik.com/free-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg',
                shape: './overlays/circle.svg'
            }
        },
        {
            category: 'art',
            title: 'Pizza Quizz',
            content: {
                subtitle: 'Static page to show off works',
                img: './art-preview/space-hubby.svg',
                shape: './overlays/hexagon.svg'
            }
        },
        {
            category: 'web',
            title: 'Landing Page',
            content: {
                preview: './web-preview/landing-d32c.png',
                url: 'https://landing-ihavebox.d32c.lt/',
                subtitle: 'Static page to show off works',
                img: 'https://landing-ihavebox.d32c.lt/static/media/hero.e8878a5487f1b4b94d6f.png',
                shape: './overlays/circle.svg'
            }
        },
    ],
    articles: [
        {
            content: {
                heading: 'Career Change Story',
                subheading: '',
                photo: '',
                alt: '',
                description: '',
                url: 'https://awesome-perky-tech-articles.super.site/1st-article'
            }
        },
        {
            content: {
                heading: 'Apps I Like',
                subheading: '',
                photo: '',
                alt: '',
                description: '',
                url: 'https://awesome-perky-tech-articles.super.site/illustration-ideas'
            }
        },
        {
            content: {
                heading: 'How I stay kinda sane',
                subheading: '',
                photo: '',
                alt: '',
                description: '',
                url: 'https://awesome-perky-tech-articles.super.site/resume'
            }
        },
        {
            content: {
                heading: 'Behind the scenes of illustrating',
                subheading: '',
                photo: '',
                alt: '',
                description: '',
                url: 'https://awesome-perky-tech-articles.super.site/illustration-ideas'
            }
        },
    ]
}

export default data