<template>
  <div class="p-4">
    <form @submit.prevent="saveNote" class="space-y-4">
      <input
          v-model="note.title"
          type="text"
          placeholder="Title"
          class="border p-2 w-full"
      />
      <span v-if="errors.title" class="text-red-500">{{ errors.title }}</span>

      <textarea
          v-model="note.content"
          placeholder="Content"
          class="border p-2 w-full"
      />
      <span v-if="errors.content" class="text-red-500">{{ errors.content }}</span>

      <button type="submit" class="bg-blue-500 text-white p-2 rounded">
        {{ note.id ? "Update" : "Save" }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useNotes} from '@/features/notes/model/useNotes';

const {note, errors, saveNote} = useNotes();
</script>