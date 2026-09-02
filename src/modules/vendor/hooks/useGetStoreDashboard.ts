"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { vendorStoreApi, vendorStoreKeys, type StoreDashboardResponse } from "@/modules/vendor";
const useGetStoreDashboard = (storeId: string) => useApiQuery<StoreDashboardResponse>({ queryKey: vendorStoreKeys.dashboard(storeId), queryFn: () => vendorStoreApi.getStoreDashboard(storeId), options: { enabled: Boolean(storeId) } });
export default useGetStoreDashboard;
