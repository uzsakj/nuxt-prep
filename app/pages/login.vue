<script setup lang="ts">
import Button from '../components/Button.vue'



    const auth= useAuthStore()
    const username = ref('')
    const password = ref('')
    const loading = ref(false)
    const error = ref<string|null>(null)



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
                v-model.lazy="username"
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

           <Button class="login-btn" full :loading="loading" type="submit">
                {{ loading ? 'Logging in...' : 'Login' }}
           </Button>
            <p v-if="error" class="error">
                {{ error }}
            </p>
        </form>
    </div>
</template>
<style scoped>
    .login-page{
        max-width: 25vw;
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
        box-sizing: border-box;
    }

    .login-btn{
        padding: 0.5rem;
        margin-top: 1rem;
    }
    .error{
        margin-top: 1rem;
        color: red;
    }


</style>