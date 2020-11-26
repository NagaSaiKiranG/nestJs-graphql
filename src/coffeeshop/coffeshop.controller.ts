import { Body, Controller, Get, Post } from "@nestjs/common";
import { CoffeeShopService } from './coffeshop.service';

@Controller('coffeeshop')
export class CoffeeShopController {
    constructor(public readonly coffeeshopService: CoffeeShopService) {}

    @Get('products')
    getProducts() {
        return this.coffeeshopService.getProductsList;
    }
    @Get('discounts')
    getDiscounts() {
        return this.coffeeshopService.getDiscountList;
    }
    @Post('orderSummary')
    getOrderPrice(@Body() data) {
        return this.coffeeshopService.calculateOrderPrice(data);
    }
}