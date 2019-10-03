import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
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
        const {coupon} = this.props;
        return (
            <View style={[styles.container, {marginRight: 0}]}>
                <Button transparent>
                    <FontelloIcon name="heart" color={Colors.danger} size={24}/>
                </Button>

                <ResponsiveImage
                    source={coupon.imageURL} />

                <View>
                    <Text style={{marginBottom: 4}}>{coupon.valuePerDollar}</Text>
                    <Text style={styles.highlight}>{coupon.value} LBS.</Text>
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
                <Button transparent containerStyle={{position: 'absolute', right: 16, top: 8}}>
                    <FontelloIcon name="heart" color={Colors.danger} size={24}/>
                </Button>
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

    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Metrics.defaultPadding
    },
    highlight: {
        color: Colors.success,
        fontWeight: 'bold',
        fontSize: 16
    }

});
