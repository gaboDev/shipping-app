import {warehouses} from "./warehouses.js";

export const getWarehouses = (productID) => {
    return warehouses;
};

export const calculateShippingDays = (userZipCode, warehouseZipCode) => {
    const sum = (userZipCode + warehouseZipCode) / 10000;
    return Math.floor( Math.random() * sum );
};
