<template>
  <div class="login-page">
    <h2 class="form-title">{{ $t('auth.loginTitle') }}</h2>
    <p class="form-subtitle">{{ $t('auth.loginSubtitle') }}</p>

    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      size="large"
      @submit.prevent="handleLogin"
    >
      <el-form-item :label="$t('auth.username')" prop="username">
        <el-input
          v-model="form.username"
          :placeholder="$t('auth.usernamePlaceholder')"
          :prefix-icon="User"
          clearable
        />
      </el-form-item>

      <el-form-item :label="$t('auth.password')" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          :placeholder="$t('auth.passwordPlaceholder')"
          :prefix-icon="Lock"
          show-password
          @keyup.enter="handleLogin"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          class="submit-btn"
          :loading="authStore.loading"
          @click="handleLogin"
        >
          {{ $t('common.login') }}
        </el-button>
      </el-form-item>
    </el-form>

    <div class="form-footer">
      <span class="footer-text">{{ $t('auth.noAccount') }}</span>
      <router-link :to="{ name: 'register' }" class="footer-link">
        {{ $t('auth.registerNow') }}
      </router-link>
    </div>

    <el-divider>
      <span class="divider-text">{{ $t('auth.mockHint') }}</span>
    </el-divider>
    <p class="mock-info">
      Username: <code>admin</code> &nbsp;|&nbsp; Password: <code>123456</code>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const { t } = useI18n()
const authStore = useAuthStore()
const formRef = ref<FormInstance>()

const form = reactive({
  username: '',
  password: '',
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: () => t('auth.usernameRequired'), trigger: 'blur' },
  ],
  password: [
    { required: true, message: () => t('auth.passwordRequired'), trigger: 'blur' },
    { min: 6, message: () => t('auth.passwordMin'), trigger: 'blur' },
  ],
})

async function handleLogin() {
  if (!formRef.value) return
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return

  const result = await authStore.login({
    username: form.username,
    password: form.password,
  })

  if (result.success) {
    ElMessage.success(t('auth.loginSuccess'))
    router.push({ name: 'home' })
  } else {
    ElMessage.error(result.message || t('auth.loginFailed'))
  }
}
</script>

<style scoped>
.login-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--mm-text-color);
  margin-bottom: 4px;
}

.form-subtitle {
  color: var(--mm-text-muted);
  font-size: 14px;
  margin-bottom: 28px;
}

.submit-btn {
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
  border: none;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  box-shadow: var(--mm-glow);
  transform: translateY(-1px);
}

.form-footer {
  text-align: center;
  margin-top: 16px;
}

.footer-text {
  color: var(--mm-text-muted);
  font-size: 14px;
}

.footer-link {
  color: var(--neon-blue);
  font-weight: 600;
  font-size: 14px;
  margin-left: 4px;
  transition: all 0.2s;
}

.footer-link:hover {
  text-shadow: var(--glow-blue);
}

.divider-text {
  color: var(--mm-text-muted);
  font-size: 12px;
}

.mock-info {
  text-align: center;
  color: var(--mm-text-muted);
  font-size: 13px;
}

.mock-info code {
  background-color: var(--mm-bg-card);
  padding: 2px 8px;
  border-radius: 4px;
  color: var(--neon-blue);
  font-weight: 600;
}

:deep(.el-input__wrapper) {
  border-radius: 10px;
  background-color: var(--mm-bg-card);
  transition: box-shadow 0.3s;
}

:deep(.el-input__wrapper:focus-within) {
  box-shadow: 0 0 0 1px var(--neon-blue) inset, var(--glow-soft) !important;
}

:deep(.el-form-item__label) {
  color: var(--mm-text-secondary);
  font-weight: 500;
}
</style>

