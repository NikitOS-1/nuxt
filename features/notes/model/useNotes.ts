import {ref} from 'vue';
import {useNotesStore} from '@/entities/note/model/store';
import type {Note} from '@/entities/note/model/types';
import {noteSchema} from "#shared/schema/validate";

export function useNotes() {
    const store = useNotesStore();
    const note = ref<Note>({id: '', title: '', content: ''});
    const errors = ref<{ title?: string; content?: string }>({});

    const validateForm = async () => {
        try {
            await noteSchema.validate(note.value, {abortEarly: false});
            errors.value = {};
            return true;
        } catch (err: any) {
            errors.value = Object.fromEntries(
                err.inner.map((e: any) => [e.path, e.message])
            );
            return false;
        }
    };

    const saveNote = async () => {
        if (!(await validateForm())) return;

        const newNote: Note = {...note.value, id: note.value.id || `${Date.now()}`};
        note.value.id ? store.editNote(newNote) : store.addNote(newNote);
        resetForm();
    };

    const editNote = (noteToEdit: Note) => {
        note.value = {...noteToEdit};
    };

    const resetForm = () => {
        note.value = {id: '', title: '', content: ''};
    };

    return {note, errors, saveNote, editNote};
}