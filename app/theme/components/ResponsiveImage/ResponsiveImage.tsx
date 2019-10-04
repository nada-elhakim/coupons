import * as React from 'react';
import {Image} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

interface Props {
    source: any;
    width: number;
    height?: number;
    style?: any;
}

interface State {
    size: {
        width: number;
        height: number;
    }
}

class ResponsiveImage extends React.Component<Props, State> {
    state = {
        size: {
            width: null,
            height: null,
        },
    };

    componentDidMount() {
        this.onPropsReceived(this.props);
    }

    render() {
        return (
            <Image { ...this.props } style={[this.props.style && this.props.style, this.state.size]}/>
        );
    }

    onPropsReceived(props) {
        if (props.source.uri) {
            const source = props.source.uri ? props.source.uri : props.source;
            Image.getSize(
                source,
                (width, height) => this.adjustImageSize(width, height, props),
                () => {console.log('Error getting image size')});
        }
        else {
            const source = resolveAssetSource(props.source);
            this.adjustImageSize(source.width, source.height, props);
        }
    }

    adjustImageSize(sourceWidth: number, sourceHeight: number, props: Props) {
        const { width, height} = props;

        let ratio = 1;

        if (width && height) {
            ratio = Math.min(width / sourceWidth, height / sourceHeight);
        }
        else if (width) {
            ratio = width / sourceWidth;
        }
        else if (height) {
            ratio = height / sourceHeight;
        }

        this.setState({
            size: {
                width: sourceWidth * ratio,
                height: sourceHeight * ratio,
            },
        });
    }
}

export default ResponsiveImage;

