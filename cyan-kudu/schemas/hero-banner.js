export default {
    name: 'hero',
    type: 'document',
    title: 'Hero',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'array',
            of: [
                {
                    name: 'Category Name',
                    type: 'reference',
                    to: [{ type: 'category' }]
                }
            ]
        },
        {
            title: 'Category Image',
            name: 'category_image',
            type: 'figure',
        }
    ]
}