<template>
    <router-view></router-view>
</template>

<script setup></script>

<style lang="scss">
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    text-decoration: none;
    font-family: 'Cera Pro';
    list-style-type: none;

    // colors
    --primary_color: #3ea748;
    --hover-green: #146b1d;
    --bg-color: #f6f6f6;
    --text-color: #676767;
    --text-color-black: #212121;
}
@font-face {
    font-family: 'Cera Pro';
    src:
        local('Cera Pro Regular'),
        local('CeraPro-Regular'),
        url('./assets/fonts/CeraPro-Regular.woff') format('woff'),
        url('./assets/fonts/CeraPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Cera Pro';
    src:
        local('Cera Pro Light'),
        local('CeraPro-Light'),
        url('./assets/fonts/CeraPro-Light.woff') format('woff'),
        url('./assets/fonts/CeraPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Cera Pro';
    src:
        local('Cera Pro Black'),
        local('CeraPro-Black'),
        url('./assets/fonts/CeraPro-Black.woff') format('woff'),
        url('./assets/fonts/CeraPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Cera Pro';
    src:
        local('Cera Pro Medium'),
        local('CeraPro-Medium'),
        url('./assets/fonts/CeraPro-Medium.woff') format('woff'),
        url('./assets/fonts/CeraPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Cera Pro';
    src:
        local('Cera Pro Bold'),
        local('CeraPro-Bold'),
        url('./assets/fonts/CeraPro-Bold.woff') format('woff'),
        url('./assets/fonts/CeraPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Cera Pro';
    src:
        local('Cera Pro Thin'),
        local('CeraPro-Thin'),
        url('./assets/fonts/CeraPro-Thin.woff') format('woff'),
        url('./assets/fonts/CeraPro-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}
</style>
