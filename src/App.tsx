import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { DrillLibrary } from './pages/DrillLibrary';
import { DrillDetail } from './pages/DrillDetail';
import { TrainingPlans } from './pages/TrainingPlans';
import { PlanDetail } from './pages/PlanDetail';
import { Players } from './pages/Players';
import { PlayerDetail } from './pages/PlayerDetail';
import type { ReactNode } from 'react';

function Guard({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Layout>{children}</Layout>;
}

function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/" element={<Guard><Dashboard /></Guard>} />
      <Route path="/drills" element={<Guard><DrillLibrary /></Guard>} />
      <Route path="/drills/:id" element={<Guard><DrillDetail /></Guard>} />
      <Route path="/plans" element={<Guard><TrainingPlans /></Guard>} />
      <Route path="/plans/:id" element={<Guard><PlanDetail /></Guard>} />
      <Route path="/players" element={<Guard><Players /></Guard>} />
      <Route path="/players/:id" element={<Guard><PlayerDetail /></Guard>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
