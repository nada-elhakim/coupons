import React, {Component} from 'react';
import SearchBar from "../../theme/components/Searchbar/Searchbar";
import {View, StyleSheet} from "react-native";
import ViewToggleButtons, {ViewOption} from "../../components/ViewToggleButtons";
import {Coupon, CouponsMock} from "../../mock/coupons";
import CouponList from "../../components/CouponList";
import Dropdown, {DropdownOption} from "../../theme/components/Dropdown/Dropdown";
import Metrics from "../../theme/variables/Metrics";
import Colors from "../../theme/variables/Colors";
import {sortOptions, SortOptionValue} from "../../mock/coupon-sort-options";

class Coupons extends Component {
    state = {
        currentViewOption: ViewOption.Grid,
        coupons: [...CouponsMock]
    };

    render() {
        const {coupons} = this.state;
        return(
            <>
                <View style={styles.searchBarContainer}>
                    <SearchBar onChangeText={this.searchCoupons.bind(this)}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: Metrics.defaultPadding}}>
                    <Dropdown
                        dropdownTitle="Sort by"
                        options={sortOptions}
                        onOptionSelected={this.onDropdownOptionSelected.bind(this)}/>
                    <ViewToggleButtons onToggleOptionSelected={this.onToggleOptionSelected.bind(this)} />
                </View>
                <CouponList coupons={coupons} viewOption={this.state.currentViewOption}/>
            </>
        )
    }

    onToggleOptionSelected(optionSelected: ViewOption) {
        this.setState({currentViewOption: optionSelected})
    }

    onDropdownOptionSelected(option: DropdownOption) {
        console.log('option selected', option);
        this.sortCoupon(option.value)
    }

    searchCoupons(value: string) {
        if (value.length > 2 && value !== '') {
            const filtered = this.state.coupons.filter(coupon => coupon.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
            this.setState({coupons: filtered});
        } else {
            this.setState({coupons: CouponsMock});
        }
    }

    sortCoupon(optionValue: SortOptionValue) {
        let coupons = this.state.coupons;
        switch (optionValue) {
            case SortOptionValue.ALPHABETICAL:
                coupons = coupons.sort((a: Coupon, b: Coupon) => a.title.localeCompare(b.title));
                break;
            case SortOptionValue.POUNDS_CAPTURED:
                coupons = coupons.sort((a: Coupon, b: Coupon) => b.value - a.value);
                break;
            case SortOptionValue.DATE:
                coupons = coupons.sort((a: Coupon, b: Coupon) => b.date - a.date);
                break;
            default:
                coupons = CouponsMock;
        }

        this.setState({coupons})
    }
}

export default Coupons;

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: Colors.tertiary,
        paddingHorizontal: Metrics.defaultPadding,
        paddingVertical: Metrics.defaultPadding / 2
    }
});
