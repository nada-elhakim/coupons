import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Favorites from "../screens/Favorites/Favorites";
import Featured from "../screens/Featured/Featured";
import Coupons from "../screens/Coupons/Coupons";
import Categories from "../screens/Categories/Categories";
import More from "../screens/More/More";
import {createStackNavigator, NavigationStackOptions} from "react-navigation-stack";
import ProfileButton from "../components/ProfileButton";
import CapturedLbs from "../components/CapturedLbs";
import AppStyles from "../theme/styles/AppStyles";
import Colors from "../theme/variables/Colors";
import TabBarIcon from "../components/TabBarIcon";
import AppTitle from "../components/AppTitle";

const defaultNavigationOptions: NavigationStackOptions = {
    headerTitle: <AppTitle />,
    headerTitleStyle: AppStyles.headerTitleStyle,
    headerRight: <ProfileButton />,
    headerLeft: <CapturedLbs/>,
    headerStyle: AppStyles.header,
    headerLeftContainerStyle: AppStyles.headerLeftContainer,
    headerRightContainerStyle: AppStyles.headerRightContainer,
};
const defaultStackConfig = {
    defaultNavigationOptions
};

const FavoriteStack = createStackNavigator({
    Favorites: Favorites
}, defaultStackConfig);
FavoriteStack.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name="heart"
            />
        )
    }
};

const FeaturedStack = createStackNavigator({
    Featured: Featured
}, defaultStackConfig);
FeaturedStack.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name="star"
            />
        )
    }
};

const CouponStack = createStackNavigator({
    Coupons: Coupons
}, defaultStackConfig);
CouponStack.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name="coupon"
                size={24}
            />
        )
    }
};

const CategoryStack = createStackNavigator({
    Categories: Categories
}, defaultStackConfig);
CategoryStack.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name="categories"
            />
        )
    }
};

const MoreStack = createStackNavigator({
    More: More
}, defaultStackConfig);
MoreStack.navigationOptions = () => {
    return {
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name="more"
                size={26}
            />
        )
    }
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
const TabNavigator = createBottomTabNavigator({
    Favorites: FavoriteStack,
    Featured: FeaturedStack,
    Coupons: CouponStack,
    Categories: CategoryStack,
    More: MoreStack,
}, tabsConfig);

export default TabNavigator;

