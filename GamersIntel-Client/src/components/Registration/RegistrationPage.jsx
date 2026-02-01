import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGamepad, FaTrophy, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../Firebase/firebase.init";
import useAxios from "../../Hooks/useAxios";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
  const axiosInstance = useAxios();
  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await res.json();

      if (data.success) {
        return data.data.display_url;
      } else {
        toast.error("Image upload failed");
        return null;
      }
    } catch (err) {
      console.error("Image upload error:", err);
      toast.error("Image upload failed. Please try again.");
      return null;
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.image.files[0];

    let photoURL = null;

    // Upload image if selected
    if (imageFile) {
      photoURL = await handleImageUpload(imageFile);
      if (!photoURL) {
        setLoading(false);
        return;
      }
    }

    // Create user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        localStorage.setItem("access-token", token);

        const profileData = {
          displayName: name,
        };
        if (photoURL) {
          profileData.photoURL = photoURL;
        }

        updateProfile(user, profileData).then(async () => {
          const userInfo = {
            name: name,
            email: email.toLowerCase(),
            photoURL: photoURL || null,
            gamerTag: null,
            bio: null,
            favoriteGenres: null,
            platforms: null,
            country: null,
            joinDate: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
          };
          await axiosInstance.post("/users", userInfo);
          form.reset();
          setLoading(false);
          toast.success(`Welcome to GamersIntel, ${name}!`);
        });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        let errorMessage = "Registration failed. Please try again.";

        if (error.code === "auth/email-already-in-use") {
          errorMessage = "Email already registered. Try logging in.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "Password is too weak. Use a stronger password.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        }
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("access-token", token);

      const userInfo = {
        name: user.displayName,
        email: user.email.toLowerCase(),
        photoURL: user.photoURL || null,
        gamerTag: null,
        bio: null,
        favoriteGenres: null,
        platforms: null,
        country: null,
        joinDate: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      await axiosInstance.post("/users", userInfo);
      setLoading(false);
      toast.success(`Welcome to GamersIntel, ${user.displayName}!`);
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Google sign-up failed");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-linear-to-b from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <span className="loading loading-bars loading-lg text-purple-500"></span>
          <p className="text-xl font-semibold text-white mt-4">
            Creating your account...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-900 flex justify-center items-center py-10 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 shadow-2xl bg-black/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 max-w-5xl w-full overflow-hidden relative z-10">
          {/* Left Side - Gaming Themed */}
          <div className="hidden md:flex bg-linear-to-b from-purple-600 to-indigo-700 relative overflow-hidden items-center justify-center p-10">
            <div className="absolute inset-0 bg-black/20"></div>

            <img
              src="/images/loginImg.jpg"
              alt="Gaming"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <FaTrophy className="text-8xl text-yellow-400 mx-auto animate-pulse" />
              <h2 className="text-4xl font-black text-white uppercase tracking-wider">
                Join GamersIntel
              </h2>
              <p className="text-base text-purple-100">
                Track, Rate & Remember Every Game
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <FaGamepad className="text-2xl text-white/80" />
                <div className="h-1 w-16 bg-white/50"></div>
                <FaTrophy className="text-2xl text-yellow-400/80" />
              </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20"></div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="p-10 bg-linear-to-b from-black to-gray-900">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-white mb-2">
                Create Account
              </h1>
              <p className="text-sm text-gray-400">
                Start your gaming journey with us
              </p>
              <div className="mt-4 h-0.5 w-20 bg-purple-500 mx-auto"></div>
            </div>

            <form onSubmit={handleRegistration} className="space-y-4">
              {/* Full Name */}
              <div className="form-control">
                <label className="label font-semibold text-gray-300 text-sm">
                  <span className="flex items-center gap-2">
                    <FaUser className="text-purple-400" />
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input bg-gray-800/80 border border-purple-500/30 focus:border-purple-500 focus:outline-none w-full text-white placeholder-gray-500 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label font-semibold text-gray-300 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input bg-gray-800/80 border border-purple-500/30 focus:border-purple-500 focus:outline-none w-full text-white placeholder-gray-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label font-semibold text-gray-300 text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input bg-gray-800/80 border border-purple-500/30 focus:border-purple-500 focus:outline-none w-full pr-10 text-white placeholder-gray-500 transition-colors"
                    placeholder="Minimum 6 characters"
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors z-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Profile Image (Optional) */}
              <div className="form-control">
                <label className="label font-semibold text-gray-300 text-sm">
                  Profile Picture (Optional)
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="file-input file-input-bordered bg-gray-800/80 border-purple-500/30 focus:border-purple-500 w-full text-white"
                />
                <label className="label">
                  <span className="label-text-alt text-gray-500 text-xs">
                    You can add this later from your profile
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="btn w-full bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider border-0 transition-colors mt-6"
              >
                Create Account
              </button>

              <div className="divider text-xs text-gray-600">OR</div>

              {/* Google Sign-up */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="btn bg-gray-800 border border-gray-700 hover:bg-gray-700 w-full flex items-center justify-center gap-2 text-white transition-colors"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-400 mt-6">
                Already have an account?
                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 ml-2 font-semibold transition-colors"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
