import React, { useState } from 'react'

const SYSTEM = [
    { label: 'CPU', value: '23%', icon: 'memory', sub: 'Intel Core i5-3320M' },
    { label: 'RAM', value: '3.1 / 8 GB', icon: 'developer_board', sub: 'DDR3 Dual Channel' },
    { label: 'Storage', value: '420 GB / 2 TB', icon: 'hard_drive', sub: '/mnt/storage' },
    { label: 'Uptime', value: '14d 6h', icon: 'schedule', sub: 'Since last boot' },
]

const SERVICES = [
    { name: 'Jellyfin', status: 'running', mem: '1.1 GB', port: '8096' },
    { name: 'Athan Daemon', status: 'running', mem: '120 MB', port: '—' },
    { name: 'Guacamole', status: 'running', mem: '950 MB', port: '8080' },
    { name: 'Dozzle', status: 'stopped', mem: '—', port: '8888' },
]

export default function Settings() {
    const [theme, setTheme] = useState('ElegantFin Purple')

    return (
        <div className="pt-20 px-6 lg:px-12 pb-16 max-w-6xl mx-auto space-y-12">
            <h1 className="text-white text-4xl font-black">Settings</h1>

            {/* System Resources */}
            <section>
                <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">System Resources</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {SYSTEM.map(({ label, value, icon, sub }, i) => (
                        <div key={label} className="glass-card animate-slide-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                            <span className="icon text-primary text-2xl block mb-3">{icon}</span>
                            <p className="text-gray-400 text-xs">{label}</p>
                            <p className="text-white text-xl font-bold mt-1">{value}</p>
                            <p className="text-gray-600 text-xs mt-1">{sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Docker Services */}
            <section>
                <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Docker Services</h2>
                <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5">
                    {SERVICES.map((s, i) => (
                        <div key={s.name} className="flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors animate-slide-in-up"
                            style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className={`w-2.5 h-2.5 rounded-full ${s.status === 'running' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                            <p className="text-white font-semibold flex-1">{s.name}</p>
                            <p className="text-gray-500 text-sm w-24">{s.mem}</p>
                            <p className="text-gray-500 text-sm w-20">:{s.port}</p>
                            <span className={`badge ${s.status === 'running' ? 'text-emerald-400 border-emerald-500/30' : 'text-red-400 border-red-500/30'}`}>
                                {s.status}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Appearance */}
            <section>
                <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Appearance</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="glass-card flex items-center justify-between">
                        <div>
                            <p className="text-white font-semibold">Theme</p>
                            <p className="text-gray-500 text-xs">Liquid Glass palette</p>
                        </div>
                        <select value={theme} onChange={e => setTheme(e.target.value)}
                            className="bg-white/[0.06] text-white text-sm rounded-xl px-4 py-2 outline-none border border-white/10">
                            <option>ElegantFin Purple</option>
                            <option>Midnight Blue</option>
                            <option>Emerald Dark</option>
                        </select>
                    </div>
                    <div className="glass-card flex items-center justify-between">
                        <div>
                            <p className="text-white font-semibold">Network</p>
                            <p className="text-gray-500 text-xs">Cloudflare Tunnel</p>
                        </div>
                        <span className="badge text-emerald-400 border-emerald-500/30">
                            <span className="icon text-sm">cloud_done</span> Active
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
