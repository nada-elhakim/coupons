import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Button from "../theme/components/Button/Button";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";
import Metrics from "../theme/variables/Metrics";
import ResponsiveImage from "../theme/components/ResponsiveImage/ResponsiveImage";
import Colors from "../theme/variables/Colors";
import {ViewOption} from "./ViewToggleButtons";
import AppContext from "../context/AppContext";
import {Coupon} from "../mock/coupons";

interface Props {
    coupon: Coupon;
    viewOption: ViewOption;
    index: number;
}

class CouponCard extends React.Component<Props> {
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
                    viewOption === ViewOption.Grid9 && styles.grid9Container
                ]}>
                    <Button
                        onPress={this.context.addCouponToFavorites.bind(this, coupon)}
                        transparent
                        containerStyle={{position: 'absolute', left: 16, top: 8}}>
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
                        onPress={this.context.captureCoupon.bind(this, coupon)}
                        transparent
                        containerStyle={styles.gridCouponButton}>
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
                        onPress={this.context.captureCoupon.bind(this, coupon)}
                        transparent
                        containerStyle={{marginRight: 8}}>
                        <FontelloIcon name="coupon" color={Colors.primary} size={24}/>
                    </Button>
                    <Button
                        onPress={this.context.addCouponToFavorites.bind(this, coupon)}
                        transparent>
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
        borderRadius: Metrics.defaultBorderRadius,
        borderColor: Colors.tertiary,
    },
    gridContainer: {
        paddingTop: 50,
        padding: Metrics.defaultPadding,
        alignItems: 'center',
        margin: Metrics.defaultMargin / 3
    },
    grid9Container: {
        padding: Metrics.defaultPadding / 2,
        paddingBottom: 50
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
    },
    gridCouponButton: {
        position: 'absolute',
        right: 16,
        bottom: 4
    },
    grid9CouponButton: {
        position: 'relative',
        alignSelf: 'flex-end'
    }
});
