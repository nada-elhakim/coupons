import React, {Component} from 'react';
import AppContext from './AppContext';
import {Coupon} from "../mock/coupons";
import {ToastContainer as Toast} from "../theme/components/Toast/ToastContainer";


class AppProvider extends Component {
    state = {
        capturedCoupons: 0,
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

    // photoStorageService = new PhotoStorageService();
    //
    // async loadPhotos() {
    //     const photos = await this.photoStorageService.loadPhotos();
    //     this.setState({myPhotos: photos});
    // }
    //
    // uploadPhoto(photo) {
    //     const photos = this.state.myPhotos;
    //     photos.unshift(photo);
    //     this.setState({myPhotos: photos});
    //     this.photoStorageService.savePhotos(photos);
    // }
    //
    // deletePhoto(photo) {
    //     const filteredPhotos = this.state.myPhotos.filter(savedPhoto => savedPhoto.id !== photo.id);
    //     this.setState({myPhotos: filteredPhotos});
    //     this.photoStorageService.savePhotos(filteredPhotos);
    // }

    render() {
        return (
            <AppContext.Provider
                value={{
                    capturedCoupons: this.state.capturedCoupons,
                    captureCoupon: this.captureCoupon.bind(this),
                    // uploadPhoto: this.uploadPhoto.bind(this),
                    // deletePhoto: this.deletePhoto.bind(this),
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
