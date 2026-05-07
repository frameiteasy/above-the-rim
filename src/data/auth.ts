import type { AuthUser, Credentials } from '../types';

interface Account {
  credentials: Credentials;
  user: AuthUser;
}

const ACCOUNTS: Account[] = [
  {
    credentials: { username: 'coach', password: 'coach123' },
    user: { id: 'u0', name: 'Coach Williams', role: 'coach' },
  },
  {
    credentials: { username: 'marcus', password: 'player123' },
    user: { id: 'u1', name: 'Marcus Rivera', role: 'player', playerId: 'p1' },
  },
  {
    credentials: { username: 'jaylen', password: 'player123' },
    user: { id: 'u2', name: 'Jaylen Okafor', role: 'player', playerId: 'p2' },
  },
  {
    credentials: { username: 'tyler', password: 'player123' },
    user: { id: 'u3', name: 'Tyler Brooks', role: 'player', playerId: 'p3' },
  },
];

export function findAccount(credentials: Credentials): AuthUser | null {
  const match = ACCOUNTS.find(
    (a) =>
      a.credentials.username === credentials.username &&
      a.credentials.password === credentials.password
  );
  return match?.user ?? null;
}
