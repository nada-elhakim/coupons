import React, {Component} from 'react';
import SearchBar from "../../theme/components/Searchbar/Searchbar";
import {View} from "react-native";
import ViewToggleButtons, {ViewOption} from "../../components/ViewToggleButtons";
import {Coupon, CouponsMock} from "../../mock/coupons";
import CouponList from "../../components/CouponList";

class Coupons extends Component {
    coupons: Coupon[] = CouponsMock;

    state = {
        currentViewOption: ViewOption.Grid
    };

    render() {
        return(
            <>
                <View style={{backgroundColor: '#ccc', padding: 8}}>
                    <SearchBar />
                </View>
                <View>
                    <ViewToggleButtons onToggleOptionSelected={this.onToggleOptionSelected.bind(this)} />
                </View>
                <CouponList coupons={this.coupons} viewOption={this.state.currentViewOption}/>
            </>
        )
    }

    onToggleOptionSelected(optionSelected: ViewOption) {
        this.setState({currentViewOption: optionSelected})
    }

}

export default Coupons;
