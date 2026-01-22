

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()

    // Allow unauthenticated user to visit login page
    if (to.path === '/login') return

    // Redirect to login page if user is not authenticated for all other pages
    if (!auth.isAuthenticated) {
        return navigateTo('/login')
    }

})