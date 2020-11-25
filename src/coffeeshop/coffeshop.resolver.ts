import { Resolver, Query, Args } from '@nestjs/graphql';
import { CoffeeShopService } from './coffeshop.service';

@Resolver()
export class CoffeeShopResolver {
    constructor(public readonly coffeeshopService: CoffeeShopService) {}
    @Query()
    getProductList() {
        return this.coffeeshopService.getProductsList();
    }
    @Query()
    getDiscountList() {
        return this.coffeeshopService.getDiscountList();
    }
}