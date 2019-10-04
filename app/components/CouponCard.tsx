import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from "../theme/components/Button/Button";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";
import Metrics from "../theme/variables/Metrics";
import ResponsiveImage from "../theme/components/ResponsiveImage/ResponsiveImage";
import Colors from "../theme/variables/Colors";
import {ViewOption} from "./ViewToggleButtons";
import AppContext from "../context/AppContext";
import {Coupon} from "../mock/coupons";

class CouponCard extends Component{
    static contextType = AppContext;

    render() {
        const {viewOption} = this.props;
        return (viewOption === ViewOption.Grid || viewOption === ViewOption.Grid9) ? this.renderGridView() : this.renderListView()
    }

    renderGridView() {
        const {coupon, viewOption} = this.props;
        const imgWidth = viewOption === ViewOption.Grid ? (Metrics.windowWidth / 2) - 60 : (Metrics.windowWidth / 3) - 60;
        return (
            <View style={{
                flex: viewOption === ViewOption.Grid ? 1/2 : 1/3
            }}>
                <View style={[
                    styles.container,
                    styles.gridContainer,
                    {
                        // marginRight: this.calculateRightMargin(index, viewOption),
                    }
                ]}>
                    <Button transparent containerStyle={{position: 'absolute', left: 16, top: 8}}>
                        <FontelloIcon name="heart" color={Colors.danger} size={24}/>
                    </Button>

                    <ResponsiveImage
                        width={imgWidth}
                        source={coupon.imageURL} />

                    <View>
                        <Text style={{marginBottom: 10, textAlign: 'center'}}>{coupon.valuePerDollar}</Text>
                        <Text style={[styles.highlight, {textAlign: 'center'}]}>{coupon.value} LBS.</Text>
                    </View>

                    <Button
                        onPress={this.captureCoupon.bind(this, coupon)}
                        transparent
                        containerStyle={{position: 'absolute', right: 16, bottom: 4}}>
                        <FontelloIcon name="coupon" color={Colors.primary} size={24}/>
                    </Button>
                </View>
            </View>

        )
    }

    renderListView() {
        const {coupon} = this.props;
        return (
            <View style={[styles.container, styles.listContainer]}>
                <ResponsiveImage
                    width={100}
                    source={coupon.imageURL} />

                <View style={{paddingHorizontal: 12}}>
                    <Text style={{marginBottom: 4}}>{coupon.valuePerDollar}</Text>
                    <Text style={styles.highlight}>{coupon.value} LBS.</Text>
                </View>

                <View style={{position: 'absolute', right: 16, top: 8, flexDirection: 'row'}}>
                    <Button
                        onPress={this.captureCoupon.bind(this, coupon)}
                        transparent
                        containerStyle={{marginRight: 8}}>
                        <FontelloIcon name="coupon" color={Colors.primary} size={24}/>
                    </Button>
                    <Button transparent>
                        <FontelloIcon name="heart" color={Colors.danger} size={24}/>
                    </Button>
                </View>

            </View>
        )
    }

    captureCoupon(coupon: Coupon) {
        this.context.captureCoupon(coupon);
    }
}

export default CouponCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.tertiary,
    },
    gridContainer: {
        paddingTop: 50,
        padding: Metrics.defaultPadding,
        alignItems: 'center',
        margin: 5
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Metrics.defaultPadding,
        marginBottom: Metrics.defaultMargin,
    },
    highlight: {
        color: Colors.success,
        fontWeight: 'bold',
        fontSize: 16
    }
});
