"use client";

import { useApiQuery } from "@/hooks/useApiQuery";

import {
  vendorProductApi,
  vendorProductKeys,
  type ListVendorStoreProductsParams,
  type ListVendorStoreProductsResponse,
} from "@/modules/vendor";

const useGetVendorStoreProducts = (
  storeId: string,
  params?: ListVendorStoreProductsParams,
) =>
  useApiQuery<ListVendorStoreProductsResponse>({
    queryKey: vendorProductKeys.list(storeId, params),
    queryFn: () => vendorProductApi.listMyStoreProducts(storeId, params),
    options: {
      enabled: Boolean(storeId),
    },
  });

export default useGetVendorStoreProducts;
