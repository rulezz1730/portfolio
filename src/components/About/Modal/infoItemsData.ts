import {faAt, faCalendarDays, faLocationDot, faPhone, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

export type AssignmentType = 'call' | 'sentMessage' | 'seeLocation';

export type infoItemsDataType = {
    [key: string]: {
        icon: IconDefinition,
        content: string,
        connection?: { link: boolean, assignment: AssignmentType },
    }
}

export const infoItemsData: infoItemsDataType = {
    user: {icon: faUserAlt, content: 'Evgeny Alexeev',},
    age: {icon: faCalendarDays, content: '31.08.1991'},
    location: {icon: faLocationDot, content: 'Russian, Moscow', connection: {link: true, assignment: 'seeLocation'}},
    contacts: {icon: faPhone, content: '+7(987)575-62-32', connection: {link: true, assignment: 'call'}},
    mail: {icon: faAt, content: 'e.alexeev1705@gmail.com', connection: {link: true, assignment: 'sentMessage'}},
};

