
const prices = {
    1: 20,
    2: 40,
}

export const getPrice = (id_services) => {
    if (prices.hasOwnProperty(id_services)) {
        return prices[id_services];
    }
    return null;
}