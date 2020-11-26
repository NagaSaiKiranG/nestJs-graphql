import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
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

    @Mutation('calculateOrderPrice')
    calculateOrderPrice(@Args('data') data) {
        // console.log(data);
        return this.coffeeshopService.calculateOrderPrice(data);
    }
}