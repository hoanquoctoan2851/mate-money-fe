<template>
  <el-container class="layout-container">
    <!-- Header -->
    <el-header class="layout-header">
      <div class="header-left">
        <div class="logo-wrapper">
          <el-icon :size="28" color="var(--neon-blue)">
            <Coin />
          </el-icon>
        </div>
        <span class="app-title">
          <span class="title-mate">Mate</span>
          <span class="title-money">Money</span>
        </span>
      </div>

      <div class="header-right">
        <!-- Theme Toggle -->
        <ThemeToggle />

        <!-- Language Switcher -->
        <el-dropdown trigger="click" @command="handleLocaleChange">
          <el-button text class="locale-btn">
            <el-icon><Globe /></el-icon>
            <span style="margin-left: 4px">{{ currentLocaleLabel }}</span>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="vi" :disabled="localeStore.locale === 'vi'">
                🇻🇳 Tiếng Việt
              </el-dropdown-item>
              <el-dropdown-item command="en" :disabled="localeStore.locale === 'en'">
                🇺🇸 English
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <!-- Sidebar -->
      <el-aside width="220px" class="layout-aside">
        <el-menu
          :default-active="activeMenu"
          router
          class="sidebar-menu"
          :background-color="'transparent'"
          :text-color="'var(--mm-text-secondary)'"
          :active-text-color="'var(--mm-sidebar-active)'"
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>{{ $t('menu.dashboard') }}</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>{{ $t('common.about') }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- Main Content -->
      <el-main class="layout-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Coin, HomeFilled, InfoFilled } from '@element-plus/icons-vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import { useLocaleStore } from '../stores/locale'

// Globe icon (Element Plus doesn't have one, we create inline)
const Globe = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-40-568h80v80h-80v-80zm0 160h80v320h-80V476z"/><path fill="currentColor" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm199.6 132.4C757.8 320 788 384 800.8 454H640c-6-74-24-142-52-198 46.4 6 89.2 20.2 123.6 16.4zM512 196c38 42 70 96 86 158H426c16-62 48-116 86-158zM196 512c0-20 2-40 5.2-58H368c-4 38-4 78 0 116H201.2c-3.2-18-5.2-38-5.2-58zm27.6 134H376c10 56 28 106 52 148-72-18-134-56-174.4-148h-30zM376 378H223.6c40.4-92 102.4-130 174.4-148-24 42-42 92-52 148h30zm136-182c-38 42-70 96-86 158h172c-16-62-48-116-86-158zM512 828c-38-42-70-96-86-158h172c-16 62-48 116-86 158zm110-234H402c-4-38-4-78 0-116h220c4 38 4 78 0 116zm2 76c-10 56-28 106-52 148 72-18 134-56 174.4-148h-30H624zm32-220c6 74 24 142 52 198-46.4-6-89.2-20.2-123.6-16.4C538.2 384 508 320 495.2 250H656z"/></svg>`,
}

const route = useRoute()
const { locale } = useI18n()
const localeStore = useLocaleStore()

const activeMenu = computed(() => route.path)

const currentLocaleLabel = computed(() => {
  return localeStore.locale === 'vi' ? 'VI' : 'EN'
})

function handleLocaleChange(lang: string) {
  localeStore.setLocale(lang)
  locale.value = lang
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--mm-header-bg);
  border-bottom: 1px solid var(--mm-border-color);
  box-shadow: var(--mm-shadow);
  padding: 0 20px;
  height: 60px;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: filter 0.3s;
}

.logo-wrapper:hover {
  filter: drop-shadow(var(--mm-glow));
}

.app-title {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
}

.title-mate {
  color: var(--mm-text-color);
}

.title-money {
  color: var(--neon-blue);
  transition: text-shadow 0.3s;
}

html.dark .title-money {
  text-shadow: var(--glow-blue);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.locale-btn {
  color: var(--mm-text-secondary) !important;
}

.layout-aside {
  background-color: var(--mm-sidebar-bg);
  border-right: 1px solid var(--mm-border-color);
  transition: background-color 0.3s, border-color 0.3s;
  overflow-y: auto;
}

.sidebar-menu {
  border-right: none;
  padding: 8px 0;
}

.sidebar-menu :deep(.el-menu-item) {
  position: relative;
  margin: 4px 10px;
  border-radius: 10px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
  overflow: hidden;
}

/* Active indicator bar — using ::before so it doesn't shift content */
.sidebar-menu :deep(.el-menu-item::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  border-radius: 0 4px 4px 0;
  background-color: var(--mm-sidebar-active);
  transition: height 0.25s ease;
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: var(--mm-bg-card) !important;
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: var(--mm-bg-card) !important;
}

.sidebar-menu :deep(.el-menu-item.is-active::before) {
  height: 60%;
}

/* Neon glow for active item icon in dark mode */
html.dark .sidebar-menu :deep(.el-menu-item.is-active) {
  box-shadow: inset 0 0 12px rgba(0, 240, 255, 0.05);
}

html.dark .sidebar-menu :deep(.el-menu-item.is-active .el-icon) {
  filter: drop-shadow(0 0 4px var(--mm-sidebar-active));
}

.layout-main {
  background-color: var(--mm-bg-color);
  transition: background-color 0.3s;
  padding: 24px;
}
</style>
