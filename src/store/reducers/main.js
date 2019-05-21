import * as actions from '../actions/actionTypes';
import { shortFileName } from "../../utils/shortFileName";
import ID from "../../utils/ID";
import { initialState } from "./initialState";
import getBase64Image from "../../utils/getBase64Image";
import {formatPhoneNumber} from "../../utils/formatPhoneNumber";


const advertReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHECK_VALIDATION: {
            const idx = state.getIn(['inputs']).findIndex((input) => input.get('id') === action.payload.id);
            const content = state.getIn(['inputs', idx, 'content']);
            switch (action.payload.validator) {
                case 'Header': {
                    if (content.length > 140) {
                        state = state.setIn(['inputs', idx, 'status'], 'invalid')
                            .setIn(['inputs', idx, 'text'], 'Не более 140 символов')
                    } else if (content.length === 0) {
                        state = state.setIn(['inputs', idx, 'status'], 'invalid')
                            .setIn(['inputs', idx, 'text'], 'Заполните поле')
                    } else {
                        state = state.setIn(['inputs', idx, 'status'], 'valid')
                            .setIn(['inputs', idx, 'text'], 'Заполнено')
                    }
                    const allValid = state.getIn(['inputs']).every((el) => el.get('status') === 'valid');
                    state = allValid ? state.setIn(['button', 'disable'], false) : state.setIn(['button', 'disable'], true);
                    return state
                }
                case 'Body': {
                    if (content.length > 300) {
                        state = state.setIn(['inputs', idx, 'status'], 'invalid')
                            .setIn(['inputs', idx, 'text'], 'Не более 300 символов')
                    } else if (content.length === 0) {
                        state = state.setIn(['inputs', idx, 'status'], 'invalid')
                            .setIn(['inputs', idx, 'text'], 'Заполните поле')
                    } else {
                        state = state.setIn(['inputs', idx, 'status'], 'valid')
                            .setIn(['inputs', idx, 'text'], 'Заполнено')
                    }
                    const allValid = state.getIn(['inputs']).every((el) => el.get('status') === 'valid');
                    console.log(allValid);
                    state = allValid ? state.setIn(['button', 'disable'], false) : state.setIn(['button', 'disable'], true);
                    return state
                }
                case 'Phone': {
                    const format = formatPhoneNumber(content);
                    console.log(format);
                    if (content.length === 0) {
                        state = state.setIn(['inputs', idx, 'status'], 'invalid')
                            .setIn(['inputs', idx, 'text'], 'Заполните поле')
                    } else if (format) {
                        state = state.setIn(['inputs', idx, 'status'], 'valid')
                            .setIn(['inputs', idx, 'text'], 'Заполнено')
                            .setIn(['inputs', idx, 'content'], format)
                    } else {
                        state = state.setIn(['inputs', idx, 'status'], 'invalid')
                            .setIn(['inputs', idx, 'text'], 'Неверный формат')
                    };
                    const allValid = state.getIn(['inputs']).every((el) => el.get('status') === 'valid');
                    state = allValid ? state.setIn(['button', 'disable'], false) : state.setIn(['button', 'disable'], true);
                    return state;
                }
                default:
                    return state
            }
        }
        case actions.SET_TEXT: {
            if (action.payload.id === state.getIn(['datalist', 'input', 'id'])) {
                state = state.setIn(['datalist', 'input', 'content'], action.payload.text)
            } else {
                const idx = state.getIn(['inputs']).findIndex((input) => input.get('id') === action.payload.id);
                state = state.setIn(['inputs', idx, 'content'], action.payload.text)
            }
            return state;
        }
        case actions.UPLOAD_FILE: {
            const file = getBase64Image(action.payload.img);
            const name = action.payload.name;
            const sfn = shortFileName(name);
            state = state.setIn(['attachment', 'file'], file)
                .setIn(['attachment', 'filename'], name)
                .setIn(['attachment', 'shortfn'], sfn);
            return state
        }
        case actions.CANCEL_PICTURE: {
            state = state.setIn(['attachment', 'file'], '');
            return state;
        }
        case actions.APPLY_ADVERT: {
            console.log('Applying...');
            const allValid = state.getIn(['inputs']).every((el) => el.get('status') === 'valid');

            const advert = {
                id: ID(),
                header: state.getIn(['inputs', 0, 'content']) ,
                body: state.getIn(['inputs', 1, 'content']),
                phone: state.getIn(['inputs', 2, 'content']),
                city: state.getIn(['datalist', 'input', 'content']),
                photo: state.getIn(['attachment', 'file']),
                photoName: state.getIn(['attachment', 'filename'])
            };

            if (allValid) {
                const ads = JSON.parse(localStorage.getItem('ads'));
                if (!localStorage.getItem('ads')) {
                    localStorage.setItem('ads', JSON.stringify([advert]));
                } else {
                    if (state.get('edit')) {
                        const idx = ads.findIndex((ad) => ad.id === state.get('id'));
                        console.log('EDIT');
                        ads.splice(idx, 1);
                        advert.id = state.get('id');
                        ads.splice(idx, 0, advert)
                    } else {
                        console.log('PUSH', ads);
                        ads.push(advert);
                    }
                    localStorage.setItem('ads', JSON.stringify(ads));
                }
                state = state.setIn(['published'], true)
                    .setIn(['edit'], false);
            }
            return state;
        }
        case actions.FINISH_ACTION: {
            state = initialState;
            return state;
        }
        case actions.DELETE_ADVERT: {
            console.log(action.id);
            const ads = JSON.parse(localStorage.getItem('ads'));
            const idx = ads.findIndex((ad) => ad.id === action.id);
            ads.splice(idx, 1);
            localStorage.setItem('ads', JSON.stringify(ads));
            state = state.setIn(['deleted'], true);
            return state;
        }
        case actions.EDIT_ADVERT: {
            state = initialState;
            const ads = JSON.parse(localStorage.getItem('ads'));
            const advert = ads.find((ad) => ad.id === action.id);
            console.log(advert);
            state = state.setIn(['inputs', 0, 'content'], advert.header)
                .setIn(['inputs', 0, 'text'], 'Заполнено')
                .setIn(['inputs', 0, 'status'], 'valid')
                .setIn(['inputs', 1, 'content'], advert.body)
                .setIn(['inputs', 1, 'text'], 'Заполнено')
                .setIn(['inputs', 1, 'status'], 'valid')
                .setIn(['inputs', 2, 'content'], advert.phone)
                .setIn(['inputs', 2, 'text'], 'Заполнено')
                .setIn(['inputs', 2, 'status'], 'valid');
            if (advert.city) {
                state = state.setIn(['datalist', 'input', 'content'], advert.city)
            }
            if (advert.photo) {
                const shortName = shortFileName(advert.photoName);
                state = state.setIn(['attachment', 'file'], advert.photo)
                    .setIn(['attachment', 'filename'], advert.photoName)
                    .setIn(['attachment', 'shortfn'], shortName)
            }
            state = state.set('edit', true)
                .set('id', action.id)
                .setIn(['button', 'disable'], false);

            window.scrollTo(0, 0);
            return state
        }
        default: {
            return state;
        }
    }
};

export default advertReducer;
