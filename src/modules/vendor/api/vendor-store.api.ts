import { api } from "@/services/api/requests";
import type { CreateStorePayload, CreateStoreResponse } from "@/modules/vendor";
const vendorStoreApi = { createStore(payload: CreateStorePayload) { return api.post<CreateStoreResponse, CreateStorePayload>("/store", payload); } };
export default vendorStoreApi;
