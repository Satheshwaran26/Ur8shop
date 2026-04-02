import { useState } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="section-padding py-12 sm:py-20 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="font-heading text-2xl sm:text-3xl text-center mb-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            {isSignup ? "Join Ur8shop for exclusive access" : "Sign in to your account"}
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignup && (
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-1.5">Full Name</label>
                <input type="text" className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="John Doe" />
              </div>
            )}
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-1.5">Email</label>
              <input type="email" className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-1.5">Password</label>
              <input type="password" className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="••••••••" />
            </div>
            {!isSignup && (
              <div className="text-right">
                <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Forgot password?</button>
              </div>
            )}
            <button type="submit" className="w-full bg-foreground text-background py-3 rounded text-sm font-medium tracking-wider uppercase hover:bg-foreground/90 transition-colors">
              {isSignup ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="bg-background px-4 text-xs text-muted-foreground">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="border border-border rounded py-2.5 text-sm font-medium hover:bg-secondary transition-colors">Google</button>
            <button className="border border-border rounded py-2.5 text-sm font-medium hover:bg-secondary transition-colors">Apple</button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignup(!isSignup)} className="text-foreground font-medium hover:underline">
              {isSignup ? "Sign In" : "Create one"}
            </button>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
