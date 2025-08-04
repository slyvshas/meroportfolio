import React from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

// Social sharing component
const SocialShare = ({ post }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = encodeURIComponent(post.title || '');
  const shareText = encodeURIComponent(`Check out this article: ${post.title || ''}`);
  
  const shareLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-black'
    },
    {
      name: 'Threads',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12.006c.027 3.075.718 5.48 2.057 7.138 1.435 1.776 3.631 2.686 6.523 2.707 5.445-.016 7.691-2.61 8.818-6.078l2.056.403c-.861 3.649-2.573 6.306-5.09 7.898C16.379 24.018 14.317 24 12.186 24z"/>
          <path d="M8.681 18.379c-1.314-1.612-1.988-3.946-2.007-6.936.019-2.998.693-5.33 2.007-6.937 1.393-1.705 3.4-2.567 5.963-2.567s4.57.862 5.963 2.567c1.314 1.607 1.988 3.939 2.007 6.937-.019 2.99-.693 5.324-2.007 6.936-1.393 1.705-3.4 2.567-5.963 2.567s-4.57-.862-5.963-2.567z"/>
        </svg>
      ),
      url: `https://threads.net/intent/post?text=${shareText}%20${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488"/>
        </svg>
      ),
      url: `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-green-600'
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
      color: 'hover:bg-blue-500'
    }
  ];

  const handleShare = (link) => {
    if (link.note) {
      // For platforms that don't support direct URL sharing, copy to clipboard
      navigator.clipboard.writeText(`${post.title} - ${shareUrl}`).then(() => {
        alert(`Link copied to clipboard! You can now paste it on ${link.name}.`);
      });
    } else {
      window.open(link.url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="my-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Share section header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
            Share This Article
          </h3>
          <p className="text-gray-400 text-lg">
            Spread the word and help others discover this content
          </p>
        </div>

        {/* Social sharing buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {shareLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleShare(link)}
              className={`group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-white/40 ${link.color}`}
              title={`Share on ${link.name}`}
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              <span className="font-medium text-sm tracking-wide">
                {link.name}
              </span>
            </button>
          ))}
        </div>

        {/* Copy link button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Link copied to clipboard!');
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};


// Custom components for PortableText styling with gradient text
const components = {
  block: {
    h1: ({children}) => (
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({children}) => (
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.9] tracking-tight bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
        {children}
      </h2>
    ),
    h3: ({children}) => (
      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 leading-[0.9] tracking-tight bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
        {children}
      </h3>
    ),
    h4: ({children}) => (
      <h4 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-[0.9] tracking-tight bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
        {children}
      </h4>
    ),
    normal: ({children}) => (
      <p className="text-gray-100 leading-relaxed mb-8 text-lg md:text-xl lg:text-2xl font-normal tracking-wide">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="list-disc list-inside text-gray-100 leading-relaxed mb-8 space-y-4 text-lg md:text-xl lg:text-2xl font-normal pl-8">
        {children}
      </ul>
    ),
    number: ({children}) => (
      <ol className="list-decimal list-inside text-gray-100 leading-relaxed mb-8 space-y-4 text-lg md:text-xl lg:text-2xl font-normal pl-8">
        {children}
      </ol>
    ),
  },
  listItem: ({children}) => (
    <li className="text-gray-100 font-normal">
      {children}
    </li>
  ),
  code: ({children}) => (
    <div className="my-12 mx-auto max-w-4xl">
      {/* Terminal window container with enhanced styling */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
        {/* Terminal header with realistic design */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-gray-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Terminal buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            {/* Terminal title */}
            <div className="text-gray-300 text-sm font-mono ml-2 select-none">
              Terminal — code
            </div>
          </div>
          {/* Window controls (optional) */}
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-2 h-0.5 bg-gray-500 rounded"></div>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-2 h-2 border border-gray-500 rounded-sm"></div>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-2 h-2 relative">
                <div className="w-full h-0.5 bg-gray-500 rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-full h-0.5 bg-gray-500 -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Code content area */}
        <div className="relative">
          {/* Subtle inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Terminal prompt and code */}
          <div className="p-6 font-mono">
            {/* Terminal prompt line */}
            <div className="flex items-center mb-3 text-sm">
              <span className="text-green-400 mr-1">➜</span>
              <span className="text-cyan-400">~</span>
              <span className="text-gray-400 ml-1">$</span>
              <span className="text-gray-500 ml-2 italic">// Code snippet</span>
            </div>
            
            {/* Actual code content */}
            <div className="relative">
              <pre className="text-green-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap overflow-x-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                <code className="font-mono">
                  {children}
                </code>
              </pre>
              
              {/* Blinking cursor effect */}
              <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1 align-text-bottom"></span>
            </div>
          </div>
          
          {/* Copy button (optional enhancement) */}
          <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200 group">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="absolute -top-8 right-0 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Copy code
            </span>
          </button>
        </div>
        
        {/* Terminal footer with subtle details */}
        <div className="bg-gray-900/50 px-6 py-2 border-t border-gray-700/30">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>UTF-8</span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
  blockquote: ({children}) => (
    <blockquote className="border-l-4 border-[#D1B2FF] pl-10 italic text-gray-100 mb-10 font-normal text-xl md:text-2xl lg:text-3xl leading-relaxed bg-white/5 py-6 rounded-r-lg">
      {children}
    </blockquote>
  ),
  link: ({children, value}) => (
    <a 
      href={value?.href} 
      className="text-[#D1B2FF] hover:text-[#FFFFB2] underline underline-offset-4 transition-colors duration-300 font-medium"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  image: ({value}) => (
    <div className="my-12">
      <img 
        src={value?.asset?.url} 
        alt={value?.alt || 'Blog image'} 
        className="w-full h-auto rounded-lg shadow-2xl"
      />
      {value?.caption && (
        <p className="text-gray-400 text-sm mt-4 text-center font-light">
          {value.caption}
        </p>
      )}
    </div>
  ),
  types: {
    image: ({value}) => (
      <div className="my-12">
        <img 
          src={value?.asset?.url} 
          alt={value?.alt || 'Blog image'} 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        {value?.caption && (
          <p className="text-gray-400 text-sm mt-4 text-center font-light">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
};

export default function BlogPost({ post }) {
  if (!post) return null;

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
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="px-6 md:px-12 lg:px-20 py-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            BACK TO BLOG
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="px-6 md:px-12 lg:px-20 pb-12">
          {/* Category tags */}
          {post.categories && post.categories.length > 0 && (
            <div className="mb-8">
              {post.categories.map(cat => (
                <span 
                  key={cat._id} 
                  className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-widest uppercase py-2 px-4 rounded-full border border-white/20 mr-3 mb-2 shadow-lg"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}
          
          {/* Main title - matching the design */}
          <div className="mb-12">
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-4">
              {post.title}
            </h1>
          </div>

          {/* Meta information */}
          <div className="flex items-center gap-8 text-gray-200 text-base md:text-lg font-medium mb-16">
            {post.author && (
              <div className="group relative">
                <span className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#D1B2FF]/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium text-white group-hover:text-[#D1B2FF] transition-colors duration-300">
                    By {post.author}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#FFFFB2] transition-colors duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                {/* Hover tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md text-white text-sm px-3 py-2 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  Article Author
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              </div>
            )}
            {post.publishedAt && (
              <div className="group relative">
                <span className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#FFFFB2]/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#FFFFB2] to-[#D1B2FF] rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium text-white group-hover:text-[#FFFFB2] transition-colors duration-300">
                    {(() => {
                      try {
                        const date = new Date(post.publishedAt);
                        if (isNaN(date.getTime())) {
                          return 'Date not available';
                        }
                        return date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        });
                      } catch (error) {
                        console.error('Error formatting date:', error);
                        return 'Date not available';
                      }
                    })()}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#D1B2FF] transition-colors duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                {/* Hover tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md text-white text-sm px-3 py-2 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  Publication Date
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              </div>
            )}
          </div>

          

          {/* Featured image */}
          {post.mainImage?.asset?.url && (
            <div className="mb-16">
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-xl prose-invert max-w-none">
              <PortableText value={post.body} components={components} />
            </div>
          </div>
        </div>

        {/* Social Share Section */}
        <SocialShare post={post} />

        {/* Footer branding like in the image */}
        <div className="px-6 md:px-12 lg:px-20 pb-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm font-light tracking-wide">
              sasankkarki.com.np
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}