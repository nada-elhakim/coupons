import * as React from 'react';
import Dropdown, {DropdownOption} from "../../theme/components/Dropdown/Dropdown";
import ViewToggleButtons, {ViewOption} from "../../components/ViewToggleButtons";
import {StyleSheet, View} from "react-native";
import SearchBar from "../../theme/components/Searchbar/Searchbar";
import Metrics from "../../theme/variables/Metrics";
import CouponList from "../../components/CouponList";
import Colors from "../../theme/variables/Colors";
import {sortOptions} from "../../mock/coupon-sort-options";
import AppContext from "../../context/AppContext";
import NoResultCard from "../../components/NoResultCard";

interface State {
    currentViewOption: ViewOption
}

class Favorites extends React.Component<any, State> {
    static contextType = AppContext;

    state = {
        currentViewOption: ViewOption.Grid,
    };

    render() {
        const coupons = this.context.favoriteCoupons;
        return(
            <>
                <View style={styles.searchBarContainer}>
                    <SearchBar onChangeText={(value) => this.context.searchFavorites(value)}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: Metrics.defaultPadding}}>
                    <Dropdown
                        dropdownTitle="Sort by"
                        options={sortOptions}
                        onOptionSelected={this.onDropdownOptionSelected.bind(this)}/>
                    <ViewToggleButtons onToggleOptionSelected={this.onToggleOptionSelected.bind(this)} />
                </View>
                <CouponList
                    noResultsMessage="No coupons in favorites"
                    coupons={coupons}
                    viewOption={this.state.currentViewOption}/>
            </>
        )
    }

    onToggleOptionSelected(optionSelected: ViewOption) {
        this.setState({currentViewOption: optionSelected})
    }

    onDropdownOptionSelected(option: DropdownOption) {
        this.context.sortFavorites(option.value)
    }
}

export default Favorites;


const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: Colors.tertiary,
        paddingHorizontal: Metrics.defaultPadding,
        paddingVertical: Metrics.defaultPadding / 2
    }
});
