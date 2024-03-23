import { User, UserDocument, UsersDocument } from '@/app/src/dto';
import apolloClient from '@/app/src/apollo';
import { AppStore } from '@/app/src/store/Zustand';
import { StateCreator } from 'zustand';
import { getUserData, getUsersData } from '@/packages/utils/funcs';

type Token = {
  accessToken: string | null;
  refreshToken: string | null;
};

export interface UserSlice {
  user: User | null;
  users: User[];
  isLoggedIn: boolean;
  tokens: Token;
  currentUserRoute: string;
  setToken({ accessToken, refreshToken }: Token): void;
  getToken(): Token;
  setUser(user?: User): void;
  getUser(): Promise<User | null>;
  setUsers(users?: User[]): void;
  getUsers(): Promise<User[]>;
  setIsLoggedIn(): void;
  setCurrentUserRoute(route: string): void;
  getCurrentUserRoute(): string;
  logUserOut(): void;
}

export const userStoreSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
  get
): UserSlice => ({
  user: null,
  users: [],
  isLoggedIn: false,
  currentUserRoute: '',
  tokens: {
    accessToken: null,
    refreshToken: null,
  },

  setToken({ accessToken, refreshToken }): void {
    set({ tokens: { accessToken, refreshToken } });
  },

  getToken(): Token {
    return get().tokens;
  },

  async getUser(): Promise<User | null> {
    this.setUser(<User>await getUserData());
    return get().user;
  },

  async setUser(user): Promise<void> {
    if (user) {
      set({ user });
      return;
    }

    set({ user: await getUserData() });
  },

  async getUsers(): Promise<User[]> {
    this.setUsers(await getUsersData());
    return get().users;
  },

  async setUsers(users): Promise<void> {
    if (users) {
      set({ users });
      return;
    }

    set({ users: await getUsersData() });
  },

  async setIsLoggedIn(): Promise<void> {
    if (get().tokens !== null) set({ isLoggedIn: true });
  },

  setCurrentUserRoute(route): void {
    set({ currentUserRoute: route });
  },

  getCurrentUserRoute(): string {
    return get().currentUserRoute;
  },

  logUserOut(): void {
    set({ user: null });
    set({ isLoggedIn: false });
    set({
      tokens: {
        accessToken: null,
        refreshToken: null,
      },
    });
  },
});
