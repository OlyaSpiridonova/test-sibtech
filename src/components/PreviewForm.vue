<template>
    <form @submit.prevent="submitForm" class="previewForm">
        <h2 class="previewForm__title">Форма регистрации участников</h2>
        <div class="previewForm__inputBlock">
            <input
                v-for="item in fields"
                :key="item.id"
                :type="item.type"
                class="previewForm__input"
                :placeholder="item.placeholder"
                :required="item.required"
            />
        </div>
        <div class="previewForm__check">
            <input type="checkbox" />
            <label>
                Нажимая кнопку «Отправить», я принимаю условия политики
                конфиденциальности
            </label>
        </div>
        <base-button mode="max">Отправить</base-button>
    </form>
</template>

<script setup>
import { inject, computed } from 'vue';
import store from '../store/index';

const { state } = inject('store', store);

const fields = computed(() => state.fields);

function submitForm() {
    console.log('Submit');
}
</script>

<style lang="scss" scoped>
.previewForm {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;
    border-radius: 20px;
    background: #fff;

    &__title {
        font-size: 24px;
        font-weight: 500;
    }

    &__inputBlock {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__input {
        padding-left: 30px;
        background: var(--bg-color);
        height: 70px;
        width: 100%;
        border-radius: 10px;
    }

    &__check {
        display: flex;
        gap: 16px;
        label {
            color: var(--text-color);
            font-size: 14px;
            font-weight: 400;
        }
    }
}
</style>
