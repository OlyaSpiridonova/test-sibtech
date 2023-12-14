<template>
    <div class="newForm">
        <div class="newForm__points">
            <base-logo />
            <base-button mode="clearWithIcon" @click="handleBack">
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
            <preview-form />
        </div>
    </div>
</template>

<script setup>
import PreviewForm from '../components/PreviewForm.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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

function handleBack() {
    router.push('/forms');
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
    }
}
</style>
