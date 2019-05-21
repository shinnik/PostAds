import {fromJS} from "immutable";

export const initialState = fromJS({
    id: null,
    inputs: [
        {
            id: 'Header',
            name: 'Заголовок',
            type: 'text',
            validator: 'Header',
            status: 'info',
            placeholder: null,
            multiline: false,
            text: 'Обязательное поле. Не более 140 символов.',
            content: ''
        },
        {
            id: 'Body',
            name: 'Текст объявления',
            type: 'text',
            validator: 'Body',
            status: 'info',
            placeholder: null,
            multiline: true,
            text: 'Не более 300 символов',
            content: ''
        },
        {   id: 'Phone',
            name: 'Телефон',
            type: 'tel',
            validator: 'Phone',
            status: 'info',
            placeholder: '+7 (___) ___-__-__',
            multiline: false,
            text: 'Обязательное поле',
            content: ''
        }
    ],
    datalist: {
        input: {
            id: 'City',
            name: 'Город',
            type: 'text',
            content: ''
        },
        options: ['Москва', 'Ярославль', 'Чебоксары']
    },
    attachment: {
        file: '',
        filename: '',
        shortfn: ''
    },
    button: {
        disable: true
    },
    published: false,
    deleted: false,
    edit: false
})
