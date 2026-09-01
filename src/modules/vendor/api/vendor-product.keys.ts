import type { ListVendorStoreProductsParams } from "@/modules/vendor";

const vendorProductKeys = {
  all: ["vendor", "store-products"] as const,
  list: (storeId: string, params?: ListVendorStoreProductsParams) =>
    [...vendorProductKeys.all, storeId, params ?? {}] as const,
};

export default vendorProductKeys;
