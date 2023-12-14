<template>
    <div class="baseInput">
        <div class="baseInput__header">
            <span>{{ placeholder }}</span>
            <base-button mode="clearInherit" @click="removeField(props.id)"
                >Удалить поле</base-button
            >
        </div>
        <input
            :type="type"
            class="baseInput__input"
            v-model="inputValue"
            :placeholder="placeholder"
        />
        <div class="baseInput__checkbox">
            <input type="checkbox" v-model="checkboxValue" />
            <label>Сделать поле обязательным</label>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, watch, inject } from 'vue';
import store from '../../store/index.js';

const { state } = inject('store', store);
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
});
const inputValue = ref(state.fields[props.id].value);
const checkboxValue = ref(state.fields[props.id].required);
const type = ref(state.fields[props.id].type);
const placeholder = ref(state.fields[props.id].placeholder);

function removeField(id) {
    state.fields = state.fields.filter((item) => item.id !== id);
}

watch(inputValue, () => {
    state.fields[props.id].placeholder = inputValue;
});
watch(checkboxValue, () => {
    state.fields[props.id].required = checkboxValue;
});
</script>

<style lang="scss" scoped>
.baseInput {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__header {
        display: flex;
        justify-content: space-between;
        color: var(--text-color);
    }

    &__input {
        padding-left: 30px;
        height: 70px;
        border-radius: 10px;
        background: #fff;
    }

    &__checkbox {
        display: flex;
        gap: 16px;
    }
}
</style>
