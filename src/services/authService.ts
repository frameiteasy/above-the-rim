import { findAccount } from '../data/auth';
import type { AuthUser, Credentials } from '../types';

const SESSION_KEY = 'atr_session';

export const authService = {
  login(credentials: Credentials): AuthUser | null {
    const user = findAccount(credentials);
    if (user) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }
    return user;
  },

  logout(): void {
    sessionStorage.removeItem(SESSION_KEY);
  },

  currentUser(): AuthUser | null {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  },

  isCoach(): boolean {
    return authService.currentUser()?.role === 'coach';
  },
};
