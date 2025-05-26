import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function GetParentResourceName() {
    return (window as unknown as { GetParentResourceName: () => string }).GetParentResourceName();
}

export function formatString(str: string) {
    // Split on spaces and underscores
    const words = str.split(/[\s_]+/);
    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the words back together with spaces
    const formattedString = capitalizedWords.join(' ');
    // Return the formatted string
    return formattedString;
}

export function formatSecondsToMMSS(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
