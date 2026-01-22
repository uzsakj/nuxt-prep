import type { LoginResponse } from "../../app/stores/auth"

export default defineEventHandler(async (event): Promise<LoginResponse> => {
    const body = await readBody<{
        username: string
        password: string
    }>(event)

    if (body.username === 'admin' && body.password === '1234') {
        return {
            user: {
                username: body.username
            }
        }
    }

    throw createError({
        statusCode: 401,
        statusMessage: 'Invalid credentials'
    })
})
