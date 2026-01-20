import { Link } from 'react-router-dom';
import { FaGamepad, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const CTA = () => {
    const benefits = [
        "✓ Track unlimited games",
        "✓ Rate & review",
        "✓ Progress tracking",
        "✓ Personal dashboard",
        "✓ Custom collections",
        "✓ 100% Free forever"
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FaGamepad className="absolute top-20 left-10 text-purple-500/10 text-8xl animate-bounce" style={{animationDuration: '3s'}} />
                <FaGamepad className="absolute bottom-20 right-20 text-purple-500/10 text-8xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main CTA Card */}
                <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-purple-500/50 rounded-3xl p-12 shadow-2xl">
                        {/* Badge */}
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full">
                                <HiLightningBolt className="text-yellow-400 animate-pulse" />
                                <span className="text-purple-300 font-semibold text-sm">LIMITED TIME OFFER</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4">
                            Ready to
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"> Level Up</span>?
                        </h2>
                        
                        <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                            Join thousands of gamers who are already tracking their gaming journey with GamersIntel.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-2 text-gray-300 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 transition-colors"
                                >
                                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                                    <span className="text-sm font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link 
                                to="/registration" 
                                className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white font-bold uppercase tracking-wider px-10 transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/50 group"
                            >
                                <FaRocket className="text-xl group-hover:translate-x-1 transition-transform" />
                                Start Free Now
                            </Link>
                            <Link 
                                to="/login" 
                                className="btn btn-lg bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-purple-300 hover:text-white font-bold uppercase tracking-wider px-10 transition-all duration-300"
                            >
                                Sign In
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>No Credit Card Required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Setup in Under 2 Minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>5,000+ Happy Gamers</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Testimonial */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-gray-900/50 border border-purple-500/30 rounded-2xl p-6 max-w-2xl">
                        <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaCheckCircle key={i} className="text-xl" />
                            ))}
                        </div>
                        <p className="text-gray-300 italic mb-2">
                            "GamersIntel has completely changed how I manage my gaming backlog. I'll never forget a game again!"
                        </p>
                        <p className="text-purple-400 font-semibold">- Alex M., Gamer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;