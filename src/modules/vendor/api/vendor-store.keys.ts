const vendorStoreKeys = { all: ["vendor", "store"] as const, myStore: ["vendor", "store", "my-store"] as const, dashboard: (storeId: string) => ["vendor", "store", storeId, "dashboard"] as const, orders: (storeId: string) => ["vendor", "store", storeId, "orders"] as const };
export default vendorStoreKeys;
