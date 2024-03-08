import { useLocalStorage } from '@uidotdev/usehooks';
import { User } from '../types/db.types';

const USER_KEY = "user";

export const useUser = (): [user: User | undefined, setUser: (user: User | undefined) => void] => {
    const [data, setData] = useLocalStorage<User | undefined>(USER_KEY, undefined);

    const setUser = (user: User | undefined) => {
        if (user === undefined) {
            setData(undefined)
        } else {
            setData(user);
        }
    };

    return [data, setUser];
};