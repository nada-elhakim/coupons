import Images from "../theme/variables/Images";

export interface Coupon {
    id: number;
    title: string;
    imageURL: string;
    value: number;
    valuePerDollar: string;
    isFavorite?: boolean;
    date: number;
}

export const CouponsMock: Coupon[] = [
    {
        id: 1,
        title: 'Cycle gear',
        imageURL: Images.cycleGearLogo,
        value: 10,
        valuePerDollar: '8 lbs. / $',
        date: 1570212284274
    },
    {
        id: 2,
        title: 'All posters',
        imageURL: Images.allPostersLogo,
        value: 30,
        valuePerDollar: '10 lbs. / $',
        date: 1570212285274
    },
    {
        id: 3,
        title: 'Autobarn',
        imageURL: Images.autobarnLogo,
        value: 112,
        valuePerDollar: '80 lbs. / $',
        date: 1570212286274
    },
    {
        id: 4,
        title: 'Booking',
        imageURL: Images.bookingLogo,
        value: 11,
        valuePerDollar: '500 lbs. / booking',
        date: 1570212287274
    },
    {
        id: 5,
        title: 'Chemical guys',
        imageURL: Images.chemicalGuysLogo,
        value: 43,
        valuePerDollar: '2 lbs. / $',
        date: 1570212288274
    },
    {
        id: 6,
        title: 'Oscaro',
        imageURL: Images.oscaroLogo,
        value: 200,
        valuePerDollar: '80 lbs. / $',
        date: 1570212289274
    },
    {
        id: 7,
        title: 'Oscaro',
        imageURL: Images.oscaroLogo,
        value: 200,
        valuePerDollar: '80 lbs. / $'
    }
];
