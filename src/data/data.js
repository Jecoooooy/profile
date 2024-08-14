import{ ref  } from 'vue'
const education = ref([
    {
        id: 1,
        color: 'white',
        icon: 'mdi-school-outline',
        level: 'College',
        school: 'Cavite State University'
    },
    {
        id: 2,
        color: 'white',
        icon: 'mdi-school-outline',
        level: 'Highshool',
        school: 'Gen. E. Aguinaldo National High School'
    },
    {
        id: 3,
        color: 'white',
        icon: 'mdi-school-outline',
        level: 'Elementary',
        school: 'Biblica la Della Academy'
    },
])
const skills = ref({
    front : [
        {
            id:1,
            skill:'HTML',
            progress: 9,
            buffer:10,
            icon:'mdi-code-block-tags'
        },
        {
            id:2,
            skill:'CSS',
            progress: 8,
            buffer:9,
            icon:'mdi-language-css3'
        },
        {
            id:3,
            skill:'JAVASCRIPT',
            progress: 6,
            buffer:7,
            icon:'mdi-language-javascript'
        },
        {
            id:4,
            skill:'VUE JS',
            progress: 7,
            buffer:8,
            icon:'mdi-vuejs'
        },
        {
            id:5,
            skill:'VUETIFY',
            progress: 7,
            buffer:8,
            icon:'mdi-vuetify'
        },
    ],
    back:[
        {
            id:1,
            skill:'LARAVEL',
            progress: 9,
            buffer:10,
            icon:'mdi-laravel'
        },
        {
            id:2,
            skill:'PHP',
            progress: 8,
            buffer:9,
            icon:'mdi-language-php'
        },
        {
            id:3,
            skill:'MYSQL',
            progress: 6,
            buffer:7,
            icon:'mdi-database'
        },
        {
            id:4,
            skill:'APACHE',
            progress: 7,
            buffer:8,
            icon:'mdi-feather'
        },
    ]
})

const experience = ref([
        {
            color: 'info',
            date: 'January 20, 2024 - Present',
            title: 'Office Staff (Software Developer)',
            company: 'HRD Singapore Pte., Ltd.',
            address:'Housing/Production Industry',
            logo:'./images/hrd.jpg'
        },
        {
            color: 'info',
            date: 'September, 2021 - Present',
            title: 'Owner',
            company: 'PumpHouse Fitness Gym',
            address:'103 Pob. II Gen. E. Aguinaldo, Cavite',
            logo:'./images/ph.png',
            content:'./images/ph3.jpg',
        },
        {
            color: 'info',
            date: 'January 2, 2021 - December 2, 2023',
            title: 'Regional Stockist',
            company: 'Loadmanna Inc',
            address:'Caloocan, Philippines',
            logo:'./images/loadmanna.png',
            content:'./images/loadmanna1.jpg',
        },
        {
            color: 'info',
            date: 'June 1, 2018 - April 4, 2020',
            title: 'Sangguniang Kabataan Federation President',
            company: 'Municipality of Gen. E. Aguinaldo, Cavite',
            address:'Gen. E. Aguinaldo',
            logo:'./images/sk.png',
            content:'./images/sk1.png',
        },
        {
            color: 'info',
            date: 'June 24, 2019 - July 26, 2019',
            title: 'Internship',
            company: 'Alta Philippines I.T. Solutions and Web Page Design Inc',
            address:'Pasay City, Philippines',
            logo:'./images/alta.png',
            content:'./images/alta1.jpg',
        },
])
const portfolio = ref([
    {
        title:'Truck Rental Webpage',
        photo:'./images/truck.jpg',
        description:'Website template using HTML, css, javascript, bootsrap'
    },
    {
        title:'Restaurant Webpage',
        photo:'./images/resto.jpg',
        description:'Website template using HTML, css, javascript, bootsrap'
    },
    {
        title:'Spa Webpage',
        photo:'./images/spa.jpg',
        description:'Website template using HTML, css, javascript, bootsrap'
    },
    {
        title:'wedding Event Webpage',
        photo:'./images/wedding.jpg',
        description:'Website template using HTML, css, javascript, bootsrap'
    },
])
const data = ref({
    education, 
    skills,
    experience,
    portfolio
})

export default data