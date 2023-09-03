<script setup>
import { computed, ref, reactive, watch, inject, onMounted } from 'vue'

/* interface */

const props = defineProps({
  fields: Array,
  target: {}
})

const emit = defineEmits(['update:validations', 'update:isValid'])
const canvas = ref()

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  // Load the SVG image
  const img = new Image()
  img.src = 'https://picsvg.com/example/shoes-1.svg' // Replace with the path to your SVG file
  // Wait for the image to load
  img.onload = () => {
    // Draw the loaded SVG onto the canvas
    ctx.drawImage(img, 0, 0, canvas.value.width, canvas.value.height)
  }
})
</script>

<template>
  <div class="super-graph-view">
    <canvas
      ref="canvas"
      style="background-color: #ddd"
    ></canvas>
  </div>
</template>