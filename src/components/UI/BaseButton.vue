<template>
    <router-link v-if="link" :to="to" :class="mode">
        <slot></slot>
    </router-link>
    <button v-else :class="mode">
        <slot></slot>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    mode: {
        type: String,
        required: false,
        default: null,
    },
    link: {
        type: Boolean,
        required: false,
        default: false,
    },
    to: {
        type: String,
        required: false,
        default: '/',
    },
});
</script>

<style lang="scss" scoped>
button,
.base {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 16px 20px;
    border-radius: 10px;
    color: white;
    width: 160px;
    background-color: var(--primary_color);
    font-size: 16px;
    font-weight: 500;
    &:hover {
        background-color: var(--hover-green);
    }
    &:active {
        background-color: var(--hover-green);
    }
}

.inverted {
    background-color: #fff;
    color: var(--primary_color);
    padding: 10px;
    border-radius: 10px;
}

.max {
    width: 100%;
}

.outline {
    color: var(--primary_color);
    border: 1px solid var(--primary_color);
    background-color: #fff;
    &:hover {
        color: #fff;
        background-color: var(--primary_color);
    }
}

.clear {
    color: var(--primary_color);
    border: none;
    background-color: #fff;
    &:hover {
        color: #fff;
        background-color: var(--primary_color);
    }
}

.clearInherit {
    color: var(--primary_color);
    border: none;
    background-color: inherit;
    padding: 0;
    justify-content: flex-end;
    &:hover {
        color: var(--hover-green);
        background: none;
    }
}

.clearWithIcon {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    padding: 0;
    color: var(--text-color-black);
    border: none;
    background-color: #fff;
    &:hover {
        color: var(--primary_color);
        background-color: #fff;
    }
}

.field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary_color);
    background-color: inherit;
    padding: 20px 30px;
    width: 100%;
    border-radius: 10px;
    border: 1px dashed var(--primary_color);
    &:hover {
        background-color: #fff;
    }
}

.list {
    color: var(--text-color-black);
    &:hover {
        color: var(--primary_color);
    }
}

a {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary_color);
}
</style>
