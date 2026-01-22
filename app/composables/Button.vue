<template>
  <button 
  :disabled="loading"
  @click="$emit('click', $event)"
  class="btn"
  :class="[{ full }, $attrs.class]">
    <span v-if="loading">{{ loadingMessage || 'loading' }}</span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean
  type?: 'button' | 'submit'
   full?: boolean 
  loadingMessage?: string
}>()
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #3b82f6;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.btn.full {
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
