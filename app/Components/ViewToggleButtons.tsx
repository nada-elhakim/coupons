import React from 'react';
import {View, StyleSheet} from "react-native";
import Button from "../../theme/components/Button/Button";
import FontelloIcon from "../../theme/components/Icon/FontelloIcon";
import Colors from "../../theme/variables/Colors";

export enum ViewOption {
    List,
    Grid,
    Grid9
}

const ViewToggleButtons = ({iconSize = 24, iconColor = Colors.tertiary}) => {
    const toggleButtonPressed = (viewOption: ViewOption) => {
        console.log(viewOption);
    };

    return (
        <View style={styles.container}>
            <Button transparent containerStyle={styles.button} onPress={toggleButtonPressed.bind(this, ViewOption.Grid9)}>
                <FontelloIcon name="grid-9" size={iconSize} color={iconColor}/>
            </Button>
            <Button transparent containerStyle={styles.button} onPress={toggleButtonPressed.bind(this, ViewOption.Grid)}>
                <FontelloIcon name="grid" size={iconSize} color={iconColor}/>
            </Button>
            <Button transparent containerStyle={styles.button} onPress={toggleButtonPressed.bind(this, ViewOption.List)}>
                <FontelloIcon name="list" size={iconSize} color={iconColor}/>
            </Button>
        </View>
    )
};

export default ViewToggleButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        margin: 10
    }
});
