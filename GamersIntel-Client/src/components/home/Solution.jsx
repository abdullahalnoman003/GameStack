import { FaQuestionCircle, FaCheckCircle, FaBrain, FaCalendarAlt } from 'react-icons/fa';
import { MdManageSearch } from 'react-icons/md';

const Solution = () => {
    const problems = [
        {
            icon: <FaQuestionCircle className="text-4xl text-red-400" />,
            problem: "Forgotten Games",
            description: "Can't remember what you played last year or what you thought about it?"
        },
        {
            icon: <FaBrain className="text-4xl text-orange-400" />,
            problem: "Choice Overload",
            description: "Massive backlog but can't decide what to play next?"
        },
        {
            icon: <MdManageSearch className="text-4xl text-yellow-400" />,
            problem: "Lost Progress",
            description: "No way to track which games you've completed or abandoned?"
        },
        {
            icon: <FaCalendarAlt className="text-4xl text-pink-400" />,
            problem: "No History",
            description: "Want to look back at your gaming journey over the years?"
        }
    ];

    const solutions = [
        "📝 Comprehensive game tracking system",
        "⭐ Personal ratings and reviews",
        "📊 Beautiful progress visualization",
        "🎯 Smart backlog management",
        "📅 Complete gaming history",
        "🏆 Achievement & milestone tracking"
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">GamersIntel</span>?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Every gamer faces these challenges. We built the perfect solution.
                    </p>
                </div>

                {/* Problem-Solution Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Problems Side */}
                    <div>
                        <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-500/30 rounded-2xl p-8 mb-6">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <FaQuestionCircle className="text-red-400" />
                                Common Problems
                            </h3>
                            <div className="space-y-6">
                                {problems.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start group">
                                        <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">{item.problem}</h4>
                                            <p className="text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Solution Side */}
                    <div>
                        <div className="bg-gradient-to-br from-purple-900/20 to-purple-950/20 border border-purple-500/30 rounded-2xl p-8 mb-6">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <FaCheckCircle className="text-green-400" />
                                Our Solution
                            </h3>
                            <div className="space-y-4">
                                {solutions.map((solution, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-center gap-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-gray-300 font-medium">{solution}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Benefit Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-green-900/20 to-green-950/20 border border-green-500/30 rounded-xl p-6 text-center">
                                <div className="text-3xl font-black text-green-400 mb-2">100%</div>
                                <div className="text-sm text-gray-400">Free Forever</div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/30 rounded-xl p-6 text-center">
                                <div className="text-3xl font-black text-blue-400 mb-2">&lt;2min</div>
                                <div className="text-sm text-gray-400">Quick Setup</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 border-2 border-purple-500/50 rounded-2xl p-8 backdrop-blur-xl">
                        <p className="text-2xl font-bold text-white mb-2">
                            Stop forgetting. Start tracking. Level up your gaming memory.
                        </p>
                        <p className="text-gray-400">
                            Join the community of organized gamers today.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;