<template>
    <form ref="authForm" class="authForm">
        <h1 class="authForm__header">Авторизация</h1>
        <div class="authForm__control">
            <input
                class="authForm__control-input"
                type="text"
                id="email"
                v-model.trim="email"
                placeholder="Логин"
            />
            <input
                class="authForm__control-input"
                type="password"
                id="password"
                v-model.trim="password"
                placeholder="Пароль"
            />
        </div>
        <base-button class="authForm__btn">Вход</base-button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>

<style lang="scss" scoped>
.authForm {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    &__control {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-input {
            padding-left: 30px;
            width: 350px;
            height: 70px;
            border-radius: 10px;
            background: var(--bg-color);
            font-size: 16px;
            font-weight: 400;
        }
    }
}
</style>
