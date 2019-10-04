import * as React from "react";
import Button from "../Button/Button";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {
    Alert,
    Modal,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback
} from "react-native";
import Colors from "../../variables/Colors";
import Metrics from "../../variables/Metrics";

export interface DropdownOption {
    value: any;
    label: string;
}

interface State {
    modalVisible: boolean;
    selectedOption: DropdownOption;
}

interface Props {
    dropdownTitle?: string;
    options: DropdownOption[];
    onOptionSelected: (option: DropdownOption) => void;
}

class Dropdown extends React.Component<Props, State> {
    static defaultProps = {
        dropdownTitle: 'Select'
    };

    state = {
        modalVisible: false,
        selectedOption: null
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const {
            dropdownTitle,
            options,
        } = this.props;

        const {
            selectedOption
        } = this.state;

        return (
            <View style={{flex: 1}}>
                <Button
                    containerStyle={styles.dropdown}
                    buttonStyle={styles.dropdownButton}
                    transparent
                    onPress={this.setModalVisible.bind(this, !this.state.modalVisible)}>
                    <Text>{selectedOption ? selectedOption.label : dropdownTitle}</Text>
                    <Fontisto name="caret-down" />
                </Button>
                {options && this.renderOptions(options)}
            </View>

        );
    }

    renderOptions(options: DropdownOption[]) {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <TouchableWithoutFeedback onPress={this.setModalVisible.bind(this, !this.state.modalVisible)}>
                    <View style={styles.modalWrapper}>
                        <View style={styles.modalContent}>
                            <FlatList
                                data={options}
                                keyExtractor={(item: DropdownOption) => item.value.toString()}
                                renderItem={({item}) => this.renderOption(item)} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    renderOption(option: DropdownOption) {
        return (
            <Button
                transparent
                onPress={this.optionSelected.bind(this, option)}
                buttonStyle={styles.dropdownOptionButton}
                containerStyle={styles.dropdownOption}>
                <Text>{option.label}</Text>
                {option === this.state.selectedOption && <Feather name="check" size={24} color={Colors.success}/>}
            </Button>
        );
    }

    optionSelected(option: DropdownOption) {
        const {
            onOptionSelected
        } = this.props;
        this.setState({selectedOption: option});
        this.setModalVisible(!this.state.modalVisible);
        onOptionSelected && onOptionSelected(option);
    }
}

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        borderColor: Colors.tertiary,
        borderWidth: 1,
        borderRadius: 6,
    },
    dropdownButton: {
        height: 38,
        justifyContent: 'space-between',
        paddingHorizontal: 12,

    },
    modalWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        maxHeight: '80%',
        borderRadius: 6
    },
    dropdownOption: {
        borderBottomColor: Colors.tertiary,
        borderBottomWidth: 1
    },
    dropdownOptionButton: {
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.defaultPadding
    }
});
