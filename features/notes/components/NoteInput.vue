<template>
  <div class="w-full">
    <label v-if="label" class="block text-gray-700 font-semibold mb-1">{{ label }}</label>
    <input
        v-if="type === 'text'"
        v-model="model"
        type="text"
        :placeholder="placeholder"
        class="border rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400"
    />
    <textarea
        v-else
        v-model="model"
        :placeholder="placeholder"
        class="border rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400 h-24"
    ></textarea>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import {defineModel, defineProps} from 'vue';

const model = defineModel<string>();

defineProps({
  label: String,
  placeholder: String,
  error: String,
  type: {type: String, default: 'text'},
});
</script>