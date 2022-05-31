export interface SingleFactProps {
    title: string,
    info: string[]
    badges?: boolean
}

export interface SingleProjectProps {
    title: string,
    content: string
}

export interface SingleArticleProps extends SingleProjectProps { }


interface DataList {
    aisteLoves: string[],
    about: SingleFactProps[],
    projects: SingleProjectProps[],
    articles: SingleArticleProps[]
}

const data: DataList = {
    aisteLoves: [
        'loves apples & PB',
        'is actually a Sim',
        'grows her own veggies & fruits',
        'has 2 meow meows',
        'paints illustrations',
        'loves cooking',
        'is thankful for coming by! ❤️'
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
            info: ['https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white', 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white', 'https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white', 'https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white', 'https://img.shields.io/badge/Adobe%20Lightroom-31A8FF?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white', 'https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black', 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white', 'https://img.shields.io/badge/Codecademy-FFF0E5?style=for-the-badge&logo=codecademy&logoColor=303347', 'https://img.shields.io/badge/freecodecamp-27273D?style=for-the-badge&logo=freecodecamp&logoColor=white', 'https://img.shields.io/badge/Future%20Learn-000000?style=for-the-badge&logo=futurelearn&logoColor=white', 'https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white', 'https://img.shields.io/badge/Udemy-EC5252?style=for-the-badge&logo=Udemy&logoColor=white', 'https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white', 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white', 'https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black', 'https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white', 'https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white', '	https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white', 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white', 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white', 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white', 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white', 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white', 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', 'https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white', 'https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white', 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E', 'https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white', 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white', 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue', 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white', 'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', 'https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white', 'https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white', 'https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white', 'https://img.shields.io/badge/Todoist-E44332?style=for-the-badge&logo=todoist&logoColor=white', 'https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white', 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white', 'https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white', 'https://img.shields.io/badge/windows%20terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white', 'https://img.shields.io/badge/Firefox_Browser-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white', 'https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white', 'https://img.shields.io/badge/Apple%20laptop-333333?style=for-the-badge&logo=apple&logoColor=white']
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