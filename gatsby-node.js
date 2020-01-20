/**
 * TODO: Move data to CDN
 * 
 * https://www.contentful.com/developers/docs/javascript/tutorials/using-contentful-graphql-with-javascript/
 * 
 */

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const vegetables = [
        {
            name: 'Asparagus',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6],
            location: 'New York',
        },  
        {
            name: 'Beans, String',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [7,8,9,10],
            location: 'New York',
        },           
        {
            name: 'Beans, Shell',
            type: 'VEGETABLE',
            storageMonths: [1,2,3,4,5,6,7],
            freshMonths: [9,10,11,12],
            location: 'New York',
        },
        {
            name: 'Beets',
            type: 'VEGETABLE',
            storageMonths: [1,2,12],
            freshMonths: [6,7,8,9,10,11],
            location: 'New York',
        },
        {
            name: 'Beet Greens',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7,8,9],
            location: 'New York',
        },
        {
            name: 'Broccoli',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [6,7,8,9,10,11],
            location: 'New York',
        },
        {
            name: 'Brussels Sprouts',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [9,10,11],
            location: 'New York',
        },
        {
            name: 'Cabbage',
            type: 'VEGETABLE',
            storageMonths: [1,2,3,12],
            freshMonths: [5,6,7,8,9,10,11],
            location: 'New York',
        },
        {
            name: 'Carrots',
            type: 'VEGETABLE',
            storageMonths: [1,2,3,12],
            freshMonths: [6,7,8,9,10,11],
            location: 'New York',
        },
        {
            name: 'Cauliflower',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [8,9,10,11],
            location: 'New York',
        },
        {
            name: 'Celery',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [8,9,10],
            location: 'New York',
        },
        {
            name: 'Collard Greens',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [7,8,9,10,11,12],
            location: 'New York',
        },
        {
            name: 'Corn',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Cucumbers',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [7,8,9],
            location: 'New York',
        },
        {
            name: 'Eggplant',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [8,9,10],
            location: 'New York',
        },
        // {
        //     name: 'Fennel',
        //     type: 'VEGETABLE',
        //     storageMonths: [],
        //     freshMonths: ['July', 'August', 'September'],
        //     location: 'New York',
        // },
        // {
        //     name: 'Herbs',
        //     type: 'VEGETABLE',
        //     storageMonths: [],
        //     freshMonths: ['July', 'August', 'September'],
        //     location: 'New York',
        // },
        {
            name: 'Kale',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [9,10],
            location: 'New York',
        },
        {
            name: 'Lettuce',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Leeks',
            type: 'VEGETABLE',
            storageMonths: [11,12],
            freshMonths: [8,9,10],
            location: 'New York',
        },
        {
            name: 'Onions',
            type: 'VEGETABLE',
            storageMonths: [1,2,3,4,5,6,7,11,12],
            freshMonths: [8,9,10],
            location: 'New York',
        },
        {
            name: 'Parsnips',
            type: 'VEGETABLE',
            storageMonths: [1,2,3],
            freshMonths: [4,5,10,11,12],
            location: 'New York',
        },
        {
            name: 'Peas',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [6,7,9,10],
            location: 'New York',
        },
        {
            name: 'Peppers',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Potatoes',
            type: 'VEGETABLE',
            storageMonths: [1,2,3,4,5,6,11,12],
            freshMonths: [7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Pumpkins',
            type: 'VEGETABLE',
            storageMonths: [11],
            freshMonths: [9,10],
            location: 'New York',
        },
        {
            name: 'Radishes',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Rhubarb',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7],
            location: 'New York',
        },
        {
            name: 'Spinach',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Squash, Summer',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Squash, Winter',
            type: 'VEGETABLE',
            storageMonths: [1,2,11,12],
            freshMonths: [8,9,10],
            location: 'New York',
        },
        {
            name: 'Swiss Chard',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [6,7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Tomatoes',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Turnips',
            type: 'VEGETABLE',
            storageMonths: [1,2,11,12],
            freshMonths: [8,9,10],
            location: 'New York',
        },
        {
            name: 'Turnip Greens',
            type: 'VEGETABLE',
            storageMonths: [],
            freshMonths: [5,6,7,8],
            location: 'New York',
        },
    ];
    
    const fruits = [
        {
            name: 'Apples',
            type: 'FRUIT',
            storageMonths: [1,2,3,4,5,6,11,12],
            freshMonths: [7,8,9,10],
            location: 'New York',
        },
        {
            name: 'Blackberries',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [8],
            location: 'New York',
        },
        {
            name: 'Blueberries',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [7,8,9],
            location: 'New York',
        },
        {
            name: 'Cantaloupes',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [8,9],
            location: 'New York',
        },
        {
            name: 'Cherries',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [7],
            location: 'New York',
        },
        {
            name: 'Currants',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [8],
            location: 'New York',
        },
        {
            name: 'Grapes',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [9,10],
            location: 'New York',
        },
        {
            name: 'Peaches',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [7,8,9],
            location: 'New York',
        },
        {
            name: 'Pears',
            type: 'FRUIT',
            storageMonths: [1,2,11,12],
            freshMonths: [9,10],
            location: 'New York',
        },
        {
            name: 'Plums',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [7,8,9],
            location: 'New York',
        },
        {
            name: 'Prunes',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [9,10],
            location: 'New York',
        },
        {
            name: 'Strawberries',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [6,7],
            location: 'New York',
        },
        {
            name: 'Raspberries',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [7,9,10],
            location: 'New York',
        },
        {
            name: 'Watermelon',
            type: 'FRUIT',
            storageMonths: [],
            freshMonths: [9,10],
            location: 'New York',
        }
    ]
        
    vegetables.forEach(item => {
        const node = {
            name: item.name,
            type: item.type,
            storageMonths: item.storageMonths,
            freshMonths: item.freshMonths,
            location: item.location,
            id: createNodeId(`VEG-${item.name}`),
            internal: {
                type: item.type,
                contentDigest: createContentDigest(item)
            },
        }
        actions.createNode(node)
    })

    fruits.forEach(item => {
        const node = {
            name: item.name,
            type: item.type,
            storageMonths: item.storageMonths,
            freshMonths: item.freshMonths,
            location: item.location,
            id: createNodeId(`FRUIT-${item.name}`),
            internal: {
                type: item.type,
                contentDigest: createContentDigest(item)
            },
        }
        actions.createNode(node)
    })
}