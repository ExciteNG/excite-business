import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { statesAndLgas } from "@/constants/statesAndLgas";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const getNigeriaStates = () => {
	return Object.keys(statesAndLgas);
};

export const getNigeriaStatesLgas = (state: string) => {
	return statesAndLgas[state] || [];
};
