import * as React from 'react';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import config from './config.json';

const FontelloIcon  = (props) => {
    const Icon = createIconSetFromFontello(config);
    return (
        <Icon {...props}/>
    );
};

export default FontelloIcon;
