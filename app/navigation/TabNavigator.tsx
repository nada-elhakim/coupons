import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Favorites from "../screens/Favorites/Favorites";
import Featured from "../screens/Featured/Featured";
import Coupons from "../screens/Coupons/Coupons";
import Categories from "../screens/Categories/Categories";
import More from "../screens/More/More";
import {createStackNavigator, NavigationStackOptions} from "react-navigation-stack";
import {Text} from "react-native";
import ProfileButton from "../Components/ProfileButton";
import CapturedLbs from "../Components/CapturedLbs";
import AppStyles from "../../theme/styles/AppStyles";
import Colors from "../../theme/variables/Colors";


const defaultNavigationOptions: NavigationStackOptions = {
    headerTitle: (<Text>Shop</Text>),
    headerRight: <ProfileButton />,
    headerLeft: <CapturedLbs/>,
    headerStyle: AppStyles.header
};

const defaultStackConfig = {
    defaultNavigationOptions
};

const tabsConfig = {
    initialRouteName: 'Coupons',
    tabBarOptions: {
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.light,
        style: {
            backgroundColor: Colors.secondary
        }
    }
};

const FavoriteStack = createStackNavigator({
    Favorites: Favorites
}, defaultStackConfig);

const FeaturedStack = createStackNavigator({
    Featured: Featured
}, defaultStackConfig);

const CouponStack = createStackNavigator({
    Coupons: Coupons
}, defaultStackConfig);

const CategoryStack = createStackNavigator({
    Categories: Categories
}, defaultStackConfig);

const MoreStack = createStackNavigator({
    More: More
}, defaultStackConfig);

const TabNavigator = createBottomTabNavigator({
    Favorites: FavoriteStack,
    Featured: FeaturedStack,
    Coupons: CouponStack,
    Categories: CategoryStack,
    More: MoreStack,
}, tabsConfig);

export default TabNavigator;

