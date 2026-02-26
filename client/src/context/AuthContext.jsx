import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore active login session from local token if available.
    if (token) {
      axios
        .get(`${API_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data }) => setUser(data.user))
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const signup = async (payload) => {
    const { data } = await axios.post(`${API_URL}/auth/signup`, payload);
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const signin = async (payload) => {
    const { data } = await axios.post(`${API_URL}/auth/signin`, payload);
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
