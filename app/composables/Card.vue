<template>
  <div class="card" :class="$attrs.class">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <div
      class="card-footer"
      :class="footerGap"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  footerGap?: 'sm' | 'md' | 'lg'
}>()
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  background: #fff;
}

.card.completed {
  background-color: #d1fae5; 
  color: #065f46;
  border-color: #10b981;
}

.card.completed h3,
.card.completed p {
  text-decoration: line-through;
}

.card-footer {
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #eee;
  padding-top: 0.75rem;
}

.card-footer.sm { gap: 0.25rem; }
.card-footer.md { gap: 0.5rem; }
.card-footer.lg { gap: 1rem; }
</style>
