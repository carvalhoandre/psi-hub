import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-default-secret-key';

type UserSession = {
	id: string;
	email: string;
	name: string;
};

export const getSession = async (): Promise<{ user: UserSession | null }> => {
	try {
		const cookieStore = await cookies();
		const authToken = cookieStore.get('authToken')?.value;

		if (!authToken) {
			return { user: null };
		}

		const decodedToken = jwt.verify(authToken, SECRET_KEY) as UserSession;

		return { user: decodedToken };
	} catch (error) {
		console.error('Error validating session:', error);
		return { user: null };
	}
};
