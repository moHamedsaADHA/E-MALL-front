import type { ListStoresParams } from "@/modules/stores";
const storeKeys = { all: ["stores"] as const, list: (params?: ListStoresParams) => [...storeKeys.all, "list", params ?? {}] as const, byCategory: (categoryId: string, params?: ListStoresParams) => [...storeKeys.all, "category", categoryId, params ?? {}] as const, detail: (storeId: string) => [...storeKeys.all, "detail", storeId] as const };
export default storeKeys;
