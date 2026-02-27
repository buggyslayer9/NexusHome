import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieDetail() {
    const nav = useNavigate()
    return (
        <div className="relative">
            <div className="h-[50vh] bg-gray-900 flex items-center justify-center relative">
                <span className="icon text-gray-700 text-9xl">movie</span>
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <button onClick={() => nav(-1)} className="absolute top-6 left-6 glass p-2 rounded-xl text-white">
                    <span className="icon">arrow_back</span>
                </button>
            </div>
            <div className="p-8 -mt-20 relative animate-slide-in-up">
                <h1 className="text-white text-5xl font-bold mb-4">Sample Title</h1>
                <div className="flex gap-3 mb-8">
                    <button className="nexus-btn-primary"><span className="icon">play_arrow</span> Play</button>
                    <button className="nexus-btn-primary bg-white/10 hover:bg-white/20 text-white shadow-none"><span className="icon">add</span> Watchlist</button>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    This is a sample overview of the selected media item. It features a stunning liquid glass design with high-quality transparencies and smooth animations.
                </p>
            </div>
        </div>
    )
}
