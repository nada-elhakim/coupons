import * as React from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SceneView} from "react-navigation";

interface Props {
    onClear?: any;
    onFocus?: any;
    onChangeText: any;
    onBlur?: any;
    value?: string;
}

interface State {
    isEmpty: boolean;
    isFocused: boolean;
}

class SearchBar extends React.Component<Props, State> {
    input: TextInput;

    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            isEmpty: value ? value === '' : true,
            isFocused: false
        };
    }

    focus = () => {
        this.input.focus();
        this.setState({isFocused: true})
    };

    blur = () => {
        this.input.blur();
    };

    clear = () => {
        this.input.clear();
        this.onChangeText('');
        this.props.onClear();
    };

    onFocus = () => {
        this.props.onFocus && this.props.onFocus();
        this.setState({ isEmpty: this.props.value === '' });
    };

    onBlur = () => {
        this.setState({isFocused: false});
        this.props.onBlur && this.props.onBlur();
    };

    onChangeText = text => {
        this.props.onChangeText(text);
        this.setState({ isEmpty: text === '' });
    };

    render() {
        const {isFocused} = this.state;
        return (
            <ScrollView
                scrollEnabled={false}
                keyboardShouldPersistTaps="never"
                contentContainerStyle={styles.inputContainer}>
                <TextInput
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onChangeText={this.onChangeText}
                    clearButtonMode={"while-editing"} style={styles.input}
                    ref={ref => {
                        this.input = ref
                    }}/>
                {
                    !isFocused &&
                    <TouchableOpacity onPress={this.focus} style={styles.placeholderContainer}>
                        <Ionicon name="ios-search" size={18}/>
                        <Text>Search</Text>
                    </TouchableOpacity>
                }
            </ScrollView>
        );
    }
}

export default SearchBar;

const styles = StyleSheet.create({
    inputContainer: {
        height: 36,
    },
    input: {
        height: 36,
        backgroundColor: 'white',
        width: '100%',
        position: 'absolute',
        borderRadius: 6,
        textAlign: 'center'
    },
    placeholderContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

