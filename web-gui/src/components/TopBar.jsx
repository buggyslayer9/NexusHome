import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TopBar({ onMenuClick }) {
    const { t, i18n } = useTranslation()
    const toggleLang = () => {
        const next = i18n.language === 'en' ? 'ar' : 'en'
        i18n.changeLanguage(next)
        document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
    }

    return (
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center px-6 py-4 gap-4"
            style={{ background: 'linear-gradient(180deg, rgba(10,14,26,0.8) 0%, transparent 100%)' }}>
            {/* Hamburger (mobile) */}
            <button onClick={onMenuClick} className="lg:hidden p-2 rounded-xl hover:bg-white/10 text-white transition">
                <span className="icon text-xl">menu</span>
            </button>

            <div className="flex-1" />

            {/* Search */}
            <div className="relative w-72">
                <span className="icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">search</span>
                <input className="w-full pl-10 pr-4 py-2 rounded-2xl text-sm text-white placeholder-gray-500 outline-none
                          bg-white/[0.06] border border-white/[0.08] focus:border-primary/40 focus:bg-white/[0.1]
                          backdrop-blur-xl transition-all duration-300"
                    placeholder="Search movies, shows, music…" />
            </div>

            {/* Language */}
            <button onClick={toggleLang}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white
                         bg-white/[0.06] border border-white/[0.08] hover:border-primary/30 transition-all">
                {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* User avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center
                      border-2 border-white/10 shadow-glow cursor-pointer hover:scale-110 transition-transform">
                <span className="icon text-white text-sm">person</span>
            </div>
        </header>
    )
}
