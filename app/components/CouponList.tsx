import React, {Component} from "react";
import {FlatList} from "react-native";
import CouponCard from "./CouponCard";
import {Coupon} from "../mock/coupons";
import {ViewOption} from "./ViewToggleButtons";
import Metrics from "../theme/variables/Metrics";

class CouponList extends Component {
    render() {
        const {coupons, viewOption} = this.props;
        return (
            <FlatList
                contentContainerStyle={{paddingHorizontal: Metrics.defaultPadding}}
                key={viewOption}
                numColumns={this.getNumberOfColumns()}
                data={coupons}
                extraData={viewOption}
                keyExtractor={(item: Coupon) => item.id.toString()}
                renderItem={({item}) => <CouponCard coupon={item} viewOption={viewOption}/>} />
        );
    }

    getNumberOfColumns() {
        const {viewOption} = this.props;
        switch (viewOption) {
            case ViewOption.Grid9:
                return 3;
            case ViewOption.Grid:
                return 2;
            default:
                return 1;
        }

    }
}

export default CouponList;
