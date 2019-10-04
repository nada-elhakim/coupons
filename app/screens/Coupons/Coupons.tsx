import React, {Component} from 'react';
import SearchBar from "../../theme/components/Searchbar/Searchbar";
import {View} from "react-native";
import ViewToggleButtons, {ViewOption} from "../../components/ViewToggleButtons";
import {Coupon, CouponsMock} from "../../mock/coupons";
import CouponList from "../../components/CouponList";
import Dropdown, {DropdownOption} from "../../theme/components/Dropdown/Dropdown";
import Metrics from "../../theme/variables/Metrics";

class Coupons extends Component {
    coupons: Coupon[] = CouponsMock;
    sortOptions: DropdownOption[] = [
        {
            value: 1,
            label: 'Alphabetically'
        },
        {
            value: 2,
            label: 'Pounds Captured'
        },
        {
            value: 3,
            label: 'Pounds Captured'
        },
        {
            value: 4,
            label: 'Pounds Captured'
        }
    ];

    state = {
        currentViewOption: ViewOption.Grid
    };

    render() {
        return(
            <>
                <View style={{backgroundColor: '#ccc', padding: 8}}>
                    <SearchBar />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: Metrics.defaultPadding}}>
                    <Dropdown dropdownTitle="Sort by" options={this.sortOptions} onOptionSelected={this.onDropdownOptionSelected.bind(this)}/>
                    <ViewToggleButtons onToggleOptionSelected={this.onToggleOptionSelected.bind(this)} />
                </View>
                <CouponList coupons={this.coupons} viewOption={this.state.currentViewOption}/>
            </>
        )
    }

    onToggleOptionSelected(optionSelected: ViewOption) {
        this.setState({currentViewOption: optionSelected})
    }

    onDropdownOptionSelected(option: DropdownOption) {
        console.log('option selected', option);
    }
}

export default Coupons;
