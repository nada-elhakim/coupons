import React, { Component } from 'react';
import {
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    StyleSheet,
    Keyboard, ViewStyle,
} from 'react-native';
import Colors from '../../variables/Colors';
import Metrics from '../../variables/Metrics';

interface Props {
    TouchableComponent?: React.ElementType<TouchableNativeFeedback | TouchableOpacity>;
    containerStyle?: ViewStyle,
    buttonStyle?: ViewStyle,
    disabledStyle?: ViewStyle,
    disabled?: boolean,
    headerButton?: boolean,
    loading?: boolean,
    transparent?: boolean;
    small?: boolean,
    children: any,
    ViewComponent?: React.ElementType<View>,
    onPress: () => void
}

class Button extends Component<Props> {
    static defaultProps = {
        TouchableComponent:  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity,
        onPress: () => console.log('Please attach a method to this component'),
        disabled: false,
        loading: false,
        transparent: false,
    };

    render() {
        const {
            TouchableComponent,
            containerStyle,
            buttonStyle,
            disabledStyle,
            disabled,
            headerButton,
            loading,
            transparent,
            small,
            children,
            ViewComponent = View,
        } = this.props;

        return (
            <View style={[containerStyle]}>
                <TouchableComponent
                    onPress={this.onButtonPress.bind(this)}
                    disabled={disabled}
                    underlayColor={transparent ? 'transparent' : Colors.buttonUnderlayColor}
                    activeOpacity={transparent ? 0.2 : undefined}>
                    <ViewComponent
                        style={[
                            styles.button,
                            small && {height: Metrics.buttonSmallHeight},
                            buttonStyle,
                            disabled && styles.disabled,
                            disabled && disabledStyle,
                            headerButton && { backgroundColor: 'transparent', height: undefined },
                            transparent && { backgroundColor: 'transparent', elevation: 0 },
                        ]}>
                        {children}
                        {loading && <ActivityIndicator color={Colors.white} style={styles.indicatorStyle}/>}
                    </ViewComponent>
                </TouchableComponent>
            </View>
        );
    }

    onButtonPress() {
        const {onPress} = this.props;
        if (onPress) {
            onPress();
            Keyboard.dismiss();
        }
    }
}

export default Button;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: Metrics.buttonHeight,
        alignItems: 'center',
        borderRadius: Metrics.buttonBorderRadius,
        backgroundColor: Colors.light,
        position: 'relative',
    },
    disabled: {
        backgroundColor: Colors.primary,
    },
    transparentTitle: {
        color: Colors.buttonTransparentTitleColor,
    },
    title: {
        backgroundColor: 'transparent',
        color: Colors.buttonTitleColor,
        fontSize: 16,
        textAlign: 'center',
        padding: 8,
    },
    disabledTitle: {
        color: Colors.buttonDisabledColor,
    },
    iconContainer: {
        marginHorizontal: 5,
    },
    indicatorStyle: {
        position: 'absolute',
        right: 16,
        top: Metrics.buttonHeight / 3.5,
    },
});

