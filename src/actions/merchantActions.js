import axios from 'axios';
import * as types from './actionTypes';

export function addMerchant(merchant) {
    return { type: types.ADD_MERCHANT, merchant};
}

export function editMerchant(merchant) {
    return { type: types.EDIT_MERCHANT, merchant};
}

export function deleteMerchant(id) {
    return { type: types.DELETE_MERCHANT, id};
}

export function setMerchants(merchants) {
    return { type: types.SET_MERCHANTS, merchants};
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}

export function getMerchants() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://demo0802426.mockable.io/merchants')
            .then(response => {
                dispatch(setMerchants(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}