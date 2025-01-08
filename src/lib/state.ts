import { writable, type Writable } from "svelte/store";

export const drawerOpenStore = writable(false);
export const testFormState: Writable<string[]> = writable([]);
