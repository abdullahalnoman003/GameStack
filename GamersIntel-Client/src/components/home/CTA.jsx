import { Link } from "react-router-dom";
import { FaGamepad, FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const CTA = () => {
  const { user } = useContext(AuthContext);
  const benefits = [
    "Track unlimited games",
    "Rate & review",
    "Progress tracking",
    "Personal dashboard",
    "Custom collections",
    "100% Free forever",
  ];

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-base-200/90 to-base-100/90 border border-primary/50 rounded-2xl p-12 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
          {/* Headline */}
          <h2 className="poetsen-one-regular text-4xl md:text-6xl text-base-content text-center mb-4">
            READY TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              LEVEL UP?
            </span>
          </h2>

          <p className="galdeano-regular text-xl text-base-content/70 text-center mb-8 max-w-2xl mx-auto">
            Join thousands of gamers tracking their gaming journey with
            GamersIntel
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-base-content/70 bg-primary/10 border border-primary/20 rounded-lg p-3 hover:bg-primary/20 hover:scale-105 hover:border-primary/40 transition-all duration-300"
              >
                <FaCheckCircle className="text-success flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Link
                to="/registration"
                className="px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50 text-base-content font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3"
              >
                <FaGamepad className="text-xl" />
               Go To Your Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/registration"
                  className="px-10 py-4 bg-gradient-to-r from-primary to-accent hover:scale-105 hover:shadow-xl hover:shadow-primary/50 text-primary-content font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 rounded-lg"
                >
                  <FaGamepad className="text-xl" />
                  Start Free Now
                </Link>
                <Link
                  to="/login"
                  className="px-10 py-4 bg-transparent border-2 border-primary rounded-lg hover:bg-primary/20 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 text-primary hover:text-base-content font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base-content/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Setup in Under 2 Minutes
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              5,000+ Happy Gamers
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-base-200/50 border border-primary/30 rounded-xl p-6 max-w-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <div className="flex items-center justify-center gap-1 text-warning mb-3">
              {[...Array(5)].map((_, i) => (
                <FaCheckCircle key={i} className="text-xl" />
              ))}
            </div>
            <p className="text-base-content/70 italic mb-2">
              "GamersIntel has completely changed how I manage my gaming
              backlog. I'll never forget a game again!"
            </p>
            <p className="text-primary font-semibold">- Alex M., Gamer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
