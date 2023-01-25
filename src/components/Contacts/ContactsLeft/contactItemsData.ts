import {faLocationDot, faPhone, faAt, faShare} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

export const contactItemsData: Array<ContactItemType> = [
    {
        linkText: 'Moscow, Russia',
        hrefText: 'https://www.google.com/maps/d/viewer?hl=en&ie=UTF8&msa=0&ll=55.705928113365275%2C37.65673461180212&spn=0.024539%2C0.087891&z=11&mid=1qhbPNmVlg58r-HOGM_KVChL9W98',
        iconComponent: faLocationDot,
        newTab: '_blank',
    },
    {
        linkText: '+79875756232',
        hrefText: `tel:+79875756232`,
        iconComponent: faPhone,
    },
    {
        linkText: 'e.alexeev1705@gmail.com',
        hrefText: 'mailto:e.alexeev1705@gmail.com',
        iconComponent: faAt,
    },
    {
        linkText: 'Link to vk.com',
        hrefText: 'http://vk.com/finalfantasy_337',
        iconComponent: faShare,
    },
]

export type ContactItemType = {
    iconComponent: IconDefinition,
    linkText: string,
    hrefText?: string,
    newTab?: '_blank',
}