import {APP_CONFIG} from "../config";
import Images from "../theme/variables/Images";

export interface Coupon {
    id: number;
    title: string;
    imageURL: string;
    value: number;
    valuePerDollar: string;
    isFavorite?: boolean;
}

export const CouponsMock: Coupon[] = [
    {
        id: 1,
        title: 'Cycle gear',
        imageURL: Images.cycleGearLogo,
        value: 10,
        valuePerDollar: '8 lbs. / $'
    },
    {
        id: 2,
        title: 'All posters',
        imageURL: Images.allPostersLogo,
        value: 30,
        valuePerDollar: '10 lbs. / $'
    },
    {
        id: 3,
        title: 'Autobarn',
        imageURL: Images.autobarnLogo,
        value: 112,
        valuePerDollar: '80 lbs. / $'
    },
    {
        id: 4,
        title: 'Booking',
        imageURL: Images.bookingLogo,
        value: 11,
        valuePerDollar: '500 lbs. / booking'
    },
    {
        id: 5,
        title: 'Chemical guys',
        imageURL: Images.chemicalGuysLogo,
        value: 43,
        valuePerDollar: '2 lbs. / $'
    },
    {
        id: 6,
        title: 'Oscaro',
        imageURL: Images.oscaroLogo,
        value: 200,
        valuePerDollar: '80 lbs. / $'
    }
];
