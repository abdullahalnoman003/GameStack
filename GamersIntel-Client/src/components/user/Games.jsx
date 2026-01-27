import React, { useState, useEffect } from 'react';
import { FaSearch, FaGamepad, FaStar, FaCalendar, FaPlaystation, FaXbox, FaWindows, FaApple } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';
import useRAWG from '../../Hooks/useRAWG';
import toast from 'react-hot-toast';

const Games = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const axiosRAWG = useRAWG();

    // Fetch games
    const fetchGames = async (searchTerm = '', pageNum = 1) => {
        setLoading(true);
        try {
            const params = {
                page: pageNum,
                page_size: 20,
            };
            
            if (searchTerm) {
                params.search = searchTerm;
            }

            const response = await axiosRAWG.get('/games', { params });
            
            if (pageNum === 1) {
                setGames(response.data.results);
            } else {
                setGames(prev => [...prev, ...response.data.results]);
            }
            
            setHasMore(response.data.next !== null);
        } catch (error) {
            console.error('Error fetching games:', error);
            toast.error('Failed to fetch games. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchGames('', 1);
    }, []);

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        fetchGames(searchQuery, 1);
    };

    // Load more games
    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchGames(searchQuery, nextPage);
    };

    // Get platform icon
    const getPlatformIcon = (platformName) => {
        const name = platformName.toLowerCase();
        if (name.includes('playstation')) return <FaPlaystation className="text-blue-400" />;
        if (name.includes('xbox')) return <FaXbox className="text-green-400" />;
        if (name.includes('nintendo') || name.includes('switch')) return <SiNintendoswitch className="text-red-400" />;
        if (name.includes('pc') || name.includes('windows')) return <FaWindows className="text-cyan-400" />;
        if (name.includes('mac') || name.includes('apple')) return <FaApple className="text-gray-400" />;
        return <FaGamepad className="text-purple-400" />;
    };

    // Format rating
    const formatRating = (rating) => {
        return rating ? rating.toFixed(1) : 'N/A';
    };

    return (
        <div className="min-h-screen bg-black pt-20 pb-20">
            {/* Header Section */}
            <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600/20 border border-purple-500/40 rounded-full mb-4">
                            <HiLightningBolt className="text-yellow-400" />
                            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Game Database</span>
                        </div>
                        
                        <h1 className="poetsen-one-regular text-4xl md:text-6xl text-white mb-4">
                            DISCOVER{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                GAMES
                            </span>
                        </h1>
                        
                        <p className="galdeano-regular text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                            Browse thousands of games. Search, explore, and add to your library.
                        </p>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                            <div className="flex items-center bg-gray-900/80 border border-purple-500/40 rounded-lg p-4 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                                <FaSearch className="text-purple-400 text-xl mr-3" />
                                <input 
                                    type="text" 
                                    placeholder="Search for games (e.g., 'The Witcher 3', 'Minecraft'...)"
                                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button 
                                    type="submit"
                                    className="ml-3 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-bold transition-all duration-300"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Games Grid */}
            <section className="py-8 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading && page === 1 ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="text-center">
                                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-gray-400">Loading games...</p>
                            </div>
                        </div>
                    ) : games.length === 0 ? (
                        <div className="text-center py-20">
                            <FaGamepad className="text-6xl text-gray-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">No Games Found</h3>
                            <p className="text-gray-400">Try a different search term</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {games.map((game) => (
                                    <div 
                                        key={game.id}
                                        className="bg-gray-900/50 border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/60 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group"
                                    >
                                        {/* Game Image */}
                                        <div className="relative h-48 overflow-hidden bg-gray-800">
                                            {game.background_image ? (
                                                <img 
                                                    src={game.background_image} 
                                                    alt={game.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <FaGamepad className="text-6xl text-gray-600" />
                                                </div>
                                            )}
                                            
                                            {/* Rating Badge */}
                                            {game.rating > 0 && (
                                                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                                    <FaStar className="text-yellow-400 text-sm" />
                                                    <span className="text-white font-bold text-sm">{formatRating(game.rating)}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Game Info */}
                                        <div className="p-4">
                                            <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-purple-400 transition-colors">
                                                {game.name}
                                            </h3>
                                            
                                            {/* Release Date */}
                                            {game.released && (
                                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                                    <FaCalendar className="text-purple-400" />
                                                    <span>{new Date(game.released).getFullYear()}</span>
                                                </div>
                                            )}

                                            {/* Platforms */}
                                            <div className="flex items-center gap-2 flex-wrap mb-3">
                                                {game.parent_platforms?.slice(0, 4).map((p, idx) => (
                                                    <div key={idx} className="text-lg">
                                                        {getPlatformIcon(p.platform.name)}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Genres */}
                                            <div className="flex flex-wrap gap-2">
                                                {game.genres?.slice(0, 2).map((genre) => (
                                                    <span 
                                                        key={genre.id}
                                                        className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300 text-xs"
                                                    >
                                                        {genre.name}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Add to Library Button */}
                                            <button 
                                                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                                                onClick={() => toast.success(`Added ${game.name} to library!`)}
                                            >
                                                <FaGamepad />
                                                Add to Library
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {hasMore && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={loadMore}
                                        disabled={loading}
                                        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 text-white font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Loading...
                                            </>
                                        ) : (
                                            <>
                                                <FaGamepad />
                                                Load More Games
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Games;
