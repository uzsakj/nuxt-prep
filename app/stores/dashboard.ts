import { defineStore } from 'pinia'

export type Activity = {
    id: number
    title: string
    content: string
    completed: boolean
}

export const useDashboardStore = defineStore('dashboard', () => {
    const activities = reactive<Activity[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const completedCount = computed(
        () => activities.filter(a => a.completed).length
    )

    const totalCount = computed(
        () => activities.length
    )


    const fetchActivities = async () => {
        loading.value = true
        error.value = null

        try {
            const data = await $fetch<Activity[]>('/api/activity')
            activities.splice(0, activities.length, ...data)
        } catch (err: any) {
            error.value = err.message || err.statusMessage || 'Failed to load activities'
        } finally {
            loading.value = false
        }
    }

    let togglingId: number | null = null
    
    const toggleCompleted = (id: number) => {
        if (togglingId === id) return
        togglingId = id
        
        const item = activities.find(a => a.id === id)
        if (item) item.completed = !item.completed
        
        nextTick(() => {
            togglingId = null
        })
    }

    const deleteActivity = (id: number) => {
        const index = activities.findIndex(a => a.id === id)
        if (index !== -1) {
            activities.splice(index, 1)
        }
    }

    return {
        activities,
        loading,
        error,
        completedCount,
        totalCount,
        fetchActivities,
        toggleCompleted,
        deleteActivity
    }
})
