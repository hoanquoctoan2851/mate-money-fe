<template>
  <div class="register-page">
    <h2 class="form-title">{{ $t('auth.registerTitle') }}</h2>
    <p class="form-subtitle">{{ $t('auth.registerSubtitle') }}</p>

    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      size="large"
      @submit.prevent="handleRegister"
    >
      <el-form-item :label="$t('auth.fullName')" prop="fullName">
        <el-input
          v-model="form.fullName"
          :placeholder="$t('auth.fullNamePlaceholder')"
          :prefix-icon="UserFilled"
          clearable
        />
      </el-form-item>

      <el-form-item :label="$t('auth.email')" prop="email">
        <el-input
          v-model="form.email"
          :placeholder="$t('auth.emailPlaceholder')"
          :prefix-icon="Message"
          clearable
        />
      </el-form-item>

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
        />
      </el-form-item>

      <el-form-item :label="$t('auth.confirmPassword')" prop="confirmPassword">
        <el-input
          v-model="form.confirmPassword"
          type="password"
          :placeholder="$t('auth.confirmPasswordPlaceholder')"
          :prefix-icon="Lock"
          show-password
          @keyup.enter="handleRegister"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          class="submit-btn"
          :loading="authStore.loading"
          @click="handleRegister"
        >
          {{ $t('auth.register') }}
        </el-button>
      </el-form-item>
    </el-form>

    <div class="form-footer">
      <span class="footer-text">{{ $t('auth.hasAccount') }}</span>
      <router-link :to="{ name: 'login' }" class="footer-link">
        {{ $t('auth.loginNow') }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { User, UserFilled, Lock, Message } from '@element-plus/icons-vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const { t } = useI18n()
const authStore = useAuthStore()
const formRef = ref<FormInstance>()

const form = reactive({
  fullName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
})

const rules = reactive<FormRules>({
  fullName: [
    { required: true, message: () => t('auth.fullNameRequired'), trigger: 'blur' },
  ],
  email: [
    { required: true, message: () => t('auth.emailRequired'), trigger: 'blur' },
    { type: 'email', message: () => t('auth.emailInvalid'), trigger: 'blur' },
  ],
  username: [
    { required: true, message: () => t('auth.usernameRequired'), trigger: 'blur' },
    { min: 3, message: () => t('auth.usernameMin'), trigger: 'blur' },
  ],
  password: [
    { required: true, message: () => t('auth.passwordRequired'), trigger: 'blur' },
    { min: 6, message: () => t('auth.passwordMin'), trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: () => t('auth.confirmPasswordRequired'), trigger: 'blur' },
    {
      validator: (_rule: unknown, value: string, callback: (err?: Error) => void) => {
        if (value !== form.password) {
          callback(new Error(t('auth.passwordMismatch')))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
})

async function handleRegister() {
  if (!formRef.value) return
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return

  const result = await authStore.register({
    fullName: form.fullName,
    email: form.email,
    username: form.username,
    password: form.password,
  })

  if (result.success) {
    ElMessage.success(t('auth.registerSuccess'))
    router.push({ name: 'home' })
  } else {
    ElMessage.error(result.message || t('auth.registerFailed'))
  }
}
</script>

<style scoped>
.register-page {
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
  margin-bottom: 24px;
}

.submit-btn {
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-pink));
  border: none;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  box-shadow: var(--glow-pink);
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

