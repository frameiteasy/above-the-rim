import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { User, Lock } from 'lucide-react';

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    const ok = login({ username: username.trim(), password });
    if (ok) {
      navigate('/');
    } else {
      setError('Invalid username or password.');
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Above the<span className="text-brand-500"> Rim</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Basketball Training Camp</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Sign in to your account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="username"
              label="Username"
              placeholder="Enter your username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              icon={<User size={15} />}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock size={15} />}
              error={error}
            />
            <Button type="submit" className="w-full mt-2">
              Sign in
            </Button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium mb-2">Demo accounts</p>
            <div className="space-y-1 text-xs text-slate-500">
              <div className="flex justify-between"><span>coach</span><span className="text-slate-400">coach123</span></div>
              <div className="flex justify-between"><span>marcus</span><span className="text-slate-400">player123</span></div>
              <div className="flex justify-between"><span>jaylen</span><span className="text-slate-400">player123</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
