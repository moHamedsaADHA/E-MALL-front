import { api } from "@/services/api/requests";
import type { ListStoresParams, ListStoresResponse } from "@/modules/stores";

const storeApi = {
  listStores(params?: ListStoresParams) { return api.get<ListStoresResponse>("/store", { params }); },
};
export default storeApi;
