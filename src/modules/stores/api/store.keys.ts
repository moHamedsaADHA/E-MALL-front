import type { ListStoresParams } from "@/modules/stores";
const storeKeys = { all: ["stores"] as const, list: (params?: ListStoresParams) => [...storeKeys.all, "list", params ?? {}] as const };
export default storeKeys;
