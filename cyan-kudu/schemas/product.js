export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'filtering',
            type: 'array',
            of: [
                {   
                    name: 'filter_type',
                    title: 'Filter Type',
                    type: 'object',
                    fields: [
                        {
                            name: 'filter_name',
                            type: 'string',
                            title: 'Filter Name'
                        },
                        {
                            name: 'shortcut',
                            type: 'string',
                            title: 'Filter Shortcut'
                        },
                        {
                            name: 'value',
                            type: 'number',
                            title: 'Filter Value'
                        },
                        {
                            name: 'instock',
                            type: 'number',
                            title: 'In Stock'
                        },
                        {
                            name: 'price',
                            type: 'array',
                            of: [
                                {
                                    type: 'price'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'category' }]
                }
            ]
        },
        {
            name: 'image',
            type: 'array',
            of: [
                {
                    type: 'figure',
                }
            ]
        },
        {
            name: 'colors',
            type: 'array',
            of: [
                {
                    name: 'color',
                    type: 'document',
                    title: 'Color',
                    fields: [
                        {
                            name: 'color_name',
                            type: 'string',
                            title: 'Color Name'
                        },
                        {
                            name: 'color_hash',
                            type: 'string',
                            title: 'Color Hash'
                        },
                        {
                            name: 'color_img',
                            type: 'array',
                            title: 'Color Photo',
                            of: [
                                {
                                    type: 'figure'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

    ]
}