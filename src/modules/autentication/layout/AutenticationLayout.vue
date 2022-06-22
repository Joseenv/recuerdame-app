<script setup>
import { defineAsyncComponent } from 'vue';

const AutenticationHeader = defineAsyncComponent( () => import('../../shared/components/AutenticationHeader.vue') )
</script>

<template>
    <AutenticationHeader/>
    <router-view></router-view>
</template>

<style scoped>

</style>