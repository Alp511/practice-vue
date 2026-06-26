<script setup>
import { ref } from 'vue'
const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function multiply(multiplier) {
  count.value = count.value * multiplier
}

function divide() {
  count.value = count.value / 2
}

function reset() {
  count.value = 0
}
</script>

<template>
  <h1>Счётчик</h1>
  <p>Текущее значение: {{ count }}</p>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="multiply(2)">* 2</button>
  <button @click="multiply(10)">* 10</button>
  <button @click="divide">/2</button>
  <div class="reset">
    <button @click="reset">Сбросить</button>
  </div>
</template>

<style scoped>
button {
  margin-right: 8px;
}
.reset {
  margin-top: 20px;
}
</style>