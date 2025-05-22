<template>
  <div class="login-page">

    <div class="top-bar">
      <div class="logo"> MateMoney <span>Login</span></div>
      <button class="signup-btn">Sign up</button>
    </div>


    <div class="login-box">
      <h2>Enter</h2>

      <div class="input-group">
        <label>Phone / Email / MMID</label>
        <input type="text" v-model="username" />
      </div>

      <div class="input-group">
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>

      <div class="options">
        <label>
          <input type="checkbox" v-model="remember" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>

      <button @click="handleLogin">Enter</button>

      <div class="divider">OR</div>

      <button class="qr-btn">📷 QR-code</button>

      <div class="alt-buttons">
        <button>Keeper WinPro</button>
        <button>Keeper WebPro</button>
      </div>

      <p v-if="error" class="error">{{ error }}</p>
    </div>


    <div class="bottom-bar">
      <div>🇬🇧 English ⌄</div>
      <a href="#">Help</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const remember = ref(false)
const error = ref('')

const handleLogin = () => {
  const u = username.value.trim()
  const p = password.value

  !u || !p
    ? (error.value = 'Please enter all fields.')
    : u === 'tungmo' && p === '123456'
      ? (alert('Login successful!'), error.value = '')
      : (error.value = 'Invalid username or password.')
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f5f7;
  min-height: 100vh;
  padding: 24px;
  font-family: sans-serif;
}

.top-bar {
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.logo {
  font-size: 18px;
  font-weight: bold;
  color: #0072ce;
}

.logo span {
  color: #444;
  font-weight: normal;
}

.signup-btn {
  background: white;
  border: 1px solid #0072ce;
  color: #0072ce;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.login-box {
  background: white;
  padding: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-group label {
  font-size: 14px;
  color: #555;
}

.input-group input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}

.input-group input:focus {
  border-color: #0072ce;
  box-shadow: 0 0 0 2px rgba(0, 114, 206, 0.2);
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-top: -8px;
}

.options a {
  color: #0072ce;
  text-decoration: none;
}

button {
  background-color: #0072ce;
  color: white;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #005ea8;
}

.divider {
  text-align: center;
  font-size: 12px;
  color: #999;
}

.qr-btn {
  background: white;
  color: #333;
  border: 1px solid #ccc;
}

.alt-buttons {
  display: flex;
  gap: 12px;
}

.alt-buttons button {
  flex: 1;
  background: white;
  color: #0072ce;
  border: 1px solid #0072ce;
}

.error {
  color: red;
  text-align: center;
  margin-top: -8px;
}

.bottom-bar {
  margin-top: 24px;
  font-size: 13px;
  color: #666;
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: space-between;
}
.bottom-bar a {
  color: #0072ce;
  text-decoration: none;
}
</style>
