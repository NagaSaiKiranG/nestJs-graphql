export const cartData = {
    orderSummary: [{
        type: "bevarage",
        items: [{
            id: 1,
            price: 4,
            quantity: 4,
            taxCategory: "level_2"
        }]
    },
    {
        type: "food",
        items: [{
            id: 5,
            price: 45,
            quantity: 3,
            taxCategory: "level_2"
        }]
    }
    ],
    total: 7,
    discountIds: [2, 3]
}

export const discountObj = [
    {
        discountId: 1,
        discountAmount: 10,
        expiryDate: new Date(),
        discountType: 'singleton',
        applicableLevel: 'types',
        discountOn: ['types', 'quantity'],
        criteria: [{
            discountOn: 'types',
            value: 'food'
        },
        {
            discountOn: 'quantity',
            value: 3
        }
        ]
    },
    {
        discountId: 2,
        discountAmount: 5,
        expiryDate: new Date(),
        discountType: 'addon',
        applicableLevel: 'items',
        discountOn: ['items', 'quantity'],
        criteria: [{
            discountOn: 'items',
            value: 1
        },
        {
            discountOn: 'quantity',
            value: 3
        }
        ]
    },
    {
        discountId: 3,
        discountAmount: 5,
        expiryDate: new Date(),
        discountType: 'addon',
        applicableLevel: 'final',
        discountOn: ['finalPrice'],
        criteria: [{
            discountOn: 'finalPrice',
            value: 100
        }]
    },
    {
        discountId: 4,
        discountAmount: 15,
        expiryDate: new Date(),
        discountType: 'addon',
        applicableLevel: 'final',
        discountOn: ['finalPrice'],
        criteria: [{
            discountOn: 'finalPrice',
            value: 300
        }]
    }
];

export const taxCategory = {
    level_1: 0,
    level_2: 5,
    level_3: 15,
    level_4: 18
}

export const summary = {
    discount: 0,
    finalPrice: 151,
    items: [{
        _key: 1,
        discount: 0,
        finalPrice: 16,
        quantity: 4
    }, {
        _key: 5,
        discount: 0,
        finalPrice: 135,
        quantity: 3
    }],
    quantity: 7,
    types: [{
        _key: "bevarage",
        discount: 0,
        finalPrice: 16,
        quantity: 4
    }, {
        _key: "food",
        discount: 0,
        finalPrice: 135,
        quantity: 3
    }]
}