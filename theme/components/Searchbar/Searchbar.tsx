import React, {Component} from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

class SearchBar extends Component {
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
        this.setState({isFocused: false})
    };

    clear = () => {
        this.input.clear();
        this.onChangeText('');
        this.props.onClear();
    };

    onFocus = () => {
        this.props.onFocus();
        this.setState({ isEmpty: this.props.value === '' });
    };

    onBlur = () => {
        this.props.onBlur();
    };

    onChangeText = text => {
        this.props.onChangeText(text);
        this.setState({ isEmpty: text === '' });
    };

    render() {
        const { isEmpty, isFocused } = this.state;
        console.log(isFocused);
        return (
            <View style={styles.inputContainer}>
                <TextInput clearButtonMode={"while-editing"} style={styles.input} ref={ref => {
                    this.input = ref;
                }}/>
                {
                    !isFocused &&
                    <TouchableOpacity onPress={this.focus} style={styles.placeholderContainer}>
                        <Ionicon name="ios-search" size={18}/>
                        <Text>Search</Text>
                    </TouchableOpacity>
                }
            </View>
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

