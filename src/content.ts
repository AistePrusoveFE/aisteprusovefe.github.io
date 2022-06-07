export interface SingleFactProps {
    title: string,
    info: string[]
    badges?: boolean
}

export interface SingleProjectProps {
    category: string,
    title: string,
    content: ContentProps
}

export type CategoryType = 'web' | 'art' | 'branding'

interface ContentProps {
    url: string,
    subtitle: string,
    img: string
}

export interface SingleArticleProps {
    title: string,
    content: string 
}


interface DataList {
    aisteLoves: string[],
    about: SingleFactProps[],
    projects: SingleProjectProps[],
    articles: SingleArticleProps[]
}

const data: DataList = {
    aisteLoves: [
        'loves apples & Peanut Butter',
        'is actually a Sim - Sul Sul!',
        'grows her own veggies & fruits',
        'has 2 meow meows',
        'absolutely loves nature',
        'loves cooking',
        'is happy to see you here! ❤️'
    ],
    about: [
        {
            title: 'My Story',
            info: ['Since teenager years I was into multimedia - nearly ended up as photographer, but..', 'Life happened and turned different direction to - administrator, receptionist or consultant jobs.', 'However I always felt my inner artist knocking and really desired creative work so was trying graphic design as hobby or therapy.', 'In 2020 I finally decided to change my career and stepped in IT industry.', 'Learned programming, practiced design & illustration skills, and here we are  in - page, I fully developed. 😎']
        },
        {
            title: 'Vision & Mission',
            info: ['I aim to help people or companies in developing their product and ofc share it with the world.', 'Keeping my code as clean, elegant and efficient as possible.', 'My designs are clean but with attention to detail and some perks.', 'Via illustrations I just wanna show, how I see the world.']
        },
        {
            badges: true,
            title: 'Skills',
            info: [
                'Languages I speak and apps I use:',
                'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white', 
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
                'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white', 
                'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', 
                'https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white', 
                'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', 
                'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', 
                'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E', 
                'https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white', 
                'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white', 
                'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue', 
                'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white', 
                'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', 
                'https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white', 
            ]
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
            category: 'web',
            title: 'Creta Nails and Beauty',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://www.sigmawebsolutions.com/wp-content/uploads/2020/05/AdobeStock_256229414.jpg'
            }
        },
        {
            category: 'art',
            title: 'Illustrations Gallery',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://design4users.com/wp-content/uploads/2021/03/digital-art-andrey-prokopenko-illustration.png.pagespeed.ce.U3_BJ-DAzE.png'
            }
        },
        {
            category: 'branding',
            title: 'Meal Planner',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://andystalman.com/as/wp-content/uploads/Branding.jpg'
            }
        },
        {
            category: 'web',
            title: 'E-Shop Nursery Garden',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://dmlab.edu.gr/assets/media/2019/09/Web_Development.png'
            }
        },
        {
            category: 'web',
            title: 'Mood Tracker',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000'
            }
        },
        {
            category: 'art',
            title: 'Pizza Quizz',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://i.pinimg.com/originals/d3/02/e4/d302e4d06d9afae957b686985215270a.jpg'
            }
        },
        {
            category: 'web',
            title: 'Recipes Database',
            content: {
                url: 'https://jade-fudge-91c3a3.netlify.app/',
                subtitle: 'Static page to show off works',
                // img: './projects-img/1.png'
                img: 'https://img.freepik.com/free-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg'
            }
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