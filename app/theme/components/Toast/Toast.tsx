import * as React from "react";
import {View} from "react-native";

interface Props {
    style: any;
}

class Toast extends React.Component<Props> {
    root: View;
    render() {
        return <View ref={c => (this.root = c)} {...this.props} />;
    }
}

export {Toast};
