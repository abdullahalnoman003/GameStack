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
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back to Login Link */}
        <Link 
          to="/login" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 galdeano-regular mb-6 transition-colors duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Login
        </Link>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-purple-500/30  rounded-2xl p-8 hover:shadow-md  transition-all duration-500 shadow-secondary">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
              <FaKey className="text-white text-2xl" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="poetsen-one-regular text-3xl md:text-4xl text-white mb-3">
              RESET PASSWORD
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full opacity-70 mb-4"></div>
            <p className="galdeano-regular text-gray-400 text-sm">
              No worries! Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleReset} className="space-y-6">
            {/* Email Input */}
            <div className="group">
              <label className="galdeano-regular text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                <FaEnvelope className="text-xs group-hover:scale-110 transition-transform duration-300" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white galdeano-regular focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-purple-500/50"
                placeholder="Enter your email address"
                required
              />
              <p className="galdeano-regular text-xs text-gray-500 mt-2">
                📧 We'll send you a link to reset your password
              </p>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700  rounded-lg text-white galdeano-regular font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          <div className="mt-6 pt-6 border-t border-purple-500/20">
            <p className="galdeano-regular text-center text-gray-400 text-sm">
              Remember your password?{" "}
              <Link 
                to="/login" 
                className="text-purple-400 hover:text-pink-400 font-semibold transition-colors duration-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
          <p className="galdeano-regular text-xs text-gray-400 text-center">
            💡 <span className="text-purple-400 font-semibold">Tip:</span> Check your spam folder if you don't see the email within a few minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
