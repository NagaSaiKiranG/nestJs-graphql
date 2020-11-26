export default function orderSummary(data, discounts, taxCategory) {
    const formatedData = formatData(data)
    const {
        types,
        items,
        quantity,
        finalPrice
    } = formatedData;
    //console.log(formatedData);
    const validDiscounts = validateDiscounts(data.discountIds, formatedData, discounts);
    const {
        totalPaymentRequired,
        discountAmount,
        totalTax
    } = calculatePriceComponent(data, formatedData, taxCategory);
    console.log(`finalPrice: ${finalPrice}, discountAmount ${discountAmount}, totalTax ${totalTax},  totalPaymentRequired: ${totalPaymentRequired}`);
    return {
        finalPrice,
        discountAmount,
        totalTax,
        totalPaymentRequired
    }
}

export function formatData(data) {
    const typesSelected = [];
    const itemsSelected = [];
    let finalPrice = 0;
    const x = data.orderSummary.map((order) => {
        const type = order.type;
        let quantity = 0;
        let finalPriceAtType = 0;
        order.items.forEach((item) => {
            quantity += item.quantity;
            let price = item.quantity * item.price;
            finalPriceAtType += price;
            itemsSelected.push({
                _key: item.id,
                quantity: item.quantity,
                finalPrice: price,
                discount: 0
            })
        })
        finalPrice += finalPriceAtType;
        typesSelected.push({
            _key: type,
            quantity,
            finalPrice: finalPriceAtType,
            discount: 0
        })
    })
    return {
        types: typesSelected,
        items: itemsSelected,
        quantity: data.total,
        finalPrice,
        discount: 0
    }
}

export function validateDiscounts(discountIds, summary, discounts) {
    const discountsSelected = discounts.filter((discount) => discountIds.includes(discount.discountId));
    discountsSelected.forEach((discount) => {
        if (isDiscountApplicable(discount, summary)) {
            updateDiscountValue(discount, summary);
        }
    })
    return discountsSelected;
}
export function isDiscountApplicable(discount, summary) {
    const { discountOn, criteria, applicableLevel } = discount;
    let isApplicable = true;
    let obj;
    discountOn.forEach((str) => {
        const condition = criteria.find((c) => c.discountOn === str);
        const { value } = condition;
        const orderValue = obj ? obj[str] : summary[str];
        if (Array.isArray(orderValue)) {
            obj = orderValue.find((ord) => ord._key === value);
            if (!obj) {
                isApplicable = false;
            }
        } else {
            if (orderValue < value) {
                isApplicable = false;
            }
        }
    })
    return isApplicable;
}
export function updateDiscountValue(discount, summary) {
    const { discountOn, criteria, discountAmount, applicableLevel } = discount;
    if (applicableLevel === 'final') {
        summary.discount = discountAmount;
    } else {
        const condition = criteria.find((c) => c.discountOn === applicableLevel);
        const { value } = condition;
        const orderValue = summary[applicableLevel];
        const obj = orderValue.find((ord) => ord._key === value);
        obj.discount = discountAmount;
    }
    /* console.log('summary after apply',summary) */
}
export function calculatePercentage(value, percentage) {
    let val = (value * percentage) / 100;
    return roundToTwo(val);
}
export function calculatePriceComponent(data, summary, taxCategory) {
    let totalPaymentRequired = 0,
        discountAmount = 0,
        totalTax = 0;
    const finalDiscount = summary.discount;
    data.orderSummary.map((order) => {
        const discountAtType = summary.types.find((obj) => obj._key === order.type).discount
        order.items.forEach((item) => {
            let price = item.quantity * item.price;
            let discountAtItem = summary.items.find((obj) => obj._key === item.id).discount;
            let discount = finalDiscount + discountAtType + discountAtItem;
            let discountAmountAtItem = calculatePercentage(price, discount);
            discountAmount += discountAmountAtItem;
            price -= discountAmountAtItem;
            let taxapplicable = taxCategory[item.taxCategory];
            let taxAmount = calculatePercentage(price, taxapplicable);
            totalTax += taxAmount;
            price += taxAmount
            totalPaymentRequired += price;
        })
    })
    return {
        totalPaymentRequired,
        discountAmount,
        totalTax
    }
}
export function roundToTwo(num) {
    return +(Math.round(+(num + "e+2")) + "e-2");
}