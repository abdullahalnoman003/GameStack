import React from 'react';
import Lottie from 'lottie-react';
import notAvailableAnimation from '../../assets/Error404.json';
import { FaGamepad, FaHome } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const NotAvailable = () => {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-8">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                    linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
            }}></div>

            {/* Gentle Background Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/40 rounded-full mb-4">
                    <HiLightningBolt className="text-yellow-400 text-sm" />
                    <span className="text-purple-300 font-semibold text-xs uppercase tracking-wider">Error 404</span>
                </div>

                {/* Lottie Animation */}
                <div className="mb-4">
                    <Lottie 
                        animationData={notAvailableAnimation}
                        loop={true}
                        autoplay={true}
                        className="w-full max-w-xs mx-auto"
                    />
                </div>
                
                {/* Main Heading */}
                <h1 className="poetsen-one-regular text-4xl md:text-5xl text-white mb-3">
                    LEVEL{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        NOT FOUND
                    </span>
                </h1>
                
                {/* Subheading */}
                <p className="galdeano-regular text-lg text-gray-400 mb-6 max-w-xl mx-auto">
                    This page doesn't exist. The URL might be incorrect or the page has been moved.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a 
                        href="/" 
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                    >
                        <FaHome />
                        Back to Home
                    </a>
                    <a 
                        href="/dashboard" 
                        className="px-8 py-3 bg-transparent border-2 border-purple-500 rounded-lg hover:bg-purple-500/20 hover:scale-105 text-purple-300 hover:text-white font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                    >
                        <FaGamepad />
                        Dashboard
                    </a>
                </div>

                {/* Help Text */}
                <div className="mt-6 text-gray-500 text-sm">
                    <a href="/contact" className="text-purple-400 hover:text-purple-300">Contact Support</a>
                </div>
            </div>
        </div>
    );
};

export default NotAvailable;