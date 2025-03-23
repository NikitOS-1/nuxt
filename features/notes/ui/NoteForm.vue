<template>
  <div class="px-2 sm:px-4 py-4 max-w-lg mx-auto">
    <form @submit.prevent="saveNote" class="space-y-4 bg-white bg-opacity-50 p-3 sm:p-4 rounded-lg shadow-lg">
      <Input v-model="note.title" label="Title" placeholder="Enter title" :error="errors.title"/>
      <Input v-model="note.content" label="Content" placeholder="Enter content" :error="errors.content"
             type="textarea"/>
      <button type="submit"
              class="bg-green-400 text-white px-4 py-2 rounded-lg shadow-md transition-all hover:bg-green-400 hover:scale-95 w-full">
        Save
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useNotes} from '@/features/notes/model/useNotes';
import Input from "~/features/notes/components/Input.vue";

const {note, errors, saveNote} = useNotes();
</script>