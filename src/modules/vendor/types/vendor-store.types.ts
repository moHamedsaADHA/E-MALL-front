import type { Store } from "@/modules/stores";

export interface CreateStorePayload { name: string; email: string; logo?: string; openingTime: string; closingTime: string; categoryId?: string; categoryName?: string; authorizedBrand?: string; }
export interface CreateStoreResponse { status: "success"; message: string; data: { store: Store; }; }
