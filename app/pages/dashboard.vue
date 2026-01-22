<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useDashboardStore } from '~/stores/dashboard'
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'

const auth = useAuthStore()
const dashboard = useDashboardStore()

const activities = computed(() => dashboard.activities)

onMounted(() => {
  dashboard.fetchActivities()
})
</script>

<template>
  <div class="dashboard">
    <h1>Welcome, {{ auth.user?.username }}</h1>

    <section class="stats">
      <p>Total tasks: {{ dashboard.totalCount }}</p>
      <p>Completed: {{ dashboard.completedCount }}</p>
    </section>

    <section>
      <h2>Activity Feed</h2>

      <p v-if="dashboard.loading">Loading...</p>
      <p v-if="dashboard.error">{{ dashboard.error }}</p>

      <Card
        v-for="item in activities"
        :key="item.id"
        :title="item.title"
        :content="item.content"
        :class="{ completed: item.completed }"
        footer-gap="md"
      >
        <template #footer>
          <Button type="button" @click="dashboard.toggleCompleted(item.id)">
            <template #default>
            {{ item.completed ? 'Mark Undone' : 'Mark Done' }}
          </template>
          </Button>
          <Button type="button" @click="dashboard.deleteActivity(item.id)">
            {{ 'Delete'}}
          </Button>
        </template>
      </Card>
    </section>
  </div>
</template>
<style>
    .dashboard{
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 2rem;
      border-radius: 12px;
    }
    .stats{
        display: flex;
        gap: 20px;
        margin-bottom: 1rem;
    }

</style>
