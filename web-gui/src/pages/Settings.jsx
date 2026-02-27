import React from 'react'

export default function Settings() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-white text-3xl font-bold mb-8">Settings</h1>
            <div className="space-y-6">
                {['System Config', 'Network', 'Branding', 'Language'].map((section, i) => (
                    <div key={section} className="glass-card animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                        <h2 className="text-white font-bold mb-4">{section}</h2>
                        <div className="h-20 bg-white/5 rounded-xl border border-white/5 flex items-center px-6">
                            <p className="text-gray-500 text-sm">Configuration options for {section} will appear here.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
