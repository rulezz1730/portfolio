export const educationData: Array<TimelineItemType> = [
    {time: '2022-2023', place: 'IT-Incubator', speciality: 'Frontend Developer' },
    {time: '2021-2022', place: 'Vladilen Minin', speciality: 'Junior Frontend Developer' },
    {time: '2009-2014', place: 'ChuvSU', speciality: 'Machine Building Engineer' }
]

export const workingData: Array<TimelineItemType> = [
    {time: '2021-running', place: 'Moscow, Russia', speciality: 'Freelance Frontend Dev' },

]

export type TimelineItemType = {
    time: string,
    place: string,
    speciality: string
}