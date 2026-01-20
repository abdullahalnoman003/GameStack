import { FaGamepad, FaStar, FaChartLine, FaUsers, FaBookmark, FaTrophy } from 'react-icons/fa';
import { MdDashboard, MdLibraryBooks } from 'react-icons/md';

const Features = () => {
    const features = [
        {
            icon: <FaGamepad className="text-5xl text-purple-400" />,
            title: "Track Your Games",
            description: "Keep a comprehensive list of all games you've played, currently playing, or planning to play. Never forget a game again.",
            color: "from-purple-500/20 to-purple-600/20"
        },
        {
            icon: <FaStar className="text-5xl text-yellow-400" />,
            title: "Rate & Review",
            description: "Score games out of 10, write reviews, and share your thoughts. Help other gamers discover great titles.",
            color: "from-yellow-500/20 to-yellow-600/20"
        },
        {
            icon: <FaChartLine className="text-5xl text-green-400" />,
            title: "Track Progress",
            description: "Log your playtime, completion percentage, and achievements. See your gaming journey visualized with beautiful stats.",
            color: "from-green-500/20 to-green-600/20"
        },
        {
            icon: <MdDashboard className="text-5xl text-blue-400" />,
            title: "Personal Dashboard",
            description: "Get insights with detailed analytics, genre breakdowns, gaming streaks, and personalized recommendations.",
            color: "from-blue-500/20 to-blue-600/20"
        },
        {
            icon: <FaBookmark className="text-5xl text-pink-400" />,
            title: "Custom Collections",
            description: "Create custom lists and collections. Organize games by genre, mood, platform, or any way you prefer.",
            color: "from-pink-500/20 to-pink-600/20"
        },
        {
            icon: <FaTrophy className="text-5xl text-orange-400" />,
            title: "Gaming Profile",
            description: "Build your gaming identity with badges, achievements, and a showcase of your favorite games and stats.",
            color: "from-orange-500/20 to-orange-600/20"
        }
    ];

    return (
        <section id="features" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-4">
                        <MdLibraryBooks className="text-purple-400" />
                        <span className="text-purple-300 font-semibold text-sm">POWERFUL FEATURES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Everything You Need to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Level Up</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Powerful tools designed for gamers who want to track, organize, and remember their gaming journey.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/20 rounded-tr-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 text-center">
                    <div className="inline-block bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-8">
                        <p className="text-gray-300 text-lg mb-4">
                            Join thousands of gamers already tracking their gaming journey
                        </p>
                        <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold">
                            <FaUsers className="text-2xl" />
                            <span className="text-3xl">5,000+</span>
                            <span className="text-gray-400">Active Users</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;