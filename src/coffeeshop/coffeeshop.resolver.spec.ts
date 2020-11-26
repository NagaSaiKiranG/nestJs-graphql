import {CoffeeShopResolver} from './coffeshop.resolver';
import {CoffeeShopService} from './coffeshop.service';
import {list, cartData} from './mock_productList';
import {discountObj} from './discountListMock';

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

    const finalResponse = {
        finalPrice: 151,
        discountAmount: 8.35,
        totalTax: 7.13,
        totalPaymentRequired: 149.78
    }
    
    describe("test order summary calculation", () => {
        it("order summary", async () => {
            const service = new CoffeeShopService();
            service.calculateOrderPrice = jest.fn().mockReturnValue(finalResponse);
            const resolver = new CoffeeShopResolver(service);
            const response = await resolver.calculateOrderPrice(cartData);
            expect(service.calculateOrderPrice).toHaveBeenCalled();
            expect(response).toEqual(finalResponse);
        })
    })
})