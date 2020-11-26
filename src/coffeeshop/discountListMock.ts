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