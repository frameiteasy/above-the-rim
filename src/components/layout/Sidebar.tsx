import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Users,
  LogOut,
} from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../../hooks/useAuth';

const NAV = [
  { to: '/',        label: 'Dashboard',      icon: LayoutDashboard },
  { to: '/drills',  label: 'Drill Library',  icon: BookOpen },
  { to: '/plans',   label: 'Training Plans', icon: CalendarDays },
  { to: '/players', label: 'Players',        icon: Users },
];

export function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="w-60 shrink-0 bg-slate-900 flex flex-col h-screen sticky top-0">
      <div className="px-6 py-5 border-b border-slate-800">
        <span className="text-xl font-bold text-white tracking-tight">
          Above the<span className="text-brand-500"> Rim</span>
        </span>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
        {NAV.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-brand-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              )
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-slate-800">
        <div className="px-3 py-2 mb-1">
          <p className="text-xs text-slate-500">Signed in as</p>
          <p className="text-sm font-medium text-white truncate">{user?.name}</p>
          <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <LogOut size={15} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
