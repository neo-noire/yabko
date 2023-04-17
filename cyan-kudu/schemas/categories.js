export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            title: 'Category',
            name: 'category',
            type: 'string',
        },
        {
            title: 'Category Image',
            name: 'category_image',
            type: 'figure',
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'product' }]
                }
            ]
        }
    ]
}