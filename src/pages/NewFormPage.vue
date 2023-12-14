<template>
    <div class="newForm">
        <div class="newForm__points">
            <base-logo />
            <base-button mode="clearWithIcon">
                <img src="../assets/icons/arrow-left.svg" alt="back" />
                <span>Назад</span>
            </base-button>
            <ul class="newForm__points-list">
                <li
                    v-for="point in listPoints"
                    :key="point.id"
                    :class="{ active: point.active }"
                    @click="handleOption(point.link)"
                >
                    {{ point.text }}
                </li>
            </ul>
            <base-button mode="outline">Скрипт</base-button>
            <base-button>Сохранить</base-button>
        </div>
        <div class="newForm__settings">
            <router-view />
        </div>
        <div class="newForm__display">
            <form class="newForm__display-card">
                <h2 class="newForm__display-card-title">
                    Форма регистрации участников
                </h2>
                <div class="newForm__display-card-inputBlock">
                    <input
                        v-for="item in state.fields"
                        :key="item.id"
                        :type="item.type"
                        class="newForm__display-card-input"
                        :placeholder="item.placeholder"
                    />
                </div>
                <div class="newForm__display-card-check">
                    <input type="checkbox" />
                    <label>
                        Нажимая кнопку «Отправить», я принимаю условия политики
                        конфиденциальности
                    </label>
                </div>
                <base-button mode="max">Отправить</base-button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store/index';

const router = useRouter();
const { state } = inject('store', store);

const listPoints = ref([
    { id: 1, text: 'Тип формы', link: 'type', active: false },
    { id: 2, text: 'Сущности', link: 'entities', active: false },
    { id: 3, text: 'Поля', link: 'fields', active: true },
    { id: 4, text: 'Правила показа полей', link: 'rules', active: false },
    { id: 5, text: 'Другие настройки', link: 'settings', active: false },
]);

function handleOption(path) {
    return router.push(`/new-form/${path}`);
}

onMounted(() => {
    handleOption('fields');
});
</script>

<style lang="scss" scoped>
.newForm {
    display: grid;
    grid-template-areas: 'points settings display';
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;

    &__points {
        padding: 80px 0;
        grid-area: points;
        display: grid;
        grid-template-rows: 1fr 1fr 10fr 1fr 1fr;
        justify-content: start;
        gap: 10px;
        justify-content: center;

        &-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-top: 30px;

            li {
                cursor: pointer;
                &:hover {
                    color: var(--primary_color);
                }
            }
            .active {
                color: var(--primary_color);
            }
        }
    }

    &__settings {
        padding: 80px 30px;
        background: var(--bg-color);
        border-radius: 0px 10px 10px 0px;
    }

    &__display {
        padding: 80px;
        background: var(--primary_color);

        &-card {
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 40px;
            border-radius: 20px;
            background: #fff;

            &-title {
                font-size: 24px;
                font-weight: 500;
            }

            &-inputBlock {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            &-input {
                padding-left: 30px;
                background: var(--bg-color);
                height: 70px;
                width: 100%;
                border-radius: 10px;
            }

            &-check {
                display: flex;
                gap: 16px;
                label {
                    color: var(--text-color);
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>
