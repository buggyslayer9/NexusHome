import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/* ── Media Data ──────────────────────────────────────── */
const HERO_ITEMS = [
    { id: 1, title: 'Dune: Part Two', sub: '2024 · Sci-Fi, Adventure', img: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', logo: 'DUNE' },
    { id: 2, title: 'Oppenheimer', sub: '2023 · Biography, Drama', img: 'https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg', logo: 'OPPENHEIMER' },
    { id: 3, title: 'Arcane', sub: '2024 · Animation, Action', img: 'https://image.tmdb.org/t/p/original/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg', logo: 'ARCANE' },
]

const CONTINUE = [
    { id: 10, title: 'Squid Game', ep: 'S2:E4', prog: 65, img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
    { id: 11, title: 'Arcane', ep: 'S2:E2', prog: 30, img: 'https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg' },
    { id: 12, title: 'The Last of Us', ep: 'S2:E1', prog: 80, img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
    { id: 13, title: 'Severance', ep: 'S2:E5', prog: 45, img: 'https://image.tmdb.org/t/p/w500/lFf6LLrQjYZbRT0iCnMOJaBuYOL.jpg' },
    { id: 14, title: 'Money Heist', ep: 'S5:E8', prog: 90, img: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
]

const TRENDING = [
    { id: 20, title: 'Godzilla Minus One', img: 'https://image.tmdb.org/t/p/w400/hkxxMIGaiCTmrEArK7J56rvbJqd.jpg' },
    { id: 21, title: 'Poor Things', img: 'https://image.tmdb.org/t/p/w400/kCGlIMHnOm8JPXNGFlkFqDjJFuk.jpg' },
    { id: 22, title: 'Killers of the Flower Moon', img: 'https://image.tmdb.org/t/p/w400/dB6Krk806zeqd917HIxyentriBw.jpg' },
    { id: 23, title: 'Anatomy of a Fall', img: 'https://image.tmdb.org/t/p/w400/qGGEKTiN9U06SAOLM8h2Kq6B5rk.jpg' },
    { id: 24, title: 'Past Lives', img: 'https://image.tmdb.org/t/p/w400/k3waqVXsnvf0LgFhGp02ztV4bCN.jpg' },
    { id: 25, title: 'Saltburn', img: 'https://image.tmdb.org/t/p/w400/qjhahqZcsn6rJqtByZryXBkHqwv.jpg' },
    { id: 26, title: 'Society of the Snow', img: 'https://image.tmdb.org/t/p/w400/2e853FDVSIso600RqAMunPxiZjq.jpg' },
    { id: 27, title: 'Fallen Leaves', img: 'https://image.tmdb.org/t/p/w400/thQjvXFEDxoq3xNNKOFTuaZcJj4.jpg' },
]

const RECENTLY = [
    { id: 30, title: 'The Zone of Interest', img: 'https://image.tmdb.org/t/p/w400/hUu9zyZmKDWfZLBFAJkXBaVzMon.jpg' },
    { id: 31, title: 'All of Us Strangers', img: 'https://image.tmdb.org/t/p/w400/uB7CtWs7LGa5ePXiogVQwqvU6Kc.jpg' },
    { id: 32, title: 'Dune: Part Two', img: 'https://image.tmdb.org/t/p/w400/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
    { id: 33, title: 'The Holdovers', img: 'https://image.tmdb.org/t/p/w400/VelWPhVMzDwhXqJMQNBEzTMSNAt.jpg' },
    { id: 34, title: 'May December', img: 'https://image.tmdb.org/t/p/w400/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
    { id: 35, title: 'Dream Scenario', img: 'https://image.tmdb.org/t/p/w400/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg' },
]

/* ── Section Row Component ───────────────────────────── */
function SectionRow({ title, children, linkTo }) {
    const ref = useRef(null)
    const scroll = (dir) => ref.current?.scrollBy({ left: dir * 400, behavior: 'smooth' })
    return (
        <section className="relative group/row">
            <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="text-white text-xl font-bold">{title}</h2>
                {linkTo && <Link to={linkTo} className="text-primary text-sm hover:underline">See All →</Link>}
            </div>
            {/* Scroll arrows */}
            <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white opacity-0 group-hover/row:opacity-100 transition-opacity -translate-y-1/2">
                <span className="icon">chevron_left</span>
            </button>
            <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white opacity-0 group-hover/row:opacity-100 transition-opacity -translate-y-1/2">
                <span className="icon">chevron_right</span>
            </button>
            <div ref={ref} className="media-row">{children}</div>
        </section>
    )
}

/* ── Home Page ───────────────────────────────────────── */
export default function Home() {
    const { t } = useTranslation()
    const [heroIdx, setHeroIdx] = useState(0)
    const hero = HERO_ITEMS[heroIdx]

    // Auto-rotate hero
    useEffect(() => {
        const id = setInterval(() => setHeroIdx(i => (i + 1) % HERO_ITEMS.length), 8000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="relative">
            {/* ── HERO BANNER (Full-bleed, Apple TV style) ─── */}
            <div className="relative h-[85vh] overflow-hidden">
                {HERO_ITEMS.map((item, i) => (
                    <div key={item.id} className={`absolute inset-0 transition-all duration-[1500ms] ease-out
                                        ${i === heroIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center" />
                    </div>
                ))}
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/60 via-transparent to-[#0a0e1a]/60" />

                {/* Hero content */}
                <div className="absolute bottom-16 left-12 right-12 max-w-2xl animate-slide-in-up" key={heroIdx}>
                    <h1 className="text-white text-6xl font-black tracking-tight mb-3 drop-shadow-2xl">{hero.title}</h1>
                    <p className="text-gray-300 text-lg mb-6">{hero.sub}</p>
                    <div className="flex gap-3">
                        <Link to={`/movie/${hero.id}`} className="nexus-btn-primary text-base px-8 py-4">
                            <span className="icon text-xl">play_arrow</span> Play Now
                        </Link>
                        <button className="nexus-btn-glass px-6">
                            <span className="icon">info</span> More Info
                        </button>
                    </div>
                </div>

                {/* Hero dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {HERO_ITEMS.map((_, i) => (
                        <button key={i} onClick={() => setHeroIdx(i)}
                            className={`h-1 rounded-full transition-all duration-500 ${i === heroIdx ? 'w-8 bg-primary' : 'w-4 bg-white/30'}`} />
                    ))}
                </div>
            </div>

            {/* ── CONTENT ROWS ─────────────────────────────── */}
            <div className="relative -mt-20 z-10 px-6 lg:px-12 pb-16 space-y-12">

                {/* Continue Watching */}
                <SectionRow title={t('continueWatching') || 'Continue Watching'}>
                    {CONTINUE.map((item, i) => (
                        <Link to={`/movie/${item.id}`} key={item.id}
                            className="backdrop-card w-72 h-40 flex-shrink-0 animate-slide-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white text-sm font-bold">{item.title}</p>
                                <p className="text-gray-400 text-xs">{item.ep}</p>
                                <div className="h-1 rounded-full bg-white/10 mt-2">
                                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${item.prog}%` }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </SectionRow>

                {/* Trending */}
                <SectionRow title="Trending Now" linkTo="/library/movies">
                    {TRENDING.map((item, i) => (
                        <Link to={`/movie/${item.id}`} key={item.id}
                            className="poster-card w-40 animate-slide-in-up" style={{ animationDelay: `${i * 0.06}s` }}>
                            <img src={item.img} alt={item.title} className="w-full aspect-[2/3] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold opacity-0 hover:opacity-100 transition-opacity">{item.title}</p>
                        </Link>
                    ))}
                </SectionRow>

                {/* Recently Added */}
                <SectionRow title="Recently Added" linkTo="/library/movies">
                    {RECENTLY.map((item, i) => (
                        <Link to={`/movie/${item.id}`} key={item.id}
                            className="poster-card w-40 animate-slide-in-up" style={{ animationDelay: `${i * 0.06}s` }}>
                            <img src={item.img} alt={item.title} className="w-full aspect-[2/3] object-cover" />
                        </Link>
                    ))}
                </SectionRow>
            </div>
        </div>
    )
}
