import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import { useCategories } from '../hooks/useCategories';
import { ArrowDown, BookOpen, Search, Filter, Calendar, Tag, TrendingUp, Grid, List, Loader2 } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [scrollY, setScrollY] = useState(0);
  
  // Fetch categories from Sanity
  const { categories, loading: categoriesLoading } = useCategories();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToArticles = () => {
    const element = document.querySelector('#articles-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prepare categories for display with 'all' option
  const displayCategories = [
    { _id: 'all', title: 'All', postCount: 0 },
    ...categories
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced noisy texture overlay - Primary layer */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Additional coarse grain layer */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='4' seed='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fine detail noise layer */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineNoise'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.5' numOctaves='3' seed='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fineNoise)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ultra-fine paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.2' numOctaves='2' seed='15' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#D1B2FF]/10 to-[#FFFFB2]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#FFFFB2]/8 to-[#D1B2FF]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#D1B2FF]/5 to-[#FFFFB2]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 relative">
          
          {/* Floating navigation hint */}
          <div 
            className="fixed top-6 left-4 sm:left-6 md:left-12 lg:left-20 z-50 transition-all duration-500"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0.3, 1 - scrollY / 500)
            }}
          >
            <div className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md text-white text-xs font-bold tracking-[0.15em] uppercase py-2.5 px-4 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/90 hover:border-white/30 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"></div>
              wow! You are Here
            </div>
          </div>
          
          {/* Main hero content */}
          <div className="max-w-7xl mx-auto w-full">
            {/* Enhanced section badge */}
            <div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-black/60 via-black/80 to-black/60 backdrop-blur-md text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase py-3 px-6 sm:px-8 rounded-full border border-white/20 mb-8 sm:mb-12 transition-all duration-500 hover:scale-105 hover:border-white/40 shadow-2xl group"
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              <BookOpen size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>BLOG ARTICLES</span>
              <div className="w-1 h-1 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
            </div>
            
            {/* Massive responsive title */}
            <div className="mb-8 sm:mb-12 relative">
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-[0.75] sm:leading-[0.8] tracking-[-0.02em] mb-2 sm:mb-4 bg-gradient-to-br from-[#D1B2FF] via-white to-[#FFFFB2] bg-clip-text text-transparent"
                style={{ transform: `translateY(${scrollY * 0.02}px)` }}
              >
                Latest
              </h1>
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-[0.75] sm:leading-[0.8] tracking-[-0.02em] bg-gradient-to-br from-[#FFFFB2] via-white to-[#D1B2FF] bg-clip-text text-transparent"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                Articles
              </h1>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse delay-500"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-[#FFFFB2] to-[#D1B2FF] rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Animated section divider */}
            <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-[#FFFFB2] to-[#D1B2FF] rounded-full animate-bounce delay-150"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-bounce delay-300"></div>
              </div>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
            
            {/* Enhanced subtitle */}
            <p 
              className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto tracking-wide mb-10 sm:mb-16 px-4"
              style={{ transform: `translateY(${scrollY * 0.01}px)` }}
            >
              Discover cutting-edge insights, comprehensive tutorials, and innovative thoughts on 
              <span className="text-transparent bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] bg-clip-text font-medium"> AI</span>, 
              <span className="text-transparent bg-gradient-to-r from-[#FFFFB2] to-[#D1B2FF] bg-clip-text font-medium"> technology</span>, and 
              <span className="text-transparent bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] bg-clip-text font-medium"> innovation</span> that shape our digital future.
            </p>

            {/* Enhanced CTA Button */}
            <button 
              onClick={scrollToArticles}
              className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-bold text-sm sm:text-lg rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden inline-flex items-center space-x-2 sm:space-x-3 hover:shadow-[#D1B2FF]/25"
            >
              <span className="relative z-10">Explore Articles</span>
              <ArrowDown size={18} className="relative z-10 group-hover/btn:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
          
          {/* Enhanced scroll indicator 
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="text-gray-500 text-xs font-light tracking-widest uppercase mb-3 hidden sm:block">
              SCROLL DOWN
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"></div>
            </div>
          </div> */}
        </section>
        
        {/* Enhanced Blog Section */}
        <section id="articles-section" className="relative z-20 py-16 sm:py-24 lg:py-32">
          
          {/* Section header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-16">
              <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-light tracking-widest uppercase">
                  <TrendingUp size={14} />
                  FEATURED ARTICLES
                </div>
                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
                Featured Articles
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed px-4">
                Curated content covering the latest trends in technology and artificial intelligence
              </p>
            </div>
            
            {/* Enhanced search and filter bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-white/[0.08] to-white/[0.12] backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 p-4 sm:p-6 mb-8 sm:mb-12 shadow-2xl">
                 
                {/* Search bar */}
                <div className="relative mb-4 sm:mb-6">
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/40 border border-white/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D1B2FF]/50 focus:bg-black/60 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                {/* Filters and view controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                  
                  {/* Category filter */}
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <Filter size={16} className="text-gray-400 shrink-0" />
                    {categoriesLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 size={14} className="animate-spin text-gray-400" />
                        <span className="text-gray-400 text-sm">Loading categories...</span>
                      </div>
                    ) : (
                      <div className="flex gap-1 sm:gap-2 flex-wrap">
                        {displayCategories.map((category) => (
                          <button
                            key={category._id}
                            onClick={() => setSelectedCategory(category._id === 'all' ? 'all' : category.title)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5 ${
                              (selectedCategory === 'all' && category._id === 'all') || 
                              (selectedCategory === category.title)
                                ? 'bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black shadow-lg'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                          >
                            {category._id === 'all' ? (
                              <Tag size={12} />
                            ) : (
                              <span className="w-2 h-2 bg-current rounded-full opacity-60"></span>
                            )}
                            <span>{category.title}</span>
                            {category.postCount > 0 && category._id !== 'all' && (
                              <span className="opacity-60">({category.postCount})</span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* View mode toggle */}
                  <div className="flex items-center gap-2 bg-black/40 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' 
                          ? 'bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' 
                          ? 'bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog list container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-32">
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-4 sm:p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-2xl">
              
              {/* Content indicators */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 text-gray-500 text-xs font-mono tracking-wider">
                <Calendar size={12} />
                <span className="hidden sm:inline">LATEST CONTENT</span>
              </div>
              
              <div className="relative z-10">
                <BlogList 
                  searchTerm={searchTerm}
                  selectedCategory={selectedCategory}
                  viewMode={viewMode}
                />
              </div>

              {/* Animated hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/[0.01] via-[#FFFFB2]/[0.02] to-[#D1B2FF]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              
              {/* Floating particles on hover */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-[#D1B2FF]/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-[#FFFFB2]/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Enhanced Footer */}
          <footer className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-2xl text-center">
                
                <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"></div>
                  <div className="text-gray-300 text-lg sm:text-xl font-medium tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                    sasankkarki.com.np
                  </div>
                  <div className="w-2 h-2 bg-gradient-to-br from-[#FFFFB2] to-[#D1B2FF] rounded-full animate-pulse delay-500"></div>
                </div>
                
                <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-2xl mx-auto">
                  Exploring the future of artificial intelligence and technology innovation through thoughtful content and cutting-edge insights
                </p>

                {/* Social links placeholder */}
                <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#FFFFB2] to-[#D1B2FF] rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/[0.01] via-[#FFFFB2]/[0.02] to-[#D1B2FF]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </div>
          </footer>
        </section>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-[#D1B2FF]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-8 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFFFB2]/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#D1B2FF]/15 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFFFB2]/15 rounded-full animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#D1B2FF]/10 rounded-full animate-pulse delay-1500"></div>
      <div className="absolute bottom-1/3 left-1/6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FFFFB2]/25 rounded-full animate-pulse delay-2500"></div>
    </div>
  );
}