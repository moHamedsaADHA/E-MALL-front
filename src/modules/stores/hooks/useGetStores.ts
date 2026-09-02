"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { storeApi, storeKeys, type ListStoresParams, type ListStoresResponse } from "@/modules/stores";
const useGetStores = (params?: ListStoresParams) => useApiQuery<ListStoresResponse>({ queryKey: storeKeys.list(params), queryFn: () => storeApi.listStores(params) });
export default useGetStores;
