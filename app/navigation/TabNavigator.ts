import { createBottomTabNavigator } from 'react-navigation-tabs';
import Favorites from "../screens/Favorites/Favorites";
import Featured from "../screens/Featured/Featured";
import Coupons from "../screens/Coupons/Coupons";
import Categories from "../screens/Categories/Categories";
import More from "../screens/More/More";

const TabNavigator = createBottomTabNavigator({
    Favorites: Favorites,
    Featured: Featured,
    Coupons: Coupons,
    Categories: Categories,
    More: More,
});

export default TabNavigator;

