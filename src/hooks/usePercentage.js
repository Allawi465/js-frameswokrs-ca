function usePercentage(price, discountedPrice) {
    const discountPrice = price - discountedPrice;
    const discountPercentage = (discountPrice / price) * 100;
    return { discountPrice, discountPercentage };
}

export default usePercentage;