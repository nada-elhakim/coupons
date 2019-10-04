import {DropdownOption} from "../theme/components/Dropdown/Dropdown";

export enum SortOptionValue {
    ALPHABETICAL,
    POUNDS_CAPTURED,
    DATE,
    NONE
}

export const sortOptions: DropdownOption[] = [
    {
        value: SortOptionValue.NONE,
        label: 'None'
    },
    {
        value: SortOptionValue.ALPHABETICAL,
        label: 'Alphabetically'
    },
    {
        value: SortOptionValue.POUNDS_CAPTURED,
        label: 'Pounds Captured'
    },
    {
        value: SortOptionValue.DATE,
        label: 'Newest'
    }
];
