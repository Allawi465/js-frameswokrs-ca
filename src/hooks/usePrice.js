function usePrice(price, discountedPrice) {
    const itemDiscount = discountedPrice !== undefined && discountedPrice < price;
    const priceToDisplay = itemDiscount ? discountedPrice : price;
    const originalPrice = itemDiscount ? price : null;

    return { priceToDisplay, originalPrice };
}

export default usePrice;