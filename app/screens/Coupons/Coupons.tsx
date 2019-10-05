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
import CouponService from "../../services/CouponService";

class Coupons extends Component {
    couponService = new CouponService();

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
                <CouponList
                    noResultsMessage="No coupons"
                    coupons={coupons}
                    viewOption={this.state.currentViewOption}/>
            </>
        )
    }

    onToggleOptionSelected(optionSelected: ViewOption) {
        this.setState({currentViewOption: optionSelected})
    }

    onDropdownOptionSelected(option: DropdownOption) {
        this.sortCoupon(option.value)
    }

    searchCoupons(value: string) {
        const filtered = this.couponService.searchCoupons(value, this.state.coupons);
        console.log('filtered', filtered);
        this.setState({coupons: filtered});
    }

    sortCoupon(optionValue: SortOptionValue) {
        this.setState({coupons: this.couponService.sortCoupon(optionValue,  this.state.coupons)});
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
