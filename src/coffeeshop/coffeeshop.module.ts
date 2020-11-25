import { Module } from "@nestjs/common";
import { CoffeeShopService } from './coffeshop.service';
import { CoffeeShopController } from './coffeshop.controller';
import { CoffeeShopResolver } from './coffeshop.resolver';

@Module({
    controllers: [CoffeeShopController],
    providers: [CoffeeShopService, CoffeeShopResolver],
    exports: [CoffeeShopResolver]
})
export class CoffeeShopModule {}