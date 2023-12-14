<template>
    <div class="info">
        <span class="info__text"
            >Если возникла проблема, то можете написать
            <base-button link to="/" class="info__link"
                >Алёне из Сибтеха</base-button
            >
        </span>
        <span class="info__text"
            >С любовью, ваш
            <base-button link to="/" class="info__link">Сибтех</base-button>
        </span>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.info {
    padding-top: 310px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 280px;
    font-size: 16px;
    font-weight: 400;

    &__text {
        color: var(--text-color);
    }

    &__link {
        color: var(--primary_color);
        text-decoration: underline;
    }
}
</style>
