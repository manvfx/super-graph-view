<script setup>
import { computed, ref, reactive, watch, inject } from 'vue'

/* interface */

const props = defineProps({
  fields: Array,
  target: {},  
})

const emit = defineEmits(['update:validations', 'update:isValid'])
</script>

<template>
    <div class="super-graph-view">
        <h1>The Super graph view</h1>
    </div>
</template>