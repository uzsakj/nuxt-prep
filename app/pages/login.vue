<script setup lang="ts">

    const auth= useAuthStore()
    const username = ref('')
    const password = ref('')
    const loading = ref(false)
    const error = ref<string|null>(null)


    onMounted(() => {
        // Update fields with autofilled values so they are not lost on rerenders
        const u = document.getElementById('username') as HTMLInputElement
        const p = document.getElementById('password') as HTMLInputElement
        if (u?.value) username.value = u.value
        if (p?.value) password.value = p.value
    })

    const onSubmit = async ()=>{
        error.value = null
        loading.value = true

        try{
            await auth.login({username: username.value, password:password.value})
            return navigateTo('/dashboard')
        }catch(err:any){
            error.value = err.message || err.statusMessage || 'Something went wrong'
        }finally{
            loading.value = false
        }
    }

</script>
<template>
    <div class="login-page">
        <h1>Login</h1>

        <form  @submit.prevent="onSubmit">
            <div class="field">
                <label for="username">Username</label>
                <input
                id="username"
                v-model="username"
                type="text"
                autocomplete="username"
                required>
            </div>

            <div class="field">
                <label for="password">Password</label>
                <input
                id="password"
                v-model="password"
                type="password"
                autocomplete="current-password" 
                required>
            </div>

            <button type="submit" :disabled="loading">
                {{ loading ? 'Logging in...' : 'Login' }}
            </button>
            <p v-if="error" class="error">
                {{ error }}
            </p>
        </form>
    </div>
</template>
<style>
    .login-page{
        max-width: 420px;
        margin:4rem auto;
        padding: 2rem;
        border: 1px solid gray;
        border-radius: 12px;
    }

    h1{
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    .field{
        margin-bottom: 1rem;
    }

    label{
        display: block;
        margin-bottom: 0.25rem;
    }

    input{
        width: 100%;
        padding: 0.5rem;
        margin-top: 1rem;
    }

    button{
        width: 100%;
        padding: 0.5rem;
        margin-top: 1rem;
    }
    .error{
        margin-top: 1rem;
        color: red;
    }


</style>