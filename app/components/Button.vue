<template>
  <button 
  :disabled="loading"
  @click="handleClick"
  class="btn"
  :class="[{ full }, $attrs.class]">
    <span v-if="loading">{{ loadingMessage || 'loading' }}</span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading?: boolean
  type?: 'button' | 'submit'
   full?: boolean 
  loadingMessage?: string
}>()

const emit = defineEmits<{
  click: [event: Event]
}>()

const handleClick = (event: Event) => {
  // Only prevent default for non-submit buttons
  if (props.type !== 'submit') {
    event.preventDefault()
  }
  event.stopPropagation()
  emit('click', event)
}
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
