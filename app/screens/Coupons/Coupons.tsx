import React, {Component} from 'react';
import SearchBar from "../../../theme/components/Searchbar/Searchbar";
import {View} from "react-native";
import ViewToggleButtons from "../../Components/ViewToggleButtons";

class Coupons extends Component {
    render() {
        return(
            <>
                <View style={{backgroundColor: '#ccc', padding: 8}}>
                    <SearchBar />
                </View>
                <View>
                    <ViewToggleButtons />
                </View>
            </>
        )
    }
}

export default Coupons;
