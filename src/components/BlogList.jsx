import React, { useMemo, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Image as ImageIcon, Tag, Eye } from 'lucide-react';

export default function BlogList({ searchTerm = '', selectedCategory = 'all', viewMode = 'grid' }) {
  const { posts, loading } = usePosts();
  const [imageErrors, setImageErrors] = useState({});

  // Debug logging
  console.log('BlogList - posts:', posts);
  console.log('BlogList - loading:', loading);
  console.log('BlogList - posts length:', posts?.length);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    if (!posts || !Array.isArray(posts)) return [];
    
    return posts.filter(post => {
      // Search filter
      const matchesSearch = !searchTerm || 
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author?.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || 
        (post.categories && post.categories.some(cat => 
          cat.title?.toLowerCase() === selectedCategory.toLowerCase()
        ));
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  // Debug info display (moved after filteredPosts definition)
  const debugInfo = {
    postsLength: posts?.length || 0,
    loading,
    searchTerm,
    selectedCategory,
    viewMode,
    filteredPostsLength: filteredPosts.length
  };

  console.log('BlogList - debug info:', debugInfo);
  
  // Debug individual posts
  if (filteredPosts.length > 0) {
    console.log('First post data:', filteredPosts[0]);
    console.log('First post slug:', filteredPosts[0]?.slug);
  }

  const handleImageError = (postId) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const handlePostClick = (post) => {
    console.log('Clicked post:', post);
    console.log('Post slug:', post.slug);
    console.log('Post title:', post.title);
    console.log('Generated URL:', `/blog/${post.slug || 'no-slug'}`);
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 sm:py-32">
      <div className="inline-flex items-center gap-3 bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full border border-white/20 mb-8 shadow-xl">
        <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"></div>
        LOADING ARTICLES
      </div>
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div 
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"
            style={{ animationDelay: `${i * 150}ms` }}
          ></div>
        ))}
      </div>
    </div>
  );

  // No posts found state
  if (!loading && (!posts || posts.length === 0)) {
    return (
      <div className="flex flex-col items-center justify-center py-20 sm:py-32 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
          <div className="w-8 h-8 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">No articles found</h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-md">
          No blog posts were found. This could be due to:
        </p>
        <ul className="text-gray-400 text-sm sm:text-base max-w-md mt-2 text-left">
          <li>• No posts published in Sanity CMS</li>
          <li>• Connection issue with Sanity</li>
          <li>• Incorrect project configuration</li>
        </ul>
        <div className="mt-6 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20">
          <p className="text-gray-300 text-xs font-mono">
            Debug Info: Posts array length: {posts?.length || 'undefined'}
          </p>
          <p className="text-gray-300 text-xs font-mono mt-2">
            Loading state: {loading ? 'true' : 'false'}
          </p>
          <p className="text-gray-300 text-xs font-mono mt-2">
            Posts type: {Array.isArray(posts) ? 'Array' : typeof posts}
          </p>
        </div>
      </div>
    );
  }

  // No results state
  if (filteredPosts.length === 0 && posts && posts.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 sm:py-32 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
          <Eye size={24} className="text-gray-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">No articles found</h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-md">
          Try adjusting your search terms or selecting a different category to find what you're looking for.
        </p>
      </div>
    );
  }

  // Grid view component
  const GridView = () => (
    <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
      {filteredPosts.map((post, index) => (
        <Link to={`/blog/${post.slug || 'no-slug'}`} key={post._id} className="group block" onClick={() => handlePostClick(post)}>
          <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:from-white/[0.08] hover:to-white/[0.04] hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 h-full flex flex-col">
            
            {/* Featured image */}
            {post.mainImage?.asset?.url && !imageErrors[post._id] ? (
              <div className="relative overflow-hidden aspect-video sm:aspect-[4/3]">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={() => handleImageError(post._id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Categories overlay */}
                {post.categories && post.categories.length > 0 && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                    {post.categories.slice(0, 2).map(cat => (
                      <span 
                        key={cat._id} 
                        className="inline-block bg-black/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase py-1 sm:py-1.5 px-2 sm:px-3 rounded-full border border-white/20 shadow-lg"
                      >
                        {cat.title}
                      </span>
                    ))}
                    {post.categories.length > 2 && (
                      <span className="inline-block bg-black/80 backdrop-blur-sm text-white text-xs font-medium py-1 sm:py-1.5 px-2 sm:px-3 rounded-full border border-white/20">
                        +{post.categories.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="relative aspect-video sm:aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-white/10">
                <ImageIcon size={32} className="text-gray-600" />
                
                {/* Categories for no-image posts */}
                {post.categories && post.categories.length > 0 && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                    {post.categories.slice(0, 2).map(cat => (
                      <span 
                        key={cat._id} 
                        className="inline-block bg-black/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase py-1 sm:py-1.5 px-2 sm:px-3 rounded-full border border-white/20"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
              {/* Title */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight mb-3 sm:mb-4 transition-all duration-300 group-hover:text-gray-100 line-clamp-2">
                {post.title}
              </h2>
              
              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-4 sm:mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              
              {/* Meta information */}
              <div className="flex items-center justify-between text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  {post.author && (
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      <span className="truncate max-w-24 sm:max-w-none">{post.author}</span>
                    </span>
                  )}
                  {post.publishedAt && (
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span className="hidden sm:inline">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="sm:hidden">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'numeric',
                          day: 'numeric'
                        })}
                      </span>
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-white transition-all duration-300 group-hover:gap-3">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Hover effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/[0.01] via-[#FFFFB2]/[0.02] to-[#D1B2FF]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
            
            {/* Article number */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 text-xs font-mono tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
              {String(index + 1).padStart(2, '0')}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );

  // List view component
  const ListView = () => (
    <div className="space-y-6 sm:space-y-8">
      {filteredPosts.map((post, index) => (
        <Link to={`/blog/${post.slug || 'no-slug'}`} key={post._id} className="group block" onClick={() => handlePostClick(post)}>
          <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:from-white/[0.08] hover:to-white/[0.04] hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/20">
            
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {post.categories.map(cat => (
                    <span 
                      key={cat._id} 
                      className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase py-1.5 px-3 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-black/60 group-hover:border-white/30"
                    >
                      <Tag size={10} />
                      {cat.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Content grid */}
              <div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-start">
                {/* Text content */}
                <div className="sm:col-span-3 lg:col-span-4 space-y-3 sm:space-y-4">
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight transition-all duration-300 group-hover:text-gray-100">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {/* Meta information */}
                  <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm font-light">
                    {post.author && (
                      <span className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </span>
                    )}
                    {post.publishedAt && (
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </span>
                    )}
                    <span className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>5 min read</span>
                    </span>
                  </div>
                </div>

                {/* Featured image */}
                {post.mainImage?.asset?.url && !imageErrors[post._id] ? (
                  <div className="sm:col-span-1 order-first sm:order-last">
                    <div className="relative overflow-hidden rounded-xl aspect-video sm:aspect-square">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        onError={() => handleImageError(post._id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="sm:col-span-1 order-first sm:order-last">
                    <div className="relative overflow-hidden rounded-xl aspect-video sm:aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-white/10">
                      <ImageIcon size={24} className="text-gray-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Read more indicator */}
              <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                <span className="text-gray-400 text-sm font-light tracking-wide uppercase">
                  Read Full Article
                </span>
                <div className="flex items-center gap-2 text-white transition-all duration-300 group-hover:gap-4">
                  <span className="text-sm font-medium">Continue Reading</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Hover effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/[0.01] via-[#FFFFB2]/[0.02] to-[#D1B2FF]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
            
            {/* Article number */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-600 text-xs font-mono tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
              {String(index + 1).padStart(2, '0')}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Results summary */}
      {(searchTerm || selectedCategory !== 'all') && (
        <div className="flex items-center justify-between flex-wrap gap-4 p-4 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20">
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <span className="text-gray-400">Found</span>
            <span className="text-white font-bold">{filteredPosts.length}</span>
            <span className="text-gray-400">article{filteredPosts.length !== 1 ? 's' : ''}</span>
            {searchTerm && (
              <>
                <span className="text-gray-400">for</span>
                <span className="text-[#D1B2FF] font-medium">"{searchTerm}"</span>
              </>
            )}
            {selectedCategory !== 'all' && (
              <>
                <span className="text-gray-400">in</span>
                <span className="text-[#FFFFB2] font-medium">{selectedCategory}</span>
              </>
            )}
          </div>
          
          <div className="text-xs sm:text-sm text-gray-500 font-mono">
            {viewMode.toUpperCase()} VIEW
          </div>
        </div>
      )}

      {/* Render based on view mode */}
      {viewMode === 'grid' ? <GridView /> : <ListView />}

      {/* End indicator */}
      {filteredPosts.length > 0 && (
        <div className="flex items-center justify-center py-12 sm:py-16">
          <div className="flex items-center gap-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="text-gray-500 text-xs sm:text-sm font-light tracking-widest uppercase flex items-center gap-2">
              <div className="w-1 h-1 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
              <span>End of Articles</span>
              <div className="w-1 h-1 bg-gradient-to-r from-[#FFFFB2] to-[#D1B2FF] rounded-full"></div>
            </div>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
}