import * as React from 'react';
import {FlatList} from "react-native";
import CouponCard from "./CouponCard";
import {Coupon} from "../mock/coupons";
import {ViewOption} from "./ViewToggleButtons";
import Metrics from "../theme/variables/Metrics";

interface Props {
    coupons: Coupon[];
    viewOption: ViewOption;
}

class CouponList extends React.Component<Props> {
    render() {
        const {coupons, viewOption} = this.props;
        return (
            <FlatList
                contentContainerStyle={{
                    paddingHorizontal: Metrics.defaultPadding,
                    marginHorizontal: viewOption === ViewOption.List ? 0 : -5
                }}
                key={viewOption}
                numColumns={this.getNumberOfColumns()}
                data={coupons}
                extraData={viewOption}
                keyExtractor={(item: Coupon) => item.id.toString()}
                renderItem={({item, index}) => <CouponCard coupon={item} viewOption={viewOption} index={index}/>} />
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
