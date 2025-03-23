<template>
  <div class="p-4 max-w-lg mx-auto">
    <div v-for="noteItem in [...store.notes].reverse()" :key="noteItem.id" class="mb-4 border p-4 rounded-lg shadow">
      <div v-if="note.id !== noteItem.id">
        <div class="text-xl font-semibold">{{ noteItem.title }}</div>
        <p>{{ noteItem.content }}</p>
        <button @click="startEditing(noteItem)" class="bg-yellow-500 text-white p-2 rounded">Edit</button>
        <button @click="deleteNote(noteItem.id)" class="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
      </div>

      <div v-else class="bg-gray-100 p-4 rounded-lg">
        <NoteInput v-model="note.title" label="Title" :error="errors.title"/>
        <NoteInput v-model="note.content" label="Content" :error="errors.content" type="textarea"/>
        <button @click="saveNote" class="bg-green-500 text-white p-2 rounded">Save</button>
        <button @click="cancelEdit" class="bg-gray-500 text-white p-2 rounded ml-2">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useNotes} from '@/features/notes/model/useNotes';
import {useNotesStore} from '@/entities/note/model/store';
import type {Note} from '@/entities/note/model/types';
import NoteInput from "~/features/notes/components/NoteInput.vue";

const store = useNotesStore();
const {note, errors, saveNote, editNote} = useNotes();

const startEditing = (noteItem: Note) => {
  editNote(noteItem);
};

const cancelEdit = () => {
  note.value = {id: '', title: '', content: ''};
};

const deleteNote = (id: string) => {
  store.deleteNote(id);
};
</script>