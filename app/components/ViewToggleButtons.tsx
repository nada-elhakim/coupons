import * as React from 'react';
import {View, StyleSheet} from "react-native";
import Button from "../theme/components/Button/Button";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";
import Colors from "../theme/variables/Colors";

export enum ViewOption {
    List,
    Grid,
    Grid9
}

interface Props {
    iconSize?: number;
    iconColor?: string;
    selectedIconColor?: string;
    onToggleOptionSelected: (viewOption: ViewOption) => void;
}

interface State {
    viewOption: ViewOption;
}

class ViewToggleButtons extends React.Component<Props, State> {
    static defaultProps = {
        iconSize: 24,
        iconColor: Colors.tertiary,
        selectedIconColor: Colors.primary
    };

    state = {
        viewOption: ViewOption.Grid9
    };

    render() {
        const {
            iconSize,
            iconColor,
            selectedIconColor
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
        onToggleOptionSelected && onToggleOptionSelected(viewOption);
        this.setState({viewOption});
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
