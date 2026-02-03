import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  const authInfo = {
    user,
    loading,
    logout,
  };

  if (loading) {
    return (
      <div className="relative h-screen w-full flex items-center justify-center bg-base-100 overflow-hidden">
        {/* Animated Background linear */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-linear(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-linear(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Main Content */}
        <div className="relative z-10 text-center space-y-8">
          {/* Logo with Glow Effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img 
              src="./images/logo.png" 
              alt="GamersIntel Logo" 
              className="relative w-32 h-32 md:w-40 md:h-40 animate-pulse drop-shadow-2xl"
            />
          </div>

          {/* Brand Name */}
          <div className="space-y-2">
            <h1 className="bitcount-single text-4xl md:text-5xl font-bold">
              <span className="text-primary">
                Gamers 
              </span>
              <span className="text-secondary">Intel</span>
            </h1>
            <p className="creepster-regular text-primary/70 text-sm tracking-widest">
              LOADING YOUR EXPERIENCE
            </p>
          </div>

          {/* Animated Loading Bar */}
          <div className="w-64 md:w-80 mx-auto space-y-3">
            <div className="h-2 bg-base-300/50 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20">
              <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" 
                   style={{ 
                     width: '100%',
                     animation: 'loading 1.5s ease-in-out infinite'
                   }}>
              </div>
            </div>
          </div>
        </div>
        {/* CSS Animation */}
        <style>{`
          @keyframes loading {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
