export interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	active: boolean;
}

export interface UserStore {
	user: User | null;
	setUser: (user: User) => void;
	clearUser: () => void;
}
