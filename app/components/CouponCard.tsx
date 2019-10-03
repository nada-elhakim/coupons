import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from "../theme/components/Button/Button";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";
import Metrics from "../theme/variables/Metrics";
import ResponsiveImage from "../theme/components/ResponsiveImage/ResponsiveImage";
import Colors from "../theme/variables/Colors";
import {ViewOption} from "./ViewToggleButtons";

class CouponCard extends Component{
    render() {
        const {viewOption} = this.props;
        return (viewOption === ViewOption.Grid || viewOption === ViewOption.Grid9) ? this.renderGridView() : this.renderListView()
    }

    renderGridView() {
        const {coupon, viewOption} = this.props;
        return (
            <View style={[styles.container, {marginRight: 0}]}>
                <Button transparent>
                    <FontelloIcon name="heart" color={Colors.danger} size={24}/>
                </Button>

                {/*<ResponsiveImage*/}
                {/*    height={200}*/}
                {/*    width={200}*/}
                {/*    source={coupon.imageURL} />*/}

                <View>
                    <Text>{coupon.valuePerDollar}</Text>
                    <Text>{coupon.value}</Text>
                </View>
            </View>
        )
    }

    renderListView() {
        const {coupon} = this.props;
        return (
            <View style={styles.container}>
                {/*<ResponsiveImage*/}
                {/*    width={Metrics.windowWidth}*/}
                {/*    source={coupon.imageURL} />*/}

                <View>
                    <View>
                        <Text>{coupon.valuePerDollar}</Text>
                        <Text>{coupon.value}</Text>
                    </View>
                    <Button transparent>
                        <FontelloIcon name="heart" color={Colors.danger} size={24}/>
                    </Button>
                </View>
            </View>
        )
    }
}

export default CouponCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.tertiary,
        marginBottom: Metrics.defaultMargin,
        marginHorizontal: Metrics.defaultMargin
    },
    gridContainer: {
        backgroundColor: 'red',
        marginRight: 0
    },
    grid9Container: {

    }

});
