/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const produce = [
        {
            name: 'Beets',
            type: 'VEGETABLE',
            month: 'January',
            location: 'New York',
        },
        {
            name: 'Apples',
            type: 'FRUIT',
            month: 'July',
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