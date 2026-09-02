"use client";

import { useApiQuery } from "@/hooks/useApiQuery";

import {
  vendorProductApi,
  vendorProductKeys,
  type GetVendorStoreProductResponse,
} from "@/modules/vendor";

const useGetVendorStoreProduct = (storeId: string, productId: string) =>
  useApiQuery<GetVendorStoreProductResponse>({
    queryKey: vendorProductKeys.detail(storeId, productId),
    queryFn: () => vendorProductApi.getMyStoreProduct(storeId, productId),
    options: {
      enabled: Boolean(storeId && productId),
    },
  });

export default useGetVendorStoreProduct;
