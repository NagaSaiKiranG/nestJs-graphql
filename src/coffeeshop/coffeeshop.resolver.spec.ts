import { CoffeeShopController } from './coffeshop.controller';
import {CoffeeShopResolver} from './coffeshop.resolver';
import {CoffeeShopService} from './coffeshop.service';
import {list} from './mock_productList';
import {discountObj} from './discountListMock';
import { CoffeeShopModule } from './coffeeshop.module';
describe("test coffeeshop resolver", () => {
    describe("test get products", () => {
        it("get call for products", async () => {
            const service = new CoffeeShopService();
            service.getProductsList = jest.fn().mockReturnValue(list);
            const resolver = new CoffeeShopResolver(service);
            const response = await resolver.getProductList();
            expect(service.getProductsList).toHaveBeenCalled();
        })
    })
    describe("test get discounts", () => {
        it("get call for discounts", async () => {
            const service = new CoffeeShopService();
            service.getDiscountList = jest.fn().mockReturnValue(discountObj);
            const resolver = new CoffeeShopResolver(service);
            const response = await resolver.getDiscountList();
            expect(service.getDiscountList).toHaveBeenCalled();
            expect(response).toEqual(discountObj);
        })
    })
})