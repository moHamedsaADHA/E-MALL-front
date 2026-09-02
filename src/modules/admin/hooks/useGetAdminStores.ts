"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { adminStoreApi, adminStoreKeys, type AdminStoreListParams, type AdminStoreListResponse } from "@/modules/admin";
const useGetAdminStores = (params?: AdminStoreListParams) => useApiQuery<AdminStoreListResponse>({ queryKey: adminStoreKeys.list(params), queryFn: () => adminStoreApi.listStores(params) });
export default useGetAdminStores;
