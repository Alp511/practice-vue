<script setup>
import { RouterView } from 'vue-router'
import BasicHeader from './components/Header/BasicHeader.vue'
</script>
<template>
  <div id="app">
    <BasicHeader></BasicHeader>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
}
.main-content {
  padding-top: 80px; /* Отступ вниз от фиксированного Header */
  padding-left: 20px;
}
</style>
