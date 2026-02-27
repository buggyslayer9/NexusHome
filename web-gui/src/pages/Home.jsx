import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation()
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="p-8 max-w-screen-2xl mx-auto space-y-10">
            <div className="flex justify-between items-start">
                <div className="animate-slide-in-up">
                    <p className="text-gray-400">Welcome back,</p>
                    <h1 className="text-white text-4xl font-bold">Admin</h1>
                </div>
                <div className="glass-card py-4 px-8 text-center animate-slide-in-up">
                    <p className="text-primary text-3xl font-mono">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p className="text-gray-500 text-sm mt-1">{time.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['CPU Usage', 'RAM Info', 'Storage'].map((label, i) => (
                    <div key={label} className="glass-card animate-slide-in-up" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                        <p className="text-gray-400 text-sm">{label}</p>
                        <p className="text-white text-2xl font-bold mt-1">24%</p>
                    </div>
                ))}
            </div>

            <section>
                <h2 className="text-white text-xl font-bold mb-4">{t('media')}</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="glass-card h-32 flex items-end animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <p className="text-white font-bold">Category {i}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
