<script setup>
import { defineAsyncComponent } from 'vue';
const AutenticationLayout = defineAsyncComponent( () => import('./modules/autentication/layout/AutenticationLayout.vue') )
</script>

<template>
    <AutenticationLayout/>
</template>

<style>
</style>
