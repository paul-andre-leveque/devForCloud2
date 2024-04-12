import { createContext, useContext, useState } from 'react';


export const AuthContext = createContext<any>(null); // Utilisez un type plus spécifique que 'any' si possible


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null); // Utilisez un type plus spécifique que 'any' si possible


  const login = (userData: any, token: string) => {
    setUser({ userData, token });
  };


  const logout = () => {
    setUser(null);
  };

  // Rendre le contexte et les fonctions de connexion/déconnexion disponibles pour les composants enfants
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte d'authentification dans les composants
export function useAuth() {
  return useContext(AuthContext);
}
