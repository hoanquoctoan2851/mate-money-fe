<template>
  <div class="theme-toggle" @click="themeStore.toggleTheme" :title="themeStore.isDark ? 'Switch to Light' : 'Switch to Dark'">
    <el-icon :size="20" v-if="themeStore.isDark" class="icon-neon"><Moon /></el-icon>
    <el-icon :size="20" v-else class="icon-sun"><Sunny /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
</script>

<style scoped>
.theme-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--mm-border-color);
  background-color: var(--mm-bg-card);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  border-color: var(--neon-blue);
  box-shadow: var(--mm-glow);
  transform: scale(1.05);
}

.icon-neon {
  color: var(--neon-cyan);
  filter: drop-shadow(0 0 4px var(--neon-cyan));
}

.icon-sun {
  color: var(--warning);
}
</style>
