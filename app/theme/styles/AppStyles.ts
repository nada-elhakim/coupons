import {StyleSheet} from 'react-native';
import Metrics from '../variables/Metrics';
import Colors from "../variables/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: Metrics.defaultPadding,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: Colors.primary
    },
    headerRightContainer: {
        paddingRight: Metrics.defaultPadding
    },
    headerLeftContainer: {
        paddingLeft: Metrics.defaultPadding
    },
    headerTitleStyle: {
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
        flex: 1,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
});
