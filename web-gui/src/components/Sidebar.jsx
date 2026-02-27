import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

const NAV = [
    { to: '/home', icon: 'home', label: 'home' },
    { to: '/library/movies', icon: 'movie', label: 'movies' },
    { to: '/library/shows', icon: 'live_tv', label: 'shows' },
    { to: '/library/music', icon: 'music_note', label: 'music' },
    { to: '/marketplace', icon: 'storefront', label: 'marketplace' },
    { to: '/settings', icon: 'settings', label: 'settings' },
]

export default function Sidebar({ open, onClose }) {
    const { t } = useTranslation()
    const loc = useLocation()

    return (
        <>
            {/* Mobile backdrop */}
            {open && <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden" onClick={onClose} />}

            {/* Desktop spacer to prevent main content from hiding under collapsed sidebar */}
            <div className="hidden lg:block w-[72px] flex-shrink-0" />

            <aside className={clsx(
                'fixed inset-y-0 left-0 z-40 w-[72px] hover:w-56 group/nav glass flex flex-col py-6',
                'transition-all duration-500 ease-out overflow-hidden',
                open ? 'translate-x-0 w-56' : '-translate-x-full lg:translate-x-0'
            )}>
                {/* Logo */}
                <div className="flex items-center gap-3 px-5 mb-10 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-primary flex-shrink-0 flex items-center justify-center animate-pulse-glow">
                        <span className="icon text-white text-lg">hub</span>
                    </div>
                    <span className="text-white font-bold text-sm whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                        NexusHome
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col gap-1 px-3">
                    {NAV.map(({ to, icon, label }) => (
                        <NavLink key={to} to={to} onClick={onClose}
                            className={({ isActive }) => clsx('nav-item', isActive && 'active')}>
                            <span className="icon flex-shrink-0">{icon}</span>
                            <span className="whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                                {t(label)}
                            </span>
                        </NavLink>
                    ))}
                </nav>

                {/* Footer */}
                <div className="px-5 mt-4 border-t border-white/5 pt-4">
                    <p className="text-gray-600 text-[10px] whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity">
                        NexusHome OS v1.0
                    </p>
                </div>
            </aside>
        </>
    )
}
