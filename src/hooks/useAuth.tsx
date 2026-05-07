import { createContext, useContext, useState, type ReactNode } from 'react';
import { authService } from '../services/authService';
import type { AuthUser, Credentials } from '../types';

interface AuthContext {
  user: AuthUser | null;
  login: (credentials: Credentials) => boolean;
  logout: () => void;
}

const Ctx = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => authService.currentUser());

  function login(credentials: Credentials): boolean {
    const result = authService.login(credentials);
    setUser(result);
    return result !== null;
  }

  function logout() {
    authService.logout();
    setUser(null);
  }

  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
