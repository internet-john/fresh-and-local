/**
 * TODO: Move data to CDN
 */

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const produce = [
        {
            name: 'Beans, Shell',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Beets',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Cabbage',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Carrots',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Onions',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Parsnips',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Potatoes',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Squash, Winter',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Turnips',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Beans, Shell',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Beets',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Cabbage',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Carrots',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Onions',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Parsnips',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Potatoes',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Squash, Winter',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Turnips',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Apples',
            type: 'FRUIT',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Pears',
            type: 'FRUIT',
            month: 'January',
            location: 'New York',
        }
    ]
    produce.forEach(item => {
        const node = {
            name: item.name,
            type: item.type,
            month: item.month,
            location: item.location,
            id: createNodeId(`Produce-${item.name}`),
            internal: {
                type: item.type,
                contentDigest: createContentDigest(item)
            },
        }
        actions.createNode(node)
    })
}

/**
 * 
 * (Subset: just need a few for POC add comprehensive listings later)
 * NEW YORK 
 * 
 * VEG
 * January: Shell Beans, Beets, Cabbage, Carrots (via storage)
 * February: Shell Beans, Beets, Cabbage, Carrots (via storage)
 * March: Shell Beans, Cabbage, Carrots (via storage)
 * April: Shell Beans (via storage)
 * May: Asparagus, Beet Greens
 * June: Rhubarb
 * July: Summer Squash
 * August: Winter Squash
 * September: Swiss Chard
 * October: Tomatoes
 * November: Turnips (via storage)
 * December: Potatoes (via storage)
 * 
 * FRUIT
 * January: Apples (via storage)
 * February: None
 * March: None
 * April: None
 * May: None
 * June: Strawberries
 * July: Apples
 * August: Blackberries
 * September: Cantaloupes
 * October: Grapes
 * November: Pears (via storage)
 * December: Apples, grapes (via storage)
 * 
 */ 

 /**
 * 
 * CALI 
 * 
 * VEG
 * January: 
 * February:
 * March:
 * April:
 * May:
 * June:
 * July:
 * August:
 * September:
 * October:
 * November:
 * December:
 * 
 * FRUIT
 * January: 
 * February:
 * March:
 * April:
 * May:
 * June:
 * July:
 * August:
 * September:
 * October:
 * November:
 * December:
 * 
 */ 