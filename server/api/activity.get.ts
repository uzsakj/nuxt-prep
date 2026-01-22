export default defineEventHandler(() => {
    return [
        { id: 1, title: 'Task 1', content: 'Finish Nuxt practice project', completed: false },
        { id: 2, title: 'Task 2', content: 'Read Pinia docs', completed: true },
        { id: 3, title: 'Task 3', content: 'Build reusable components', completed: false }
    ]
})
