// import { atom } from "jotai";

// export const bookmarkAtom = atom([]);



import { atomWithStorage } from "jotai/utils";

export const bookmarkAtom = atomWithStorage("bookmarkedBlogs", []);
