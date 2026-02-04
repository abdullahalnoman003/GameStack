import React from 'react';
import { FaLock, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center py-8">
            <div className="max-w-2xl mx-auto px-4 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-error/20 border border-error/30 rounded-full p-8">
                        <FaLock className="text-6xl text-error" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="poetsen-one-regular text-5xl md:text-6xl text-base-content mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-error to-error/70">
                        UNAUTHORIZED
                    </span>
                </h1>

                {/* Message */}
                <p className="galdeano-regular text-xl text-base-content/60 mb-8">
                    You don't have permission to access this page.
                </p>

                {/* Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-content font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105"
                >
                    <FaHome />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Unauthorized;