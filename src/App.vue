<template>
  <router-view />
</template>

<script setup lang="ts">
import { useThemeStore } from './stores/theme'
// Initialize theme on app load
useThemeStore()
</script>
