export function updateProductCount(state, id) {
    const existingProductIndex = state.items.findIndex(item => item.id === id);
    if (existingProductIndex >= 0) {
        state.items[existingProductIndex].count += 1;
    } else {
        state.items.push({ id: id, count: 1 });
    }
}


export function removeProductCount(state, id) {
    const existingProductIndex = state.items.findIndex(item => item.id === id);
    if (existingProductIndex >= 0) {
        const existingProduct = state.items[existingProductIndex];
        if (existingProduct.count > 1) {
            existingProduct.count -= 1;
        } else {
            state.items = state.items.filter(item => item.id !== id);
        }
    }
}

export function transformProducts(data) {
    return data.map((product) => ({
        id: product.id,
        name: product.title,
        image: product.thumbnail,
        price: product.price,
        brand: product.brand,
        oldPrice: (
            product.price /
            (1 - product.discountPercentage / 100)
        ).toFixed(2),
        discount: (
            (product.price / (1 - product.discountPercentage / 100)).toFixed(2) - product.price
        ).toFixed(2),
    }));
}
