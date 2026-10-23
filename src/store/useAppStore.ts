import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AppState, User } from '@/types';

interface ExtendedAppState extends AppState {
  isOnboarded: boolean;
  setOnboarded: (val: boolean) => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useAppStore = create<ExtendedAppState>()(
  persist(
    (set) => ({
      currentUser: null,
      isLoading: false,
      isOnboarded: false,

      setCurrentUser: (user) => set({ currentUser: user }),
      setLoading: (loading) => set({ isLoading: loading }),
      setOnboarded: (val) => set({ isOnboarded: val }),

      updateUser: (updates) =>
        set((state) => ({
          currentUser: state.currentUser
            ? { ...state.currentUser, ...updates }
            : null,
        })),
    }),
    {
      name: 'zaban-yar-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
