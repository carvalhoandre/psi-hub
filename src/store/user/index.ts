import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { UserStore } from './types';

export const useUserStore = create<UserStore>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
			clearUser: () => set({ user: null }),
		}),
		{
			name: 'user-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
