<template>
    <div class="fields">
        <h1 class="fields__title">Поля</h1>

        <div class="fields__hidden">
            <h2 class="fields__hidden-title">Скрытые поля</h2>
            <base-button mode="field">
                <span>Добавить поле</span>
                <img src="../assets/icons/plus.svg" alt="plus" />
            </base-button>
        </div>

        <div class="fields__settings">
            <h2>Поля</h2>
            <base-input
                v-for="item in state.fields"
                :key="item.id"
                :value="item.value"
                :required="item.required"
            />
        </div>

        <base-button mode="field">
            <span>Добавить поле</span>
            <img src="../assets/icons/plus.svg" alt="plus" />
        </base-button>

        <base-button mode="field">
            <span>Добавить страницу формы</span>
            <img src="../assets/icons/plus.svg" alt="plus" />
        </base-button>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import BaseInput from './UI/BaseInput.vue';
import store from '../store/index';

const { state } = inject('store', store);
</script>

<style lang="scss" scoped>
.fields {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__hidden,
    &__settings {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>
