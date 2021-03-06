import {Coupon, CouponsMock} from "../mock/coupons";
import {SortOptionValue} from "../mock/coupon-sort-options";

class CouponService {
    searchCoupons(value: string, coupons: Coupon[], couponsCopy: Coupon[] = CouponsMock) {
        if (!coupons) {
            return;
        }
        if (value.length > 2 && value !== '') {
            return coupons.filter(coupon => coupon.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }
        return couponsCopy;
    }

    sortCoupon(optionValue: SortOptionValue, coupons: Coupon[], couponsCopy: Coupon[] = CouponsMock) {
        if (!coupons || coupons.length === 0) {
            return;
        }
        switch (optionValue) {
            case SortOptionValue.ALPHABETICAL:
                return coupons.sort((a: Coupon, b: Coupon) => a.title.localeCompare(b.title));
            case SortOptionValue.POUNDS_CAPTURED:
                return coupons.sort((a: Coupon, b: Coupon) => b.value - a.value);
            case SortOptionValue.DATE:
                return coupons.sort((a: Coupon, b: Coupon) => b.date - a.date);
            default:
                return couponsCopy;
        }
    }
}

export default CouponService;
