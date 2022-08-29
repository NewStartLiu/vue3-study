<script setup>
import { ref, onMounted } from 'vue';
import { useMouse } from '../utils/index.js';

const count = ref(0);

onMounted(() => {
  useMouse();
});
</script>

<template>
  <div>测试</div>
</template>

<style scoped></style>
