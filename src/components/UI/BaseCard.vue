<template>
    <div class="card">
        <div class="card__descr">
            <h2 class="card__descr-title">{{ props.title }}</h2>
            <span class="card__descr-text">Автор: user 1</span>
            <span class="card__descr-text">Дата создания: 01.01.23</span>
        </div>
        <div class="card__actions">
            <base-button mode="outline">Редактировать</base-button>
            <base-button mode="clear">Удалить</base-button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: null,
    },
});
</script>

<style lang="scss" scoped>
.card {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 24px;
    border-radius: 10px;
    background: #fff;

    &__descr {
        display: grid;
        grid-template-rows: 1fr 2.5fr 1fr;
        gap: 8px;

        &-text {
            color: var(--text-color);
            font-size: 14px;
            font-weight: 400;
        }
    }

    &__actions {
        display: grid;
        align-content: space-between;
    }
}
</style>
