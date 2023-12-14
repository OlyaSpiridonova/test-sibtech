<template>
    <div class="auth">
        <div class="auth__form">
            <base-logo />
            <auth-form />
            <info-block />
        </div>
        <div class="auth__content"></div>
    </div>
</template>

<script setup>
import AuthForm from '../components/AuthForm.vue';
import InfoBlock from '../components/InfoBlock.vue';
</script>

<style lang="scss" scoped>
.auth {
    display: grid;
    grid-template-areas: 'form content';
    grid-template-columns: 1.5fr 2fr;
    height: 100vh;

    &__form {
        padding: 80px 179px;
        grid-area: form;
    }

    &__content {
        grid-area: content;
        background: var(--primary_color);
    }
}
</style>
