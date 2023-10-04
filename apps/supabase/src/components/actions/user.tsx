"use client";

import { Button } from "@turbopandarepo/ui";

export interface IUser {
	name: string;
}

export interface UserActionsProps {
	user?: IUser | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onCreateAccount = () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onLogin = () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onLogout = () => {};

export const UserActions = ({ user }: UserActionsProps) => {
	return (
		<>
			{user ? (
				<>
					<span className="welcome">
						Welcome, <b>{user.name}</b>!
					</span>
					<Button label="Log out" name="logout" onClick={onLogout} size="sm" />
				</>
			) : (
				<>
					<Button label="Log in" name="login" onClick={onLogin} size="sm" />
					<Button
						label="Sign up"
						name="signup"
						onClick={onCreateAccount}
						size="sm"
						variant="solid"
					/>
				</>
			)}
		</>
	);
};
