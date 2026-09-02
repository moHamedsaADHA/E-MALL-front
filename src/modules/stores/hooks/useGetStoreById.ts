"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { storeApi, storeKeys, type GetStoreByIdResponse } from "@/modules/stores";
const useGetStoreById = (storeId: string) => useApiQuery<GetStoreByIdResponse>({ queryKey: storeKeys.detail(storeId), queryFn: () => storeApi.getStoreById(storeId), options: { enabled: Boolean(storeId), staleTime: 5 * 60 * 1000 } });
export default useGetStoreById;
