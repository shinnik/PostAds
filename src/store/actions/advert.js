import * as actions from './actionTypes';

export const checkValidation = (info) => {
    return {
        type: actions.CHECK_VALIDATION,
        payload: info
    }
};

export const setText = (id, text) => {
    return {
        type: actions.SET_TEXT,
        payload: {id, text}
    }
};

export const uploadFile = (file) => {
    return {
        type: actions.UPLOAD_FILE,
        files: file
    }
};

export const cancelPicture = () => {
    return {
        type: actions.CANCEL_PICTURE
    }
};

export const applyAdvert = () => {
    console.log('clicked');
    return {
        type: actions.APPLY_ADVERT
    }
};

export const finishAction = () => {
    return {
        type: actions.FINISH_ACTION
    }
};

export const deleteAdvert = (id) => {
    return {
        type: actions.DELETE_ADVERT,
        id
    }
};

export const editAdvert = (id) => {
    return {
        type: actions.EDIT_ADVERT,
        id
    }
}
