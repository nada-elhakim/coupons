import React from 'react';
import Button from "../theme/components/Button/Button";
import FontelloIcon from "../theme/components/Icon/FontelloIcon";
import Colors from "../theme/variables/Colors";

const ProfileButton: React.FunctionComponent  = () => {
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
