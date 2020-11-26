import orderSummary, {isDiscountApplicable, calculatePercentage, roundToTwo} from './order-summary-utils';
import { cartData, taxCategory, discountObj, summary } from './mocks';
describe("Order summary utils class", () => {
    describe("Order summary function", () => {
        it("order summary verify property", () => {
            expect(orderSummary(cartData, discountObj, taxCategory)).toHaveProperty("discountAmount", 8.35)
        })
        it("order summary to match object", () => {
            expect(orderSummary(cartData, discountObj, taxCategory)).toMatchObject({
                "finalPrice": 151,
                "totalPaymentRequired": 149.78
            })
        })
        it("order summary expected final output", () => {
            expect(orderSummary(cartData, discountObj, taxCategory)).toEqual({
                "finalPrice": 151,
                "discountAmount": 8.35,
                "totalTax": 7.13,
                "totalPaymentRequired": 149.78
            })
        })
        
    })

    describe("isDiscountApplicable function", () => {
        it("check for discount id 1", () => {
            expect(isDiscountApplicable(discountObj[0], summary)).toBeTruthy();
        })
        it("check for discount id 4", () => {
            expect(isDiscountApplicable(discountObj[3], summary)).toBeFalsy();
        })
    })

    describe("calulate percentage function", () => {
        it("check 10 percent of 100", () => {
            expect(calculatePercentage(100,10)).toBe(10);
        })
    })

    describe("round to 2 function", () => {
        it("check round value of float 16.091", () => {
            expect(roundToTwo(16.091)).toBe(16.09)
        })
        it("check round value of float 16.089", () => {
            expect(roundToTwo(16.091)).toBe(16.09)
        })
    })
})