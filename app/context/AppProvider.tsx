import * as React from 'react';
import AppContext from './AppContext';
import {Coupon} from "../mock/coupons";
import {ToastContainer as Toast} from "../theme/components/Toast/ToastContainer";
import CouponService from "../services/CouponService";
import {SortOptionValue} from "../mock/coupon-sort-options";

interface State {
    capturedCoupons: number;
    favoriteCoupons: Coupon[];
    favoriteCouponsCopy: Coupon[];
}

class AppProvider extends React.Component<null, State> {
    couponService = new CouponService();

    state = {
        capturedCoupons: 0,
        favoriteCoupons: [],
        favoriteCouponsCopy: []
    };

    captureCoupon(coupon: Coupon) {
        this.setState({capturedCoupons: this.state.capturedCoupons + coupon.value});
        Toast.show({
            text: `${coupon.value} LBS captured from ${coupon.title}`,
            buttonText: 'OK',
            duration: 2000,
            type: 'success'
        });
    }

    addCouponToFavorites(coupon: Coupon) {
        const favorites = this.state.favoriteCoupons as Coupon[];
        if (favorites.findIndex(item => item.id === coupon.id) > -1) {
            Toast.show({
                text: `${coupon.title} exits in favorites`,
                buttonText: 'OK',
                duration: 2000,
                type: 'danger'
            });
        } else {
            favorites.unshift(coupon);
            this.setState({favoriteCoupons: favorites});
            this.setState({favoriteCouponsCopy: favorites});
            Toast.show({
                text: `${coupon.title} added to favorites`,
                buttonText: 'OK',
                duration: 2000,
                type: 'success'
            });
        }
    }

    searchFavorites(value: string) {
        const coupons = [...this.state.favoriteCouponsCopy];
        this.setState({favoriteCoupons: this.couponService.searchCoupons(value, coupons, coupons)})
    }

    sortFavorites(optionValue: SortOptionValue) {
        const coupons = [...this.state.favoriteCouponsCopy];
        this.setState({favoriteCoupons: this.couponService.sortCoupon(optionValue,  coupons, coupons)})
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    capturedCoupons: this.state.capturedCoupons,
                    favoriteCoupons: this.state.favoriteCoupons,
                    captureCoupon: this.captureCoupon.bind(this),
                    addCouponToFavorites: this.addCouponToFavorites.bind(this),
                    searchFavorites: this.searchFavorites.bind(this),
                    sortFavorites: this.sortFavorites.bind(this)
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
