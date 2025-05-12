<template>
  <div class="page-not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'PageNotFound',
})
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin-top: 50px;
}

.page-not-found h1 {
  font-size: 2rem;
  color: #ff6b6b;
}

.page-not-found p {
  margin: 10px 0;
  font-size: 1.2rem;
}

.page-not-found a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}
</style>
