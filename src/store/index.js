import { reactive } from 'vue';

const state = reactive({
    fields: [
        {
            id: 0,
            value: 'Фамилия',
            placeholder: 'Фамилия',
            type: 'text',
            required: false,
        },
        {
            id: 1,
            value: 'Имя',
            placeholder: 'Имя',
            type: 'text',
            required: false,
        },
    ],
});

export default {
    state,
};
