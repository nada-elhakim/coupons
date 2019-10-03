import React from 'react';
import Colors from "../theme/variables/Colors";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";

const TabBarIcon = ({size = 20, name, focused}) => {
    return (
        <FontelloIcon
            name={name}
            size={size}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.primary : Colors.light}
        />
    );
};

export default TabBarIcon;
