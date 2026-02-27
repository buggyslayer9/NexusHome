import React from 'react'

export default function Marketplace() {
    return (
        <div className="p-8">
            <h1 className="text-white text-3xl font-bold mb-8">Marketplace</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Jellyfin', 'Guacamole', 'Athan Daemon', 'Dozzle', 'FileBrowser', 'Watchtower'].map((app, i) => (
                    <div key={app} className="glass-card flex flex-col gap-4 animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                <span className="icon text-primary">deployed_code</span>
                            </div>
                            <h2 className="text-white font-bold text-xl">{app}</h2>
                        </div>
                        <p className="text-gray-400 text-sm">Deploy and manage {app} for your home server with a single click.</p>
                        <button className="nexus-btn-primary w-full justify-center">Install</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
