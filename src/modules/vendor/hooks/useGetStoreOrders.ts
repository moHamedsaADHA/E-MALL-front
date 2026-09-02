"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { vendorStoreApi, vendorStoreKeys, type ListStoreOrdersResponse } from "@/modules/vendor";
const useGetStoreOrders = (storeId: string) => useApiQuery<ListStoreOrdersResponse>({ queryKey: vendorStoreKeys.orders(storeId), queryFn: () => vendorStoreApi.listStoreOrders(storeId), options: { enabled: Boolean(storeId) } });
export default useGetStoreOrders;
