<template>
    <div class="fields">
        <h1 class="fields__title">Поля</h1>

        <div class="fields__hidden">
            <h2 class="fields__hidden-title">Скрытые поля</h2>
            <div v-if="isAddingField">
                <form
                    @submit.prevent="addNewField"
                    class="fields__hidden-choice"
                >
                    <label for="typeField">Выберите тип поля</label>
                    <select id="typeField" v-model="selected">
                        <option value="text">Текстовое поле</option>
                        <option value="number">Числовое поле</option>
                    </select>

                    <label for="placeholder">Название поля</label>
                    <input
                        id="placeholder"
                        placeholder="Введите название поля"
                        v-model="placeholder"
                        required
                    />
                    <base-button>Добавить</base-button>
                </form>
            </div>
            <base-button v-else mode="field" @click="isAddingField = true">
                <span>Добавить поле</span>
                <img src="../assets/icons/plus.svg" alt="plus" />
            </base-button>
        </div>

        <div class="fields__settings">
            <h2>Поля</h2>
            <base-input
                :id="item.id"
                v-for="item in state.fields"
                :key="item.id"
            />
        </div>

        <base-button mode="field" @click="addNewField">
            <span>Добавить поле</span>
            <img src="../assets/icons/plus.svg" alt="plus" />
        </base-button>

        <base-button mode="field" link to="/preview-form">
            <span>Добавить страницу формы</span>
            <img src="../assets/icons/plus.svg" alt="plus" />
        </base-button>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import BaseInput from './UI/BaseInput.vue';
import store from '../store/index';

const { state } = inject('store', store);
const isAddingField = ref(false);
const selected = ref('text');
const placeholder = ref('');

function addNewField() {
    isAddingField.value = false;
    return state.fields.push({
        id: state.fields.length,
        value: '',
        placeholder: placeholder.value,
        type: selected.value,
        required: false,
    });
}
</script>

<style lang="scss" scoped>
.fields {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__hidden,
    &__settings {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__hidden {
        &-choice {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;

            select,
            input {
                font-size: 16px;
                font-weight: 400;
                padding: 10px;
                height: 50px;
                width: 50%;
                border-radius: 10px;
            }
        }
    }
}
</style>
