
const prices = {
    1: 10,
    2: 80,
}

export const getPrice = (id_services) => {
    if (prices.hasOwnProperty(id_services)) {
        return prices[id_services];
    }
    return null;
}