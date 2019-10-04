import * as React from "react";
import {View} from "react-native";
import { ToastContainer as Toast } from "../Toast/ToastContainer";

class Root extends React.Component {
    root: View;

    render() {
        return (
            <View ref={c => (this.root = c)} {...this.props} style={{ flex: 1 }}>
                {this.props.children}
                <Toast
                    ref={c => {
                        if (c) Toast.toastInstance = c;
                    }}
                />
            </View>
        );
    }
}

export {Root};
