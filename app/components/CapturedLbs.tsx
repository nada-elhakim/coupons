import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from "../theme/variables/Colors";
import AppContext from "../context/AppContext";

class CapturedLbs extends Component {
    static contextType = AppContext;

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.context.capturedCoupons} LBS Captured</Text>
            </View>
        )
    }
}

export default CapturedLbs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 3,
        paddingHorizontal: 8,
        paddingVertical: 2
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 11
    }
});
