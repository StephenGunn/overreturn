import type { PageServerLoad } from './$types';
import { getUsers } from '$lib/users';

export const load: PageServerLoad = async () => {
	// return our users from our fake DB
	return {
		users: getUsers()
	};
};
