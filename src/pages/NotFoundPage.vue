<template>
    <div class="notFound">
        <span class="notFound__title">Страница не найдена</span>
        <base-button link to="/" mode="inverted"
            >Вернуться на главную</base-button
        >
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 100vh;
    background: var(--primary_color);

    &__title {
        font-size: 24px;
        font-weight: 500;
        color: #fff;
    }
}
</style>
