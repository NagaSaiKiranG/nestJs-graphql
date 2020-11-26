import { Injectable } from "@nestjs/common";
import {list} from './mock_productList';
import * as discountList from './discountListMock';
import orderSummary from '../utils/order-summary-utils';

@Injectable()
export class CoffeeShopService {
    // products = (<any>productsList).data;
    discountObj = [
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
          }
        ];
    ProductList = {
        data: [
            {
                id: 1,
                type: "beverage",
                name: "cofee",
                price: 4,
                category: "level_2",
                discount: 5
            },
            {
                id: 2,
                type: "food",
                name: "cake",
                price: 45,
                category: "level_2",
                discount: 5
            }
        ],
        total: 2,
        time: "12/12/2020"
    }
    taxCategory = {
        level_1: 0,
        level_2: 5,
        level_3: 15,
        level_4: 18
    }
    getProductsList() : any {
        return list;
    }
    getDiscountList() : any {
        return this.discountObj;
    }
    calculateOrderPrice(data) {
        return orderSummary(data, this.discountObj, this.taxCategory);
    }
}