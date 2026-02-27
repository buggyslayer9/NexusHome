import React, { useState } from 'react'

export default function Login({ onLogin }) {
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false); onLogin() }, 800)
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
            <div className="liquid-blob w-96 h-96 -top-24 -left-24 opacity-30" />
            <div className="liquid-blob w-72 h-72 bottom-0 right-0 opacity-20" />
            <div className="relative z-10 w-full max-w-sm glass-card border-white/10 p-10 animate-slide-in-up">
                <h1 className="text-white text-3xl font-bold mb-2">NexusHome</h1>
                <p className="text-gray-400 mb-8">Sign in to your server</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input className="glass w-full px-4 py-3 rounded-xl text-sm outline-none border border-white/5 focus:border-primary/50" placeholder="Username" />
                    <input type="password" className="glass w-full px-4 py-3 rounded-xl text-sm outline-none border border-white/5 focus:border-primary/50" placeholder="Password" />
                    <button className="nexus-btn-primary w-full justify-center py-3 mt-4">
                        {loading ? 'Entering...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}
