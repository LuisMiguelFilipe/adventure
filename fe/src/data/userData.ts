import { users } from "@/data/data";

export const fetchUser = (id: string) => {
    const foundUser = users.find(u => u.id === id);
    return Promise.resolve(foundUser);
}