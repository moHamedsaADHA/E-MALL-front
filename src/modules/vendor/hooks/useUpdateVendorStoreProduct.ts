"use client";

import { useQueryClient } from "@tanstack/react-query";

import { useApiMutation } from "@/hooks/useApiMutation";

import {
  vendorProductApi,
  vendorProductKeys,
  type UpdateVendorStoreProductPayload,
  type UpdateVendorStoreProductResponse,
} from "@/modules/vendor";

interface UpdateVendorStoreProductVariables {
  storeId: string;
  productId: string;
  payload: UpdateVendorStoreProductPayload;
}

const useUpdateVendorStoreProduct = () => {
  const queryClient = useQueryClient();

  return useApiMutation<
    UpdateVendorStoreProductVariables,
    UpdateVendorStoreProductResponse
  >({
    mutationFn: ({ storeId, productId, payload }) =>
      vendorProductApi.updateMyStoreProduct(storeId, productId, payload),
    options: {
      onSuccess: (response, { storeId, productId }) => {
        queryClient.setQueryData(
          vendorProductKeys.detail(storeId, productId),
          response,
        );
        queryClient.invalidateQueries({
          queryKey: vendorProductKeys.list(storeId),
        });
      },
    },
  });
};

export default useUpdateVendorStoreProduct;
