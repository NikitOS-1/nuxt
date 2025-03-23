<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-gray-700 font-semibold mb-1">{{ label }}</label>
    <input
        v-if="type === 'text'"
        v-model="model"
        type="text"
        :id="id"
        :placeholder="placeholder"
        class="border rounded-lg w-full p-2 focus:ring focus:ring-blue-200 outline-0"
    />
    <textarea
        v-else
        v-model="model"
        :id="id"
        :placeholder="placeholder"
        class="border rounded-lg w-full p-2 focus:ring focus:ring-blue-200 outline-0 h-24"
    ></textarea>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();

defineProps({
  id: String,
  label: String,
  placeholder: String,
  error: String,
  type: {type: String, default: 'text'},
});
</script>