import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx + tailwind-merge.
 * Handles conditional classes and resolves Tailwind utility conflicts.
 * @param classes - Class values (strings, objects, arrays, falsy values)
 * @returns Merged class string with proper Tailwind precedence
 */
export const cn = (...classes: ClassValue[]): string => twMerge(clsx(classes));
