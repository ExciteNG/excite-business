import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { statesAndLgas } from "@/constants/statesAndLgas";
import { setCookie } from "cookies-next";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const getNigeriaStates = () => {
	return Object.keys(statesAndLgas);
};

export const getNigeriaStatesLgas = (state: string) => {
	return statesAndLgas[state] || [];
};

export function setAuthCookie(
	token: string | undefined,
	userType: string | undefined
): void {
	setCookie("eb_tkn", token, {
		expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
	});
	setCookie("eb_usr", userType, {
		expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
	});
}
