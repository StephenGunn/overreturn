const users = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john.doe@example.com'
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane.smith@example.com'
	},
	{
		id: 3,
		name: 'Sam Johnson',
		email: 'sam.johnson@example.com'
	},
	{
		id: 4,
		name: 'Emily Brown',
		email: 'emily.brown@example.com'
	},
	{
		id: 5,
		name: 'Michael Davis',
		email: 'michael.davis@example.com'
	},
	{
		id: 6,
		name: 'Sarah Wilson',
		email: 'sarah.wilson@example.com'
	},
	{
		id: 7,
		name: 'David Taylor',
		email: 'david.taylor@example.com'
	},
	{
		id: 8,
		name: 'Laura Martinez',
		email: 'laura.martinez@example.com'
	},
	{
		id: 9,
		name: 'James Anderson',
		email: 'james.anderson@example.com'
	},
	{
		id: 10,
		name: 'Linda Thomas',
		email: 'linda.thomas@example.com'
	}
] as const;

// defined as a function to simulate a DB call
export const getUsers = () => users;
