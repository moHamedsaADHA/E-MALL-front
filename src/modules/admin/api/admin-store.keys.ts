import type { AdminStoreListParams } from "@/modules/admin";
const adminStoreKeys = { all: ["admin", "stores"] as const, list: (params?: AdminStoreListParams) => [...adminStoreKeys.all, params ?? {}] as const };
export default adminStoreKeys;
