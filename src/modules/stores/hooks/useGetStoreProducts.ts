"use client";

import { useApiQuery } from "@/hooks/useApiQuery";

import {
  storeProductApi,
  storeProductKeys,
  type ListStoreProductsParams,
  type ListStoreProductsResponse,
} from "@/modules/stores";

const useGetStoreProducts = (
  storeId: string,
  params?: ListStoreProductsParams,
) =>
  useApiQuery<ListStoreProductsResponse>({
    queryKey: storeProductKeys.list(storeId, params),
    queryFn: () => storeProductApi.listStoreProducts(storeId, params),
    options: {
      enabled: Boolean(storeId),
      staleTime: 60 * 1000,
    },
  });

export default useGetStoreProducts;
