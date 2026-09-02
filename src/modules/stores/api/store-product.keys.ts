import type { ListStoreProductsParams } from "@/modules/stores";

const storeProductKeys = {
  all: ["stores", "products"] as const,
  list: (storeId: string, params?: ListStoreProductsParams) =>
    [...storeProductKeys.all, storeId, params ?? {}] as const,
  detail: (storeId: string, productId: string) =>
    [...storeProductKeys.all, storeId, "detail", productId] as const,
};

export default storeProductKeys;
