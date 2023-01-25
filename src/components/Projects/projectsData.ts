import todoUrl from '../../common/images/projectsImg/todo-app.png'
import shoesStoreUrl from '../../common/images/projectsImg/shoes-store.png'
import portfolioUrl from '../../common/images/projectsImg/portfolio.png'
import fastCompanyApp from '../../common/images/projectsImg/fastCompanyApp.png'
import funnyCounterApp from '../../common/images/projectsImg/fannyCounter.png'
import github from '../../common/images/projectsImg/myGithub.png'

const projectsData: ProjectDataType = {
    'todoApp': {
        url: todoUrl,
        title: 'Todo App',
        link: 'https://github.com/rulezz1730/Todolist-App',
        description: 'This application allows you to create Tudulists with tasks, mark completed tasks.',
    },
    'shoesStore': {
        url:shoesStoreUrl,
        title: 'Simple presentation online shoes store',
        link: 'https://github.com/rulezz1730/React-shoes-store',
        description: 'This is a simple little online store that allows you to buy sneakers, put them in a shopping cart, etc. More focused on education.',
    },
    'portfolio': {
        url: portfolioUrl,
        title: 'Site portfolio',
        link:'https://github.com/rulezz1730/portfolio',
        description: 'This site is the portfolio site you are on. You can find all the functionality here. Will be updated over time ',
    },
    'searchCompany': {
        url: fastCompanyApp,
        title: 'Training Project - Fast Company App',
        link:'https://github.com/rulezz1730/React.js-Fast-company-app',
        description: 'Training project - application for finding a company for vacation (front-end and back-end)'
    },
    'fannyCounter': {
        url: funnyCounterApp,
        title: 'Training Project - Fast Company App',
        link:'https://github.com/rulezz1730/Funny-counter',
        description: 'Its a little pet-project for training skills'
    },
    'socialWeb': {
        url: github,
        title: 'Social Web - Coming Soon',
        link:'https://github.com/rulezz1730?tab=repositories',
        description: 'Training project - a social web (fron-end) will be uploaded soon. ' +
            'Now in process. In the meantime, you can ' +
            'check out my github by clicking on the link'
    }
}

export type ProjectDataType = {
    [key:string]: {
        url: string,
        title: string,
        link: string,
        description: string,
    }
}

export default projectsData;