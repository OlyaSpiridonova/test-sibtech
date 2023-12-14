<template>
    <div class="baseInput">
        <div class="baseInput__header">
            <span>{{ inputValue }}</span>
            <base-button mode="clearInherit">Удалить поле</base-button>
        </div>
        <input
            type="text"
            class="baseInput__input"
            v-model="inputValue"
            placeholder="Введите содержимое поля"
        />
        <div class="baseInput__checkbox">
            <input type="checkbox" v-model="checkboxValue" />
            <label>Сделать поле обязательным</label>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
    value: {
        type: String,
        required: true,
    },
    required: {
        type: Boolean,
        required: false,
    },
});
const inputValue = ref(props.value);
const checkboxValue = ref(props.required);

const newMessage = computed(() => state.message);
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
