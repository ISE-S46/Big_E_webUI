function sortItems(items, method) {
    const sorted = [...items];

    switch (method) {
        case "price-asc":
            sorted.sort((minPrice, maxPrice) => minPrice.price - maxPrice.price);
            break;
        case "price-desc":
            sorted.sort((minPrice, maxPrice) => maxPrice.price - minPrice.price);
            break;
        case "newest":
            sorted.sort((newest, oldest) => new Date(oldest.DATE) - new Date(newest.DATE));
            break;
        case "oldest":
            sorted.sort((newest, oldest) => new Date(newest.DATE) - new Date(oldest.DATE));
            break;
        case "default":
            break;
    }

    return sorted;

}

export { sortItems };