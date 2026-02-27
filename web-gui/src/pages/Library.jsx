import React from 'react'
import { useParams } from 'react-router-dom'

export default function Library() {
    const { type } = useParams()
    return (
        <div className="p-8">
            <h1 className="text-white text-3xl font-bold capitalize mb-8">{type || 'Library'}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                    <div key={i} className="aspect-[2/3] glass-card flex items-center justify-center p-0 overflow-hidden relative group cursor-pointer animate-slide-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <span className="icon text-gray-600 text-4xl">movie</span>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                            <p className="text-white font-bold">Item {i}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
