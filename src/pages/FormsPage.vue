<template>
    <div class="forms">
        <div class="forms__info">
            <base-logo />
            <base-button link to="/forms">Формы</base-button>
            <base-button mode="outline">Выход</base-button>
        </div>
        <div class="forms__list">
            <div class="forms__list-header">
                <h1>Формы</h1>
                <base-button link to="/new-form" mode="base"
                    >Создать форму</base-button
                >
            </div>
            <div class="forms__list-card">
                <base-card title="Форма регистрации участников" />
                <base-card title="Форма регистрации участников" />
                <base-card title="Форма регистрации участников" />
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '../components/UI/BaseCard.vue';
import BaseLogo from '../components/UI/BaseLogo.vue';
</script>

<style lang="scss" scoped>
.forms {
    display: grid;
    grid-template-areas: 'info list';
    grid-template-columns: 1fr 2fr;
    height: 100vh;

    &__info {
        display: grid;
        grid-template-rows: 60px auto 50px;
        grid-area: info;
        padding: 80px 0 72px 179px;
    }

    &__list {
        padding: 80px 165px 90px 30px;
        grid-area: list;
        background: var(--bg-color);

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &-card {
            padding-top: 49px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }
}
</style>
