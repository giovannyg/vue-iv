<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <h2>Choose an option</h2>
  <div class="challenge-selector">
    <RouterLink to="auth/login">Login</RouterLink>
  </div>
</template>

<style scoped>
.challenge-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-size: 1.4rem;
  }
}
</style>
