import React from 'react'
import { useNavigate } from 'react-router-dom'

const MOVIE = {
    title: 'Dune: Part Two',
    year: 2024, runtime: '2h 46m', rating: 'PG-13', score: 8.6,
    tagline: 'Long live the fighters.',
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future.',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    backdrop: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    cast: [
        { name: 'Timothée Chalamet', role: 'Paul Atreides', img: 'https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rOTDF4lkn3qQdLMk.jpg' },
        { name: 'Zendaya', role: 'Chani', img: 'https://image.tmdb.org/t/p/w185/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg' },
        { name: 'Austin Butler', role: 'Feyd-Rautha', img: 'https://image.tmdb.org/t/p/w185/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg' },
        { name: 'Florence Pugh', role: 'Princess Irulan', img: 'https://image.tmdb.org/t/p/w185/7DLOiSjBgwkZbfAUBb6KmFBNtJH.jpg' },
        { name: 'Javier Bardem', role: 'Stilgar', img: 'https://image.tmdb.org/t/p/w185/IShnFg6ijSHfl9cuxHK0gx7ST7.jpg' },
    ],
}

export default function MovieDetail() {
    const nav = useNavigate()
    return (
        <div className="relative min-h-screen">
            {/* ── Full-bleed backdrop ─────────────────────── */}
            <div className="relative h-[75vh] overflow-hidden">
                <img src={MOVIE.backdrop} alt={MOVIE.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/70 via-transparent to-[#0a0e1a]/40" />

                {/* Back */}
                <button onClick={() => nav(-1)} className="absolute top-6 left-6 z-20 glass rounded-2xl p-3 text-white hover:bg-white/10 transition">
                    <span className="icon text-xl">arrow_back</span>
                </button>

                {/* Hero content */}
                <div className="absolute bottom-0 left-0 right-0 px-12 pb-12">
                    <div className="max-w-3xl animate-slide-in-up">
                        <h1 className="text-white text-6xl font-black tracking-tight drop-shadow-2xl mb-2">{MOVIE.title}</h1>

                        {/* Metadata badges */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="badge"><span className="icon text-yellow-400 text-sm">star</span> {MOVIE.score}</span>
                            <span className="badge">{MOVIE.year}</span>
                            <span className="badge">{MOVIE.runtime}</span>
                            <span className="badge">{MOVIE.rating}</span>
                            {MOVIE.genres.map(g => <span key={g} className="badge">{g}</span>)}
                        </div>

                        <p className="text-gray-200 italic text-lg mb-4">{MOVIE.tagline}</p>
                        <p className="text-gray-400 leading-relaxed text-base mb-8 max-w-2xl">{MOVIE.overview}</p>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button className="nexus-btn-primary text-lg px-10 py-4">
                                <span className="icon text-2xl">play_arrow</span> Play
                            </button>
                            <button className="nexus-btn-glass px-6 py-4"><span className="icon">add</span> Watchlist</button>
                            <button className="nexus-btn-glass px-5 py-4"><span className="icon">favorite</span></button>
                            <button className="nexus-btn-glass px-5 py-4"><span className="icon">share</span></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Details section ─────────────────────────── */}
            <div className="px-12 py-12 space-y-12">
                {/* Cast carousel */}
                <section>
                    <h2 className="text-white text-xl font-bold mb-6">Cast & Crew</h2>
                    <div className="media-row gap-6">
                        {MOVIE.cast.map((p, i) => (
                            <div key={p.name} className="flex-shrink-0 text-center group animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <img src={p.img} alt={p.name}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-transparent group-hover:border-primary transition-all duration-500 mx-auto" />
                                <p className="text-white text-sm font-semibold mt-3">{p.name}</p>
                                <p className="text-gray-500 text-xs">{p.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech specs */}
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">Details</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Video', value: '4K HDR · H.265' },
                            { label: 'Audio', value: 'Dolby Atmos · 7.1' },
                            { label: 'Subtitles', value: 'English, Arabic' },
                            { label: 'Director', value: 'Denis Villeneuve' },
                        ].map(({ label, value }) => (
                            <div key={label} className="glass-card py-4 px-5">
                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{label}</p>
                                <p className="text-white text-sm mt-1">{value}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
