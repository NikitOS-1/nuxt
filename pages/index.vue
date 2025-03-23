<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-100 p-4">
    <div class="w-full max-w-2xl shadow-lg rounded-lg p-2 bg-transparent">
      <h1 class="text-center font-bold text-xl mt-2 ">Keep your notes with you</h1>
      <NoteForm/>
      <NoteList/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NoteForm, NoteList} from '@/features/notes';
</script>