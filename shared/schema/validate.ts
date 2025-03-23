import * as yup from 'yup';

export const noteSchema = yup.object({
    title: yup
        .string()
        .trim()
        .min(2, 'Title must be at least 2 characters')
        .required('Title is required')
        .test('no-spaces', 'Title cannot be empty or just spaces', value => !!value?.trim()),

    content: yup
        .string()
        .trim()
        .min(2, 'Content must be at least 2 characters')
        .required('Content is required')
        .test('no-spaces', 'Content cannot be empty or just spaces', value => !!value?.trim()),
});