<template>
  <header class="fixed">
    <div>
      <nav>
        <router-link to="/">Главная</router-link>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.fixed {
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>
