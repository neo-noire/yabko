export default {
    name: 'tabs',
    type: 'document',
    title: 'Tabs',
    fields: [
        {
            title: 'Tabs',
            name: 'tabs',
            type: 'string',
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