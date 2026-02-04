import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaKey } from "react-icons/fa";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { auth } from "../../Firebase/firebase.init";

const ForgotPassword = () => {
  useDocumentTitle("GamersIntel - Reset Password");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Load saved email from session storage (if user came from login page)
  useEffect(() => {
    const savedEmail = sessionStorage.getItem("ResetEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  // Send password reset email
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "If an account exists for this email, a password reset link has been sent.",
        { duration: 3000 }
      ); 
    } catch (error) {
        toast.error(error.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back to Login Link */}
        <Link 
          to="/login" 
          className="inline-flex items-center gap-2 text-primary hover:text-accent galdeano-regular mb-6 transition-colors duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Login
        </Link>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-base-200/80 to-base-200/40 border border-primary/30  rounded-2xl p-8 hover:shadow-md  transition-all duration-500 shadow-secondary">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <FaKey className="text-primary-content text-2xl" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="poetsen-one-regular text-3xl md:text-4xl text-base-content mb-3">
              RESET PASSWORD
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-70 mb-4"></div>
            <p className="galdeano-regular text-base-content/60 text-sm">
              No worries! Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleReset} className="space-y-6">
            {/* Email Input */}
            <div className="group">
              <label className="galdeano-regular text-sm font-semibold text-primary mb-2 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                <FaEnvelope className="text-xs group-hover:scale-110 transition-transform duration-300" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-base-200 border border-primary/30 rounded-lg text-base-content galdeano-regular focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/50"
                placeholder="Enter your email address"
                required
              />
              <p className="galdeano-regular text-xs text-base-content/60 mt-2">
                📧 We'll send you a link to reset your password
              </p>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/80  rounded-lg text-base-content galdeano-regular font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaEnvelope />
                  Send Reset Link
                </>
              )}
            </button>
          </form>

          {/* Additional Help */}
          <div className="mt-6 pt-6 border-t border-primary/20">
            <p className="galdeano-regular text-center text-base-content/60 text-sm">
              Remember your password?{" "}
              <Link 
                to="/login" 
                className="text-primary hover:text-accent font-semibold transition-colors duration-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300">
          <p className="galdeano-regular text-xs text-base-content/60 text-center">
            💡 <span className="text-primary font-semibold">Tip:</span> Check your spam folder if you don't see the email within a few minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
