
const prices = {
    1: 50,
    2: 100,
    3: 150,
}

export const getPrice = (id_services) => {
    if (prices.hasOwnProperty(id_services)) {
        return prices[id_services];
    }
    return null;
}