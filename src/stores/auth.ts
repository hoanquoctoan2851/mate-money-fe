import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '../router'

export interface UserInfo {
  id: string
  username: string
  email: string
  fullName: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface RegisterPayload {
  username: string
  email: string
  fullName: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<UserInfo | null>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : null
  )
  const loading = ref(false)

  const isAuthenticated = computed(() => !!token.value)

  function setAuth(newToken: string, userInfo: UserInfo) {
    token.value = newToken
    user.value = userInfo
    localStorage.setItem('token', newToken)
    localStorage.setItem('user', JSON.stringify(userInfo))
  }

  function clearAuth() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  /**
   * Login — gọi API thật thì thay fetch/axios vào đây.
   * Hiện tại mock để demo.
   */
  async function login(payload: LoginPayload): Promise<{ success: boolean; message?: string }> {
    loading.value = true
    try {
      // TODO: Replace with real API call
      // const res = await axios.post('/api/auth/login', payload)
      await new Promise((r) => setTimeout(r, 800)) // simulate network

      // Mock validation
      if (payload.username === 'admin' && payload.password === '123456') {
        const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-token.' + Date.now()
        const mockUser: UserInfo = {
          id: '1',
          username: 'admin',
          email: 'admin@matemoney.com',
          fullName: 'Admin User',
        }
        setAuth(mockToken, mockUser)
        return { success: true }
      }

      return { success: false, message: 'Sai tên đăng nhập hoặc mật khẩu' }
    } catch {
      return { success: false, message: 'Lỗi kết nối server' }
    } finally {
      loading.value = false
    }
  }

  /**
   * Register — mock, thay bằng API thật sau.
   */
  async function register(payload: RegisterPayload): Promise<{ success: boolean; message?: string }> {
    loading.value = true
    try {
      // TODO: Replace with real API call
      await new Promise((r) => setTimeout(r, 800))

      // Mock: always succeed
      const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-token.' + Date.now()
      const mockUser: UserInfo = {
        id: '2',
        username: payload.username,
        email: payload.email,
        fullName: payload.fullName,
      }
      setAuth(mockToken, mockUser)
      return { success: true }
    } catch {
      return { success: false, message: 'Lỗi kết nối server' }
    } finally {
      loading.value = false
    }
  }

  function logout() {
    clearAuth()
    router.push({ name: 'login' })
  }

  return {
    token,
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    setAuth,
    clearAuth,
  }
})

