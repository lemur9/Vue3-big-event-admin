import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user' // 假设存在 userGetInfoService 接口

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data
    }
    const setUser = (obj) => (user.value = obj)
    return { token, setToken, removeToken, user, getUser, setUser }
  },
  {
    persist: true, // 持久化
  },
)