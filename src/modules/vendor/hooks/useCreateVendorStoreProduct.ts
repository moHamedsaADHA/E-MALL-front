"use client";

import { useQueryClient } from "@tanstack/react-query";

import { useApiMutation } from "@/hooks/useApiMutation";

import {
  vendorProductApi,
  vendorProductKeys,
  type CreateVendorStoreProductPayload,
  type CreateVendorStoreProductResponse,
} from "@/modules/vendor";

interface CreateVendorStoreProductVariables {
  storeId: string;
  payload: CreateVendorStoreProductPayload;
}

const useCreateVendorStoreProduct = () => {
  const queryClient = useQueryClient();

  return useApiMutation<
    CreateVendorStoreProductVariables,
    CreateVendorStoreProductResponse
  >({
    mutationFn: ({ storeId, payload }) =>
      vendorProductApi.createStoreProduct(storeId, payload),
    options: {
      onSuccess: (_, { storeId }) => {
        queryClient.invalidateQueries({
          queryKey: vendorProductKeys.list(storeId),
        });
      },
    },
  });
};

export default useCreateVendorStoreProduct;
