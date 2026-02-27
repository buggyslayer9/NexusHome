import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ALL_MEDIA = [
    { id: 20, title: 'Godzilla Minus One', year: 2023, img: 'https://image.tmdb.org/t/p/w400/hkxxMIGaiCTmrEArK7J56rvbJqd.jpg' },
    { id: 21, title: 'Poor Things', year: 2023, img: 'https://image.tmdb.org/t/p/w400/kCGlIMHnOm8JPXNGFlkFqDjJFuk.jpg' },
    { id: 22, title: 'Killers of the Flower Moon', year: 2023, img: 'https://image.tmdb.org/t/p/w400/dB6Krk806zeqd917HIxyentriBw.jpg' },
    { id: 23, title: 'Anatomy of a Fall', year: 2023, img: 'https://image.tmdb.org/t/p/w400/qGGEKTiN9U06SAOLM8h2Kq6B5rk.jpg' },
    { id: 24, title: 'Oppenheimer', year: 2023, img: 'https://image.tmdb.org/t/p/w400/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: 25, title: 'Saltburn', year: 2023, img: 'https://image.tmdb.org/t/p/w400/qjhahqZcsn6rJqtByZryXBkHqwv.jpg' },
    { id: 26, title: 'Society of the Snow', year: 2024, img: 'https://image.tmdb.org/t/p/w400/2e853FDVSIso600RqAMunPxiZjq.jpg' },
    { id: 27, title: 'Fallen Leaves', year: 2023, img: 'https://image.tmdb.org/t/p/w400/thQjvXFEDxoq3xNNKOFTuaZcJj4.jpg' },
    { id: 30, title: 'The Zone of Interest', year: 2024, img: 'https://image.tmdb.org/t/p/w400/hUu9zyZmKDWfZLBFAJkXBaVzMon.jpg' },
    { id: 31, title: 'All of Us Strangers', year: 2024, img: 'https://image.tmdb.org/t/p/w400/uB7CtWs7LGa5ePXiogVQwqvU6Kc.jpg' },
    { id: 32, title: 'Dune: Part Two', year: 2024, img: 'https://image.tmdb.org/t/p/w400/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
    { id: 33, title: 'The Holdovers', year: 2023, img: 'https://image.tmdb.org/t/p/w400/VelWPhVMzDwhXqJMQNBEzTMSNAt.jpg' },
]

const FILTERS = ['All', 'Action', 'Drama', 'Sci-Fi', 'Comedy', 'Thriller']

export default function Library() {
    const { type = 'movies' } = useParams()
    const [search, setSearch] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered = ALL_MEDIA.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="pt-20 px-6 lg:px-12 pb-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <h1 className="text-white text-4xl font-black capitalize">{type}</h1>
                <p className="text-gray-500 text-sm">{filtered.length} titles</p>
                <div className="flex-1" />
                <div className="relative w-64">
                    <span className="icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                    <input value={search} onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-gray-600 outline-none
                       bg-white/[0.06] border border-white/[0.08] focus:border-primary/40 transition-all" placeholder={`Search ${type}…`} />
                </div>
            </div>

            {/* Filter pills */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {FILTERS.map(f => (
                    <button key={f} onClick={() => setActiveFilter(f)}
                        className={`badge cursor-pointer transition-all whitespace-nowrap ${activeFilter === f ? 'bg-primary/20 border-primary/40 text-white' : 'hover:bg-white/10'}`}>
                        {f}
                    </button>
                ))}
            </div>

            {/* Poster grid */}
            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
                {filtered.map((item, i) => (
                    <Link to={`/movie/${item.id}`} key={item.id}
                        className="poster-card group animate-slide-in-up" style={{ animationDelay: `${i * 0.04}s` }}>
                        <img src={item.img} alt={item.title} className="w-full aspect-[2/3] object-cover rounded-xl" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3">
                            <p className="text-white text-xs font-bold">{item.title}</p>
                            <p className="text-gray-400 text-[10px]">{item.year}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
