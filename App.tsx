import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/shared/Header';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <DataProvider>
          <HashRouter>
            <div className="min-h-screen bg-black text-white selection:bg-yellow-400/20">
              <Header />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={<HomePage />} />
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedRoute role="admin">
                        <AdminPage />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
            </div>
          </HashRouter>
        </DataProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
