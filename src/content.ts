export interface SingleQuestionProps {
    title: string,
    info: string | string[]
}

export interface SingleProjectProps {
    title: string,
    content: string
}

export interface SingleArticleProps extends SingleProjectProps {}

interface DataList {
    about: SingleQuestionProps[],
    projects: SingleProjectProps[],
    articles: SingleArticleProps[]
}

const data: DataList = {
    about: [
        {
            title: 'Aiste Prusove - Who this?',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'My Vision & Mission',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'Education',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'My personality',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'Experience',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
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