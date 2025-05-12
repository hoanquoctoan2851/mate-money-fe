<!-- filepath: c:\Users\hoang\Downloads\My Project\mate-money-fe\src\views\home\index.vue -->
<template>
  <a-layout class="home-page">
    <a-layout-header>
      <div class="logo">My App</div>
      <a-menu mode="horizontal" theme="dark" :default-selected-keys="['home']">
        <a-menu-item key="home">Home</a-menu-item>
        <a-menu-item key="about">About</a-menu-item>
        <a-menu-item key="contact">Contact</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div class="content">
        <h1>Welcome to the Homepage</h1>
        <p>This is a basic homepage layout using Ant Design Vue.</p>
        <a-button type="primary">Get Started</a-button>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      My App ©2025 Created with Ant Design Vue
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'HomePage',
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.logo {
  float: left;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}

.content {
  text-align: center;
  padding: 50px;
}

.content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
