import { mount } from '@vue/test-utils'
import LoginView from '@/views/auth/LoginView.vue'
import { describe, expect, test } from 'vitest'

describe('LoginView.vue', () => {
   const types = [
    { type: 'error', expectedClass: 'notification--error' },
    { type: 'success', expectedClass: 'notification--success' },
    { type: 'info', expectedClass: 'notification--info' },
  ]

  types.forEach(({ type, expectedClass }) => {
    test(`renders correct style for type: ${type}`, () => {
      const wrapper = mount(LoginView, {
        props: { type }
      })
      expect(wrapper.classes()).toContain(expectedClass)
    })
  })

  test('adds slide class when message is not empty', () => {
    const wrapper = mount(LoginView, {
      props: { message: 'some message ------' }
    })
    expect(wrapper.classes()).toContain('notification--slide')
  })
})
