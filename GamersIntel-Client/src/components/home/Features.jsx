import { FaGamepad, FaStar, FaChartLine, FaBookmark, FaTrophy } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Features = () => {
    const features = [
        {
            icon: <FaGamepad className="text-5xl text-primary" />,
            title: "Track Your Games",
            description: "Keep a complete library of all games you've played, currently playing, or want to play. Never lose track of your gaming journey."
        },
        {
            icon: <FaStar className="text-5xl text-warning" />,
            title: "Rate & Review",
            description: "Score games and write reviews. Share your honest opinions and help other gamers discover great titles."
        },
        {
            icon: <FaChartLine className="text-5xl text-success" />,
            title: "Track Progress",
            description: "Log playtime, completion percentage, and achievements. Visualize your gaming stats with beautiful charts."
        },
        {
            icon: <MdDashboard className="text-5xl text-info" />,
            title: "Personal Dashboard",
            description: "Get detailed analytics, genre breakdowns, gaming streaks, and personalized game recommendations."
        },
        {
            icon: <FaBookmark className="text-5xl text-accent" />,
            title: "Custom Collections",
            description: "Create custom lists and organize games by genre, mood, platform, or any way you prefer."
        },
        {
            icon: <FaTrophy className="text-5xl text-warning" />,
            title: "Gaming Profile",
            description: "Build your gaming identity with badges, achievements, and showcase your favorite games."
        }
    ];

    return (
        <section id="features" className="py-20 bg-base-100 relative">
            {/* Subtle Background */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                    linear-gradient(oklch(var(--p) / 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, oklch(var(--p) / 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="poetsen-one-regular text-4xl md:text-6xl text-base-content mb-4">
                        POWERFUL{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            FEATURES
                        </span>
                    </h2>
                    <p className="galdeano-regular text-xl text-base-content/70 max-w-2xl mx-auto">
                        Everything you need to track and organize your gaming journey
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group bg-base-200/50 border border-primary/30 rounded-xl p-8 hover:border-primary/60 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:bg-base-200/70"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                {feature.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-base-content mb-3">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-base-content/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
