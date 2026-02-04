import { FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

const Solution = () => {
    const problems = [
        {
            title: "Forgotten Games",
            description: "Can't remember what you played last year or what you thought about it?"
        },
        {
            title: "Choice Overload",
            description: "Massive backlog but can't decide what to play next?"
        },
        {
            title: "Lost Progress",
            description: "No way to track which games you've completed or abandoned?"
        },
        {
            title: "No History",
            description: "Want to look back at your gaming journey over the years?"
        }
    ];

    const solutions = [
        "Complete game tracking system",
        "Personal ratings and reviews",
        "Beautiful progress visualization",
        "Smart backlog management",
        "Full gaming history",
        "Achievement tracking"
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-base-100 via-base-200 to-base-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="poetsen-one-regular text-4xl md:text-6xl text-base-content mb-4">
                        WHY{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            GAMERSINTEL?
                        </span>
                    </h2>
                    <p className="galdeano-regular text-xl text-base-content/60 max-w-3xl mx-auto">
                        Every gamer faces these challenges. We built the perfect solution.
                    </p>
                </div>

                {/* Problem-Solution Layout */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Problems Side */}
                    <div className="bg-base-200/50 border border-error/30 rounded-xl p-8 hover:shadow-2xl hover:shadow-error/10 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-base-content mb-6 flex items-center gap-3">
                            <FaQuestionCircle className="text-error" />
                            Common Problems
                        </h3>
                        <div className="space-y-6">
                            {problems.map((item, index) => (
                                <div key={index} className="border-l-4 border-error pl-4 rounded-r-lg hover:bg-error/5 transition-colors duration-300">
                                    <h4 className="text-xl font-bold text-base-content mb-1">{item.title}</h4>
                                    <p className="text-base-content/60">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solution Side */}
                    <div className="bg-base-200/50 border border-primary/30 rounded-xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-base-content mb-6 flex items-center gap-3">
                            <FaCheckCircle className="text-success" />
                            Our Solution
                        </h3>
                        <div className="space-y-4">
                            {solutions.map((solution, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4 hover:bg-primary/20 hover:scale-105 hover:border-primary/40 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-base-content/70 font-medium">{solution}</span>
                                </div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-success/20 border border-success/30 rounded-lg p-6 text-center hover:bg-success/30 hover:scale-105 hover:shadow-lg hover:shadow-success/20 transition-all duration-300">
                                <div className="text-3xl font-black text-success mb-2">100%</div>
                                <div className="text-sm text-base-content/60">Free Forever</div>
                            </div>
                            <div className="bg-info/20 border border-info/30 rounded-lg p-6 text-center hover:bg-info/30 hover:scale-105 hover:shadow-lg hover:shadow-info/20 transition-all duration-300">
                                <div className="text-3xl font-black text-info mb-2">&lt;2min</div>
                                <div className="text-sm text-base-content/60">Quick Setup</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
