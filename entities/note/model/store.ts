import {defineStore} from 'pinia';
import type {Note} from "~/entities/note/model/types";

export const useNotesStore = defineStore('notes', {
    state: () => ({
        notes: [] as Note[],
    }),

    actions: {
        addNote(note: Note) {
            this.notes.push(note);
        },
        editNote(updatedNote: Note) {
            const index = this.notes
                .findIndex((note: Note) => note.id === updatedNote.id);
            if (index !== -1) {
                this.notes[index] = updatedNote;
            }

        },
        deleteNote(id: string) {
            this.notes = this.notes.filter((note: Note) => note.id !== id);
        },
    },
});