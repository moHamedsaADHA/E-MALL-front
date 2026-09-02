"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { storeApi, storeKeys, type ListStoresParams, type ListStoresResponse } from "@/modules/stores";
const useGetStoresByCategory = (categoryId: string, params?: ListStoresParams) => useApiQuery<ListStoresResponse>({ queryKey: storeKeys.byCategory(categoryId, params), queryFn: () => storeApi.listStoresByCategory(categoryId, params), options: { enabled: Boolean(categoryId) } });
export default useGetStoresByCategory;
