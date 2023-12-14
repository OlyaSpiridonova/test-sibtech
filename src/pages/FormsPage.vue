<template>
    <div class="forms">
        <div class="forms__info">
            <base-logo />
            <ul class="forms__info-list">
                <li
                    v-for="item in list"
                    :key="item.id"
                    :class="{ active: item.active }"
                >
                    {{ item.title }}
                </li>
            </ul>
            <base-button mode="outline">Выход</base-button>
        </div>
        <div class="forms__list">
            <div class="forms__list-header">
                <h1 class="forms__list-header-title">Формы</h1>
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
import { ref } from 'vue';
import BaseCard from '../components/UI/BaseCard.vue';
import BaseLogo from '../components/UI/BaseLogo.vue';

const list = ref([
    { id: 1, title: 'Формы', active: true },
    { id: 2, title: 'Пользователи', active: false },
]);
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

        &-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            li {
                cursor: pointer;
            }
            .active {
                color: var(--primary_color);
            }
        }
    }

    &__list {
        padding: 80px 165px 90px 30px;
        grid-area: list;
        background: var(--bg-color);

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-title {
                font-size: 40px;
                font-weight: 500;
            }
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
