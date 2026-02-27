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
        <header className="glass h-14 flex items-center px-4 gap-4 sticky top-0 z-20">
            <button onClick={onMenuClick} className="lg:hidden p-2 hover:bg-white/10 rounded-lg">
                <span className="icon">menu</span>
            </button>
            <div className="flex-1 max-w-sm relative">
                <span className="icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                <input className="w-full pl-9 pr-4 py-1.5 rounded-xl glass text-sm outline-none border border-white/5 focus:border-primary/50" placeholder="Search media…" />
            </div>
            <div className="flex-1" />
            <button onClick={toggleLang} className="nexus-btn-primary px-4 py-1.5 text-xs">
                {i18n.language === 'en' ? 'Arabic' : 'English'}
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <span className="icon text-primary text-base">person</span>
            </div>
        </header>
    )
}
