<template>
  <div class="home-view">
    <el-card shadow="never" class="welcome-card neon-card">
      <template #header>
        <div class="card-header">
          <el-icon :size="32" class="header-icon"><Coin /></el-icon>
          <h1>{{ $t('home.title') }}</h1>
        </div>
      </template>
      <p class="description">{{ $t('home.description') }}</p>

      <el-divider />

      <el-row :gutter="20">
        <el-col :span="8" v-for="item in features" :key="item.title">
          <div class="feature-card neon-card">
            <el-icon :size="40" class="feature-icon">
              <component :is="item.icon" />
            </el-icon>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Coin, DataAnalysis, Wallet } from '@element-plus/icons-vue'

const { t } = useI18n()

const features = computed(() => [
  {
    icon: Wallet,
    title: t('menu.transactions'),
    desc: t('home.description'),
  },
  {
    icon: DataAnalysis,
    title: t('menu.reports'),
    desc: t('home.description'),
  },
  {
    icon: Coin,
    title: t('menu.settings'),
    desc: t('home.description'),
  },
])
</script>

<style scoped>
.home-view {
  max-width: 900px;
  margin: 0 auto;
}

.welcome-card {
  background-color: var(--mm-bg-card);
  padding: 8px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon {
  color: var(--neon-blue);
}

.card-header h1 {
  margin: 0;
  font-size: 24px;
  color: var(--mm-text-color);
}

.description {
  font-size: 16px;
  color: var(--mm-text-secondary);
}

.feature-card {
  text-align: center;
  padding: 28px 16px;
  cursor: default;
}

.feature-icon {
  color: var(--neon-blue);
  transition: filter 0.3s;
}

.feature-card:hover .feature-icon {
  filter: drop-shadow(0 0 6px var(--neon-blue));
}

.feature-card h3 {
  margin: 14px 0 8px;
  color: var(--mm-text-color);
  font-size: 16px;
}

.feature-card p {
  color: var(--mm-text-muted);
  font-size: 13px;
  line-height: 1.5;
}
</style>
