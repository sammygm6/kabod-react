import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

// Public Landing Page Sections
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Schedule from './components/Schedule.jsx';
import Events from './components/Events.jsx';
import About from './components/About.jsx';
import Giving from './components/Giving.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import { testSupabaseConnection } from './lib/testSupabase';

// Admin Flow Components
import Login from './components/Login.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

export default function App() {
  const [user, setUser] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    // 1. Run your initial database connection handshake test
    testSupabaseConnection();

    // 2. Check if the web link contains "?admin=true"
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdminMode(true);
    }

    // 3. Look up if an active admin session is already logged in on this computer
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // 4. Listen for login/logout actions automatically
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // -------------------------------------------------------------
  // 🔐 CONTROL PANEL: Swaps out page if URL has ?admin=true
  // -------------------------------------------------------------
  if (isAdminMode) {
    if (!user) {
      // Displays green administrative lock screen if logged out
      return <Login onLoginSuccess={(loggedInUser) => setUser(loggedInUser)} />;
    }
    // Displays simple event submission boxes if logged in
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // -------------------------------------------------------------
  // ⛪ GENERAL VIEW: What normal church visitors see
  // -------------------------------------------------------------
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Events />
        <About />
        <Giving />
        <Location />
      </main>
      <Footer />
    </>
  );
}
