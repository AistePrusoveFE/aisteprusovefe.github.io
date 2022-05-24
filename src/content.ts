export interface SingleQuestion {
    title: string,
    info: string
}

interface DataList {
    about: SingleQuestion[]
}

const data: DataList = {
    about: [
        {
            title: 'Aiste Prusove - Who this?',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'My Vision & Mission',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'Likes & Dislikes',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'Education',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
        {
            title: 'Experience',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde alias autem laboriosam tempora eum? Asperiores molestias temporibus incidunt nemo sit?'
        },
    ]
}

export default data