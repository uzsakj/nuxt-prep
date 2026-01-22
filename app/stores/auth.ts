export type User = {
    username: string
}

export type LoginResponse = {
    user: User
}


export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)

    const isAuthenticated = computed(() => !!user.value)

    const login = async (credentials: {
        username: string
        password: string
    }) => {
        const { user: loggedInUser } = await $fetch<LoginResponse>('/api/login', {
            method: 'POST',
            body: credentials
        })

        user.value = loggedInUser
    }

    const logout = () => {
        user.value = null
    }

    return {
        user,
        isAuthenticated,
        login,
        logout
    }

})