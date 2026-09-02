import { api } from "@/services/api/requests";
import type { CreateStorePayload, CreateStoreResponse, GetMyStoreResponse } from "@/modules/vendor";
const vendorStoreApi = { createStore(payload: CreateStorePayload) { return api.post<CreateStoreResponse, CreateStorePayload>("/store", payload); }, getMyStore() { return api.get<GetMyStoreResponse>("/store/my-store"); } };
export default vendorStoreApi;
