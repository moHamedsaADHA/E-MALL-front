"use client";

import { useQueryClient } from "@tanstack/react-query";

import { useApiMutation } from "@/hooks/useApiMutation";
import { storeProductKeys } from "@/modules/stores";

import {
  vendorProductApi,
  vendorProductKeys,
  type DeleteVendorStoreProductResponse,
} from "@/modules/vendor";

interface DeleteVendorStoreProductVariables {
  storeId: string;
  productId: string;
}

const useDeleteVendorStoreProduct = () => {
  const queryClient = useQueryClient();

  return useApiMutation<
    DeleteVendorStoreProductVariables,
    DeleteVendorStoreProductResponse
  >({
    mutationFn: ({ storeId, productId }) =>
      vendorProductApi.deleteMyStoreProduct(storeId, productId),
    options: {
      onSuccess: (_, { storeId, productId }) => {
        queryClient.removeQueries({
          queryKey: vendorProductKeys.detail(storeId, productId),
        });
        queryClient.invalidateQueries({
          queryKey: vendorProductKeys.list(storeId),
        });
        queryClient.removeQueries({
          queryKey: storeProductKeys.detail(storeId, productId),
        });
        queryClient.invalidateQueries({
          queryKey: storeProductKeys.list(storeId),
        });
      },
    },
  });
};

export default useDeleteVendorStoreProduct;
