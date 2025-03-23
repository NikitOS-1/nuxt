<template>
  <div class="p-4">
    <div v-for="noteItem in [...store.notes].reverse()" :key="noteItem.id" class="mb-4 border p-2 rounded p-4">
      <div v-if="note.id !== noteItem.id">
        <div class="text-xl font-semibold">{{ noteItem.title }}</div>
        <p>{{ noteItem.content }}</p>
        <button @click="startEditing(noteItem)" class="bg-yellow-500 text-white p-2 rounded">Edit</button>
        <button @click="deleteNote(noteItem.id)" class="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
      </div>

      <div v-else>
        <input
            v-model="note.title"
            type="text"
            class="border p-2 w-full"
        />
        <p class="text-red-500 text-sm" v-if="errors.title">{{ errors.title }}</p>
        <textarea
            v-model="note.content"
            class="border p-2 w-full mt-2"
        ></textarea>
        <p class="text-red-500 text-sm" v-if="errors.content">{{ errors.content }}</p>

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