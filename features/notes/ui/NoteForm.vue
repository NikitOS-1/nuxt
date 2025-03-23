<template>
  <div class="p-4 max-w-lg mx-auto">
    <form @submit.prevent="saveNote" class="space-y-4 bg-white p-4 rounded-lg shadow-lg">
      <NoteInput v-model="note.title" label="Title" placeholder="Enter title" :error="errors.title"/>
      <NoteInput v-model="note.content" label="Content" placeholder="Enter content" :error="errors.content"
                 type="textarea"/>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">
        {{ note.id ? "Update" : "Save" }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useNotes} from '@/features/notes/model/useNotes';
import NoteInput from "~/features/notes/components/NoteInput.vue";

const {note, errors, saveNote} = useNotes();
</script>