import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Colors from "../theme/variables/Colors";


const AppTitle = () => {
    return (
        <Text style={styles.appTitle}>Shop</Text>
    )
};

export default AppTitle;

const styles = StyleSheet.create({
    appTitle: {
        color: Colors.light,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
});

