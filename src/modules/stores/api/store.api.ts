import { api } from "@/services/api/requests";
import type { GetStoreByIdResponse, ListStoresParams, ListStoresResponse } from "@/modules/stores";

const storeApi = {
  listStores(params?: ListStoresParams) { return api.get<ListStoresResponse>("/store", { params }); },
  listStoresByCategory(categoryId: string, params?: ListStoresParams) { return api.get<ListStoresResponse>(`/store/category/${categoryId}`, { params }); },
  getStoreById(storeId: string) { return api.get<GetStoreByIdResponse>(`/store/${storeId}`); },
};
export default storeApi;
