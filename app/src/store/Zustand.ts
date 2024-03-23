import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { UserSlice, userStoreSlice } from '@/app/src/store/slices/userSlice';
import { PostSlice, postStoreSlice } from '@/app/src/store/slices/postSlice';

export type AppStore = UserSlice & PostSlice;

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      ...userStoreSlice(...a),
      ...postStoreSlice(...a),
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const getStoreState = (state: AppStore) => state;
