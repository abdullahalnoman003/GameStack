import { Link } from 'react-router-dom';
import { FaSearch, FaGamepad, FaTrophy, FaStar } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdTrendingUp } from 'react-icons/md';

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Floating Game Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <FaGamepad className="absolute top-20 left-10 text-purple-500/20 text-6xl animate-bounce" style={{animationDelay: '0s'}} />
                <FaTrophy className="absolute top-40 right-20 text-yellow-500/20 text-5xl animate-bounce" style={{animationDelay: '1s'}} />
                <FaStar className="absolute bottom-32 left-32 text-purple-400/20 text-4xl animate-bounce" style={{animationDelay: '2s'}} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-6 animate-pulse">
                    <HiLightningBolt className="text-yellow-400" />
                    <span className="text-purple-300 font-semibold text-sm">Your Ultimate Gaming Memory System</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                    Track Every Game.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                        Remember Every Moment.
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Your personal gaming database. Track, rate, and organize every game you've played or want to play.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">10K+</div>
                        <div className="text-sm text-gray-400">Games Available</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">5K+</div>
                        <div className="text-sm text-gray-400">Active Gamers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">50K+</div>
                        <div className="text-sm text-gray-400">Reviews & Ratings</div>
                    </div>
                </div>

                {/* Search Bar Preview */}
                <div className="max-w-2xl mx-auto mb-10">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                        <div className="relative flex items-center bg-gray-900/90 backdrop-blur-xl border border-purple-500/30 rounded-lg p-4">
                            <FaSearch className="text-gray-400 text-xl mr-3" />
                            <input 
                                type="text" 
                                placeholder="Search from 10,000+ games... (Coming Soon)"
                                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                                disabled
                            />
                            <MdTrendingUp className="text-purple-400 text-2xl ml-3" />
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                        to="/registration" 
                        className="btn btn-lg bg-purple-600 hover:bg-purple-700 border-0 text-white font-bold uppercase tracking-wider px-8 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
                    >
                        <FaGamepad className="text-xl" />
                        Start Tracking Free
                    </Link>
                    <a 
                        href="#features" 
                        className="btn btn-lg bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-purple-300 font-bold uppercase tracking-wider px-8 transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex items-center justify-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Free Forever
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        No Credit Card
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Privacy First
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default Hero;