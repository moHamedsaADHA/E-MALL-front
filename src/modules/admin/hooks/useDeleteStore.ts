"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/hooks/useApiMutation";
import { adminStoreApi, adminStoreKeys, type DeleteStoreResponse } from "@/modules/admin";
const useDeleteStore = () => { const queryClient = useQueryClient(); return useApiMutation<string, DeleteStoreResponse>({ mutationFn: adminStoreApi.deleteStore, options: { onSuccess: () => queryClient.invalidateQueries({ queryKey: adminStoreKeys.all }) } }); };
export default useDeleteStore;
