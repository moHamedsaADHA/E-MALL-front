"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/hooks/useApiMutation";
import { storeKeys } from "@/modules/stores";
import { vendorStoreApi, type CreateStorePayload, type CreateStoreResponse } from "@/modules/vendor";
const useCreateStore = () => { const queryClient = useQueryClient(); return useApiMutation<CreateStorePayload, CreateStoreResponse>({ mutationFn: vendorStoreApi.createStore, options: { onSuccess: () => queryClient.invalidateQueries({ queryKey: storeKeys.all }) } }); };
export default useCreateStore;
