export interface Store {
  _id: string;
  name: string;
  logo: string;
  category: unknown | null;
  owner: unknown | null;
  authorizedBrand: string;
  isActive: boolean;
  openingTime: string;
  closingTime: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ListStoresParams { active?: boolean; }
export interface ListStoresResponse { status: "success"; data: { stores: Store[]; total: number; }; }
export interface GetStoreByIdResponse { status: "success"; data: { store: Store; }; }
