<template>
  <div class="auth-layout">
    <!-- Background decoration -->
    <div class="auth-bg">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      <div class="glow-orb orb-3"></div>
    </div>

    <div class="auth-container">
      <!-- Left branding -->
      <div class="auth-branding">
        <div class="brand-content">
          <div class="brand-logo">
            <el-icon :size="48" color="var(--neon-blue)"><Coin /></el-icon>
          </div>
          <h1 class="brand-title">
            <span class="title-mate">Mate</span>
            <span class="title-money">Money</span>
          </h1>
          <p class="brand-desc">{{ $t('home.description') }}</p>
        </div>
      </div>

      <!-- Right form area -->
      <div class="auth-form-area">
        <div class="auth-form-header">
          <ThemeToggle />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Coin } from '@element-plus/icons-vue'
import ThemeToggle from '../components/ThemeToggle.vue'
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mm-bg-color);
  position: relative;
  overflow: hidden;
}

/* Background neon orbs */
.auth-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--neon-blue);
  top: -100px;
  right: -100px;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--neon-purple);
  bottom: -80px;
  left: -80px;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: var(--neon-pink);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.auth-container {
  position: relative;
  z-index: 1;
  display: flex;
  width: 900px;
  min-height: 520px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--mm-bg-secondary);
  border: 1px solid var(--mm-border-color);
  box-shadow: var(--mm-shadow);
  transition: all 0.3s ease;
}

.auth-branding {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--mm-bg-card), var(--mm-bg-secondary));
  padding: 40px;
  border-right: 1px solid var(--mm-border-color);
}

.brand-content {
  text-align: center;
}

.brand-logo {
  margin-bottom: 20px;
}

.brand-title {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.title-mate {
  color: var(--mm-text-color);
}

.title-money {
  color: var(--neon-blue);
}

html.dark .title-money {
  text-shadow: var(--glow-blue);
}

.brand-desc {
  color: var(--mm-text-muted);
  font-size: 15px;
  line-height: 1.6;
}

.auth-form-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
}

.auth-form-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
    width: 95%;
    min-height: auto;
  }

  .auth-branding {
    padding: 24px;
    border-right: none;
    border-bottom: 1px solid var(--mm-border-color);
  }

  .brand-title {
    font-size: 28px;
  }

  .auth-form-area {
    padding: 24px;
  }
}
</style>

