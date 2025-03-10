import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface AdSectionProps {
  isOpen: boolean;
  closeAd?: () => void;
}

interface AdBannerProps {
  show: boolean;
  closeAd: () => void;
}

const AdSection: React.FC<AdSectionProps> = ({ isOpen}) => {
  return (
    <div className="p-3 border-t border-border/40">
      <div className={cn(
        "rounded-lg p-4 text-center relative overflow-hidden min-h-[120px] flex flex-col justify-center",
        "transition-all duration-200",
        isOpen ? "block" : "hidden"
      )}
        style={{
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
        }}
      >
        <div className="absolute top-0 left-0 bg-white/10 text-white/80 text-[10px] px-1.5 py-0.5 rounded-br backdrop-blur-sm">
          广告
        </div>
        <div className="relative z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="text-lg font-medium text-center text-white">智能AI助手</div>
            <div className="text-sm font-normal text-center text-white/90">为您解答各类问题，提供智能对话服务</div>
            <div className="flex flex-col items-center justify-center gap-2 mt-1">
              <button 
                onClick={() => {
                  window.open('https://chat.zh-ai.cc/', '_blank');
                }} 
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium text-white transition-colors backdrop-blur-sm border border-white/20 flex items-center gap-2 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a5 5 0 0 0 10 0V7M8 7a4 4 0 0 1 8 0M8 7H6m12 0h2M12 7v8m0-8V3" />
                </svg>
                立即体验
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 mix-blend-overlay pointer-events-none"></div>
      </div>
    </div>
  );
};

const AdBanner: React.FC<AdBannerProps> = ({ show, closeAd }) => {
  if (!show) return null;
  
  return (
    <div className="rounded-lg text-center relative overflow-hidden py-2 px-3 h-8 mr-2 flex flex-col justify-center transition-all duration-200"         
      style={{
        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
      }}>
      <div className="absolute top-0 left-0 bg-white/10 text-white/80 text-[8px] px-1 py-1.5 rounded-br backdrop-blur-sm">
        广<br/>告
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium text-white">智能AI助手</div>
            <button 
              onClick={() => {
                window.open('https://chat.zh-ai.cc/', '_blank');
              }} 
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium text-white transition-colors backdrop-blur-sm border border-white/20 flex items-center gap-1 group"
            >
              立即体验
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <button onClick={closeAd} className="flex items-center text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

const AdBannerMobile: React.FC<AdBannerProps> = ({ show, closeAd }) => {
  if (!show) return null;

  return (
    <div className="w-full relative overflow-hidden py-2 px-3 h-8 flex flex-col justify-center transition-all duration-200"         
      style={{
        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
      }}>
      <div className="absolute top-0 left-0 bg-white/10 text-white/80 text-[8px] px-1 py-1.5 rounded-br backdrop-blur-sm">
        广<br/>告
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium text-white">智能AI助手</div>
            <button 
              onClick={() => {
                window.open('https://chat.zh-ai.cc/', '_blank');
              }} 
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium text-white transition-colors backdrop-blur-sm border border-white/20 flex items-center gap-1 group"
            >
              立即体验
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <button onClick={closeAd} className="flex items-center text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export { AdSection, AdBanner, AdBannerMobile }; 