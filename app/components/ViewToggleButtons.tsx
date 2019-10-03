import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import Button from "../theme/components/Button/Button";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";
import Colors from "../theme/variables/Colors";

export enum ViewOption {
    List,
    Grid,
    Grid9
}

class ViewToggleButtons extends Component {
    state = {
        viewOption: ViewOption.Grid9
    };

    render() {
        const {
            iconSize = 24,
            iconColor = Colors.tertiary,
            selectedIconColor = Colors.primary
        } = this.props;
        const {viewOption} = this.state;

        return (
            <View style={styles.container}>
                <Button
                    transparent
                    containerStyle={styles.button}
                    onPress={this.toggleButtonPressed.bind(this, ViewOption.Grid9)}>
                    <FontelloIcon
                        name="grid-9"
                        size={iconSize}
                        color={viewOption === ViewOption.Grid9 ? selectedIconColor : iconColor}/>
                </Button>

                <Button
                    transparent
                    containerStyle={styles.button}
                    onPress={this.toggleButtonPressed.bind(this, ViewOption.Grid)}>
                    <FontelloIcon
                        name="grid"
                        size={iconSize}
                        color={viewOption === ViewOption.Grid ? selectedIconColor : iconColor}/>
                </Button>

                <Button
                    transparent
                    containerStyle={styles.button}
                    onPress={this.toggleButtonPressed.bind(this, ViewOption.List)}>
                    <FontelloIcon
                        name="list"
                        size={iconSize}
                        color={viewOption === ViewOption.List ? selectedIconColor : iconColor}/>
                </Button>
            </View>
        )
    }

    toggleButtonPressed(viewOption: ViewOption) {
        const {onToggleOptionSelected} = this.props;
        this.setState({viewOption})
        onToggleOptionSelected && onToggleOptionSelected(viewOption);
    }
}

export default ViewToggleButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        margin: 10
    }
});
