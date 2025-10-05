import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { UserProvider, useUser } from './contexts/UserContext.tsx';
import { AppProvider } from './contexts/AppContext.tsx';

import MainLayout from './layouts/MainLayout.tsx';
import LoginPage from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import ChatPage from './pages/ChatPage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import ProgressPage from './pages/ProgressPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import PaymentPage from './pages/PaymentPage.tsx';
import GamesPage from './pages/GamesPage.tsx';
import GamePage from './pages/GamePage.tsx';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AppContent: React.FC = () => {
  const { user } = useUser();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="games" element={<GamesPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="upgrade" element={<PaymentPage />} />
      </Route>
      <Route
        path="/chat/:subject"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/quiz/:subject"
        element={
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/game/:gameType"
        element={
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </AppProvider>
    </Router>
  );
};

export default App;