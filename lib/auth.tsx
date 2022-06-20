import {Session, User} from "@supabase/gotrue-js/src/lib/types";
import {SupabaseClient} from "@supabase/supabase-js";
import {createContext, useContext, useEffect, useState} from "react";

type AuthType = {
  session: Session | null;
  user: User | null;
  signOut: () => void;
};

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvider = ({
  supabase,
  children,
}: {
  supabase: SupabaseClient;
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const activeSession = supabase.auth.session();
    setSession(activeSession);
    setUser(activeSession?.user ?? null);

    const {data: authListener} = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signOut: () => supabase.auth.signOut(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
