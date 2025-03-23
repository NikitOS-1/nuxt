<template>
  <div class="px-2 sm:px-4 py-4 max-w-lg mx-auto">
    <div v-for="noteItem in [...store.notes].reverse()" :key="noteItem.id"
         class="mb-4 border bg-white bg-opacity-50 p-4 rounded-lg shadow-md">

      <div v-if="note.id !== noteItem.id" class="relative flex flex-col">
        <h3 class="text-lg font-semibold rounded bg-gradient-to-r from-blue-200 to-purple-200 p-2 text-gray-800 text-center break-words">
          {{ noteItem.title }}
        </h3>
        <p class="text-md bg-gray-100 rounded-lg my-3 min-h-24 p-2 text-gray-800 shadow-inner overflow-hidden break-words whitespace-pre-wrap">
          {{ noteItem.content }}
        </p>

        <div class="flex space-x-2 justify-end">
          <button
              @click="startEditing(noteItem)"
              class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-2 rounded-full shadow-md transition-all hover:scale-110 hover:from-yellow-500 hover:to-yellow-700 flex items-center justify-center">
            <Pencil class="w-5 h-5"/>
          </button>

          <button
              @click="deleteNote(noteItem.id)"
              class="bg-gradient-to-r from-red-400 to-red-600 text-white p-2 rounded-full shadow-md transition-all hover:scale-110 hover:from-red-500 hover:to-red-700 flex items-center justify-center">
            <Trash2 class="w-5 h-5"/>
          </button>
        </div>
      </div>

      <div v-else class="transition-all flex flex-col">
        <Input v-model="note.title" id="title" label="Title" :error="errors.title" class="w-full mb-4"/>
        <Input v-model="note.content" id="content" label="Content" :error="errors.content" type="textarea"
               class="w-full"/>
        <div class="flex justify-end space-x-2 mt-4">
          <button
              @click="saveNote"
              class="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-all hover:bg-green-600 hover:scale-105">
            Save
          </button>
          <button
              @click="cancelEdit"
              class="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md transition-all hover:bg-gray-500 hover:scale-105">
            Cancel
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {useNotes} from '@/features/notes/model/useNotes';
import {useNotesStore} from '@/entities/note/model/store';
import Input from '~/features/notes/components/Input.vue';
import type {Note} from '@/entities/note/model/types';
import {Pencil, Trash2} from 'lucide-vue-next';

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