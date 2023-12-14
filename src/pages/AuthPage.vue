<template>
    <div class="auth">
        <div class="auth__form">
            <base-logo />
            <auth-form />
            <info-block />
        </div>
        <div class="auth__content">
            <img src="../assets/icons/auth.png" alt="auth" />
        </div>
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
        display: grid;
        justify-content: start;
        background: var(--primary_color);
        align-items: center;

        img {
            width: 100%;
        }
    }
}
</style>
