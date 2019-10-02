import React from 'react';
import Button from "../../theme/components/Button/Button";
import {Text} from 'react-native';
import FontelloIcon from "../../theme/components/Icon/FontelloIcon";
import Colors from "../../theme/variables/Colors";

const ProfileButton = () => {
    return (
        <Button transparent>
            <FontelloIcon
                name="user"
                size={24}
                color={Colors.light}
            />
        </Button>
    )
};

export default ProfileButton;
