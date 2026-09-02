import { api } from "@/services/api/requests";

import type {
  ListVendorStoreProductsParams,
  ListVendorStoreProductsResponse,
  CreateVendorStoreProductPayload,
  CreateVendorStoreProductResponse,
  GetVendorStoreProductResponse,
  UpdateVendorStoreProductPayload,
  UpdateVendorStoreProductResponse,
  DeleteVendorStoreProductResponse,
} from "@/modules/vendor";

const vendorProductApi = {
  listMyStoreProducts(
    storeId: string,
    params?: ListVendorStoreProductsParams,
  ) {
    return api.get<ListVendorStoreProductsResponse>(
      `/store/${storeId}/manage/products`,
      { params },
    );
  },
  createStoreProduct(
    storeId: string,
    payload: CreateVendorStoreProductPayload,
  ) {
    return api.post<
      CreateVendorStoreProductResponse,
      CreateVendorStoreProductPayload
    >(`/store/${storeId}/manage/products`, payload);
  },
  getMyStoreProduct(storeId: string, productId: string) {
    return api.get<GetVendorStoreProductResponse>(
      `/store/${storeId}/manage/products/${productId}`,
    );
  },
  updateMyStoreProduct(
    storeId: string,
    productId: string,
    payload: UpdateVendorStoreProductPayload,
  ) {
    return api.patch<
      UpdateVendorStoreProductResponse,
      UpdateVendorStoreProductPayload
    >(`/store/${storeId}/manage/products/${productId}`, payload);
  },
  deleteMyStoreProduct(storeId: string, productId: string) {
    return api.delete<DeleteVendorStoreProductResponse>(
      `/store/${storeId}/manage/products/${productId}`,
    );
  },
};

export default vendorProductApi;
