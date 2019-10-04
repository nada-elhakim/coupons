import * as React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Colors from "../theme/variables/Colors";
import Metrics from "../theme/variables/Metrics";

interface Props {
    message: string;
}

const NoResultCard: React.FC<Props> = ({message = 'No results'}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.message}>{message}</Text>
        </View>
    )
};

export default NoResultCard;

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: Metrics.defaultBorderRadius,
        borderColor: Colors.tertiary,
        padding: Metrics.defaultPadding,
        margin: Metrics.defaultMargin
    },
    message: {
        fontSize: 18,
    }
});

