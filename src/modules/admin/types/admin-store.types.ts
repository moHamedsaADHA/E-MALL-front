import type { Store } from "@/modules/stores";
export interface AdminStoreListParams { active?: boolean; }
export interface AdminStoreListResponse { status: "success"; data: { stores: Store[]; total: number; }; }
