<script setup>

import TheHeader from '../../components/layout/TheHeader.vue';
import MainHomeView from './MainHomeView.vue';

</script>

<template>
    <div class="grid grid-cols-1 grid-rows-[6rem_minmax(0,1fr)_50px]">
        <TheHeader class="col-[12px]"></TheHeader>
        <MainHomeView class="m-0"></MainHomeView>
        <footer class="h-1000"></footer>
    </div>
</template>

<script>
</script>