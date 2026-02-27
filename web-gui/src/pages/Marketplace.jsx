import React, { useState } from 'react'

const APPS = [
    { id: 'jellyfin', name: 'Jellyfin', icon: 'play_circle', desc: 'Self-hosted media server.', mem: '2 GB', status: 'running', color: 'from-purple-900/40' },
    { id: 'guacamole', name: 'Guacamole RDP', icon: 'desktop_windows', desc: 'Apache remote desktop access.', mem: '1 GB', status: 'running', color: 'from-sky-900/40' },
    { id: 'athan', name: 'Athan Daemon', icon: 'star', desc: 'Prayer times & volume ducking.', mem: '256 MB', status: 'running', color: 'from-emerald-900/40' },
    { id: 'dozzle', name: 'Dozzle Logs', icon: 'terminal', desc: 'Real-time container log viewer.', mem: '128 MB', status: 'available', color: 'from-yellow-900/40' },
    { id: 'watchtower', name: 'Watchtower', icon: 'update', desc: 'Auto-update Docker containers.', mem: '64 MB', status: 'available', color: 'from-rose-900/40' },
    { id: 'filebrowser', name: 'File Browser', icon: 'folder_open', desc: 'Web UI for /mnt/storage.', mem: '128 MB', status: 'available', color: 'from-violet-900/40' },
    { id: 'homebridge', name: 'Homebridge', icon: 'home', desc: 'HomeKit integration bridge.', mem: '256 MB', status: 'available', color: 'from-orange-900/40' },
    { id: 'pihole', name: 'Pi-hole', icon: 'shield', desc: 'Network-wide ad blocking.', mem: '128 MB', status: 'available', color: 'from-teal-900/40' },
]

const STATUS = {
    running: { label: 'Running', cls: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    installed: { label: 'Installed', cls: 'bg-primary/20 text-primary border-primary/30' },
    available: { label: 'Available', cls: 'bg-white/5 text-gray-400 border-white/10' },
}

export default function Marketplace() {
    const [apps, setApps] = useState(APPS)
    const [installing, setInstalling] = useState(null)

    const install = (id) => {
        setInstalling(id)
        setTimeout(() => {
            setApps(prev => prev.map(a => a.id === id ? { ...a, status: 'running' } : a))
            setInstalling(null)
        }, 2000)
    }

    return (
        <div className="pt-20 px-6 lg:px-12 pb-16">
            <div className="mb-10">
                <h1 className="text-white text-4xl font-black mb-2">App Store</h1>
                <p className="text-gray-400">Deploy Docker containers to your NexusHome server</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {apps.map((app, i) => (
                    <div key={app.id} className={`glass-card bg-gradient-to-br ${app.color} to-transparent animate-slide-in-up flex flex-col`}
                        style={{ animationDelay: `${i * 0.06}s` }}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                                    <span className="icon text-primary text-2xl">{app.icon}</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold">{app.name}</p>
                                    <p className="text-gray-500 text-xs">{app.mem} RAM</p>
                                </div>
                            </div>
                            <span className={`badge ${STATUS[app.status].cls}`}>{STATUS[app.status].label}</span>
                        </div>
                        <p className="text-gray-400 text-sm flex-1 mb-5">{app.desc}</p>
                        {app.status === 'available' ? (
                            <button onClick={() => install(app.id)} disabled={installing === app.id}
                                className="nexus-btn-primary w-full justify-center py-3">
                                {installing === app.id
                                    ? <><span className="icon animate-spin">progress_activity</span> Installing…</>
                                    : <><span className="icon">download</span> Install</>}
                            </button>
                        ) : (
                            <button className="nexus-btn-glass w-full justify-center py-3">
                                <span className="icon">open_in_new</span> Open
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
