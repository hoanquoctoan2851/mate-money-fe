<template>
  <div class="about-view">
    <el-card shadow="never" class="neon-card about-card">
      <template #header>
        <h1>{{ $t('common.about') }}</h1>
      </template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="Project">Mate Money</el-descriptions-item>
        <el-descriptions-item label="Framework">Vue 3 + Vite</el-descriptions-item>
        <el-descriptions-item label="UI Library">Element Plus</el-descriptions-item>
        <el-descriptions-item label="State Management">Pinia</el-descriptions-item>
        <el-descriptions-item label="i18n">Vue I18n</el-descriptions-item>
        <el-descriptions-item label="Theme">Neon Dark / Light</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-view {
  max-width: 700px;
  margin: 0 auto;
}

.about-card {
  background-color: var(--mm-bg-card);
}

h1 {
  color: var(--mm-text-color);
  margin: 0;
}
</style>
