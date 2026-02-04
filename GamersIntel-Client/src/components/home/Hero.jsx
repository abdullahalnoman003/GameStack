import { Link } from 'react-router-dom';
import { FaSearch, FaGamepad } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { MdTrendingUp } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Hero = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="relative min-h-screen bg-base-100 flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image Overlay - Add your image to /public/images/hero-bg.jpg */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
                backgroundImage: `url('/images/logo.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}></div>
            
            {/* The dark overlay of a */}
            <div className="absolute inset-0 bg-gradient-to-b from-base-100/50 via-base-100/70 to-base-100"></div>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                    linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }}></div>

            {/* Gentle Background Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6 hover:bg-primary/30 hover:border-primary/60 transition-all duration-300">
                    <HiLightningBolt className="text-warning" />
                    <span className="text-primary font-semibold text-sm uppercase creepster-regular tracking-wider">Your Gaming Memory System</span>
                </div>

                {/* Main Headline with Custom Font */}
                <h1 className="poetsen-one-regular text-5xl md:text-7xl text-base-content mb-6 leading-tight">
                    DOMINATE YOUR
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                        GAMING LEGACY
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="galdeano-regular text-xl md:text-2xl text-base-content/70 mb-8 max-w-3xl mx-auto">
                    Track every game. Rate every experience. Remember every moment.
                </p>

                {/* Clean Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <div className="text-center bg-primary/10 border border-primary/20 rounded-lg px-8 py-4 hover:bg-primary/20 hover:scale-110 hover:border-primary/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-primary">10K+</div>
                        <div className="text-sm text-base-content/60 uppercase tracking-wide">Games</div>
                    </div>
                    <div className="text-center bg-accent/10 border border-accent/20 rounded-lg px-8 py-4 hover:bg-accent/20 hover:scale-110 hover:border-accent/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-accent">5K+</div>
                        <div className="text-sm text-base-content/60 uppercase tracking-wide">Gamers</div>
                    </div>
                    <div className="text-center bg-secondary/10 border border-secondary/20 rounded-lg px-8 py-4 hover:bg-secondary/20 hover:scale-110 hover:border-secondary/40 transition-all duration-300">
                        <div className="text-4xl font-bold text-secondary">50K+</div>
                        <div className="text-sm text-base-content/60 uppercase tracking-wide">Reviews</div>
                    </div>
                </div>

                {/* Clean Search Bar */}
                <div className="max-w-2xl mx-auto mb-10">
                    <div className="relative">
                        <div className="flex items-center bg-base-200/80 border border-primary/40 rounded-lg p-4 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                            <FaSearch className="text-primary text-xl mr-3" />
                            <input 
                                type="text" 
                                placeholder="Search 10,000+ games... (Coming Soon)"
                                className="flex-1 bg-transparent text-base-content placeholder-base-content/50 outline-none"
                                disabled
                            />
                            <MdTrendingUp className="text-secondary text-2xl ml-3" />
                        </div>
                    </div>
                </div>

                {/* Clean CTA Buttons */}
                
               
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    
                    {   
                        user ? (
                            <Link 
                        to="/dashboard" 
                        className="px-10 py-4 bg-gradient-to-r from-primary to-accent hover:scale-105 hover:shadow-xl hover:shadow-primary/50 text-primary-content font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 rounded-lg"
                    >
                        <FaGamepad className="text-xl" />
                        Go to Dashboard
                    </Link>
                        ) : (
                            <Link 
                        to="/registration" 
                        className="px-10 py-4 bg-gradient-to-r from-primary to-accent hover:scale-105 hover:shadow-xl hover:shadow-primary/50 text-primary-content font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 rounded-lg"
                    >
                        <FaGamepad className="text-xl" />
                        Start Free
                    </Link>
                        )
                    }
                    <a 
                        href="#features" 
                        className="px-10 py-4 bg-transparent border-2 border-primary rounded-lg hover:bg-primary/10 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 text-primary hover:text-base-content font-bold uppercase tracking-wider transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>

                {/* Simple Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-base-content/60">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        100% Free
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        No Credit Card
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Privacy First
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 to-transparent"></div>
        </div>
    );
};

export default Hero;
