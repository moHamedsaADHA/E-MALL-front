"use client";

import { useApiQuery } from "@/hooks/useApiQuery";

import {
  storeProductApi,
  storeProductKeys,
  type GetStoreProductResponse,
} from "@/modules/stores";

const useGetStoreProduct = (storeId: string, productId: string) =>
  useApiQuery<GetStoreProductResponse>({
    queryKey: storeProductKeys.detail(storeId, productId),
    queryFn: () => storeProductApi.getStoreProductById(storeId, productId),
    options: {
      enabled: Boolean(storeId && productId),
      staleTime: 60 * 1000,
    },
  });

export default useGetStoreProduct;
