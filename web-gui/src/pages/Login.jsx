import React, { useState } from 'react'

export default function Login({ onLogin }) {
    const [loading, setLoading] = useState(false)
    const [focused, setFocused] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false); onLogin() }, 1200)
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Cinematic background */}
            <div className="absolute inset-0">
                <img src="https://image.tmdb.org/t/p/original/zYlzMp2s3gjnOaVhSbu4VFe0oSN.jpg"
                    alt="" className="w-full h-full object-cover opacity-30 scale-110 blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/80 via-transparent to-[#0a0e1a]/80" />
            </div>

            {/* Animated blobs */}
            <div className="liquid-blob w-[500px] h-[500px] -top-32 -right-32" />
            <div className="liquid-blob w-[400px] h-[400px] -bottom-20 -left-20" style={{ animationDelay: '-3s' }} />

            {/* Login card */}
            <div className="relative z-10 w-full max-w-md mx-6 animate-slide-in-up">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center mx-auto mb-6 animate-pulse-glow shadow-glow">
                        <span className="icon text-white" style={{ fontSize: '2.5rem' }}>hub</span>
                    </div>
                    <h1 className="text-white text-4xl font-black tracking-tight">NexusHome</h1>
                    <p className="text-gray-400 text-base mt-2">Your home entertainment hub</p>
                </div>

                <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 flex flex-col gap-5">
                    <label className="flex flex-col gap-2">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Username</span>
                        <input onFocus={() => setFocused('user')} onBlur={() => setFocused(null)}
                            className={`w-full px-5 py-4 rounded-2xl text-white text-sm outline-none transition-all duration-500
                         bg-white/[0.04] border ${focused === 'user' ? 'border-primary/60 shadow-glow bg-white/[0.08]' : 'border-white/[0.06]'}`}
                            placeholder="admin" />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Password</span>
                        <input type="password" onFocus={() => setFocused('pass')} onBlur={() => setFocused(null)}
                            className={`w-full px-5 py-4 rounded-2xl text-white text-sm outline-none transition-all duration-500
                         bg-white/[0.04] border ${focused === 'pass' ? 'border-primary/60 shadow-glow bg-white/[0.08]' : 'border-white/[0.06]'}`}
                            placeholder="••••••••" />
                    </label>

                    <button type="submit" disabled={loading}
                        className="nexus-btn-primary w-full justify-center py-4 text-base mt-2 rounded-2xl">
                        {loading
                            ? <><span className="icon animate-spin">progress_activity</span> Connecting…</>
                            : <><span className="icon">login</span> Sign In</>}
                    </button>
                </form>

                <p className="text-center text-gray-600 text-xs mt-8">Powered by Debian 12 · Docker CE</p>
            </div>
        </div>
    )
}
