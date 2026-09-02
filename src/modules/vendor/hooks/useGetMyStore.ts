"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { vendorStoreApi, vendorStoreKeys, type GetMyStoreResponse } from "@/modules/vendor";
const useGetMyStore = () => useApiQuery<GetMyStoreResponse>({ queryKey: vendorStoreKeys.myStore, queryFn: vendorStoreApi.getMyStore });
export default useGetMyStore;
