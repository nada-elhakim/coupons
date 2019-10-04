import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from "../theme/variables/Colors";
import AppContext from "../context/AppContext";
import Metrics from "../theme/variables/Metrics";

const CapturedLbs: React.FC = () => {
    const context: any = React.useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{context.capturedCoupons} LBS Captured</Text>
        </View>
    )
};

export default CapturedLbs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: Metrics.defaultBorderRadius /2,
        paddingHorizontal: Metrics.defaultPadding / 2,
        paddingVertical: 2
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 11
    }
});
