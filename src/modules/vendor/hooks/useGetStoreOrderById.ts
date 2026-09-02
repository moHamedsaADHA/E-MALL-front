"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { vendorStoreApi, vendorStoreKeys, type GetStoreOrderResponse } from "@/modules/vendor";
const useGetStoreOrderById = (storeId: string, orderId: string) => useApiQuery<GetStoreOrderResponse>({ queryKey: vendorStoreKeys.orderDetail(storeId, orderId), queryFn: () => vendorStoreApi.getStoreOrderById(storeId, orderId), options: { enabled: Boolean(storeId && orderId) } });
export default useGetStoreOrderById;
