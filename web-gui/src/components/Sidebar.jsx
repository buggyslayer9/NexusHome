import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

const LINKS = [
    { to: '/home', icon: 'home', key: 'home' },
    { to: '/library/movies', icon: 'movie', key: 'movies' },
    { to: '/library/shows', icon: 'live_tv', key: 'shows' },
    { to: '/marketplace', icon: 'storefront', key: 'marketplace' },
    { to: '/settings', icon: 'settings', key: 'settings' },
]

export default function Sidebar({ open, onClose }) {
    const { t } = useTranslation()
    return (
        <>
            <aside className={clsx(
                'fixed inset-y-0 left-0 z-40 w-64 glass flex flex-col py-6 transition-transform lg:static lg:translate-x-0',
                open ? 'translate-x-0' : '-translate-x-full'
            )}>
                <div className="flex items-center gap-3 px-5 mb-8">
                    <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center animate-pulse-glow">
                        <span className="icon text-white">hub</span>
                    </div>
                    <span className="text-white font-bold text-sm">NexusHome</span>
                </div>
                <nav className="px-3 flex flex-col gap-1">
                    {LINKS.map(({ to, icon, key }) => (
                        <NavLink key={to} to={to} className={({ isActive }) => clsx('nav-item', isActive && 'active')}>
                            <span className="icon">{icon}</span> {t(key)}
                        </NavLink>
                    ))}
                </nav>
            </aside>
            {open && <div className="fixed inset-0 bg-black/40 lg:hidden" onClick={onClose} />}
        </>
    )
}
