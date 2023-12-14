import { reactive } from 'vue';

const state = reactive({
    fields: [
        {
            id: 1,
            value: 'Фамилия',
            placeholder: 'Фамилия',
            type: 'text',
            required: false,
        },
        {
            id: 2,
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
